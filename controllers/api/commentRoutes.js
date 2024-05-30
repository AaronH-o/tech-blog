const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require ('../../utils/auth');

router.post('/', async (req, res) => {
  try {
    const newComment = await Comment.create({
      content: req.body.content,
      blogpost_id: req.body.blogpost_id,
      user_id: req.session.user_id,
    });
    console.log(newComment);
    res.status(201).json(newComment);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const commentData = await Comment.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!commentData) {
      res.status(404).json({ message: 'No comment found with this id!' });
      return;
    }

    res.status(200).json(commentData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
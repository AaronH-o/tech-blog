const router = require('express').Router();
const { BlogPost } = require('../../models');
const withAuth = require ('../../utils/auth');


router.post('/', async (req, res) => {
  try {
    const newBlogPost = await BlogPost.create({
      title: req.body.title,
      content: req.body.content,
      user_id: req.session.user_id,
    });
    console.log(newBlogPost);
    res.status(201).json(newBlogPost);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const updatedBlogPost = await BlogPost.findByPk(req.params.id);
    
    if (!updatedBlogPost) {
      return res.status(404).json({ error: 'Blog post not found' });
    }

    await updatedBlogPost.update({
      title: req.body.title,
      content: req.body.content
    });

    console.log(updatedBlogPost);
    res.status(200).json(updatedBlogPost);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const blogPostData = await BlogPost.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!blogPostData) {
      res.status(404).json({ message: 'No blog post found with this id!' });
      return;
    }

    res.status(200).json(blogPostData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
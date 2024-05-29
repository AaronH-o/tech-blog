const router = require('express').Router();
const { BlogPost} = require('../../models');
// const withAuth = require ('../../utils/auth');

router.post('/',  async (req, res) => {
  try {
    const newBlogPost = await BlogPost.create({
      title: req.body.title,
      content: req.body.content,
    });
    console.log(newBlogPost);
    res.status(201).json(newBlogPost);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
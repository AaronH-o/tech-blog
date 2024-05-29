const router = require('express').Router();
const { BlogPost, User} = require('../../models');
const withAuth = require ('../../utils/auth');

router,post('/', withAuth, async (req, res) => {
  try {
    const newBlogPost = await BlogPost.create({
      title: req.body.title,
      rating: req.body.rating,
      user_id: req.session.user_id,
    });
    console.log(newBlogPost);
    res.status(201).json(newBlogPost);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
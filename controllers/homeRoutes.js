const router = require('express').Router();
const { BlogPost, Comment, User } = require('../models');
// Import the custom middleware
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    const blogPostData = await BlogPost.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const blogPosts = blogPostData.map((blogPost) => blogPost.get({ plain:true }));

    res.render('homepage', {
      blogPosts,
      loggedIn: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/profile', async (req, res) => {
  try {
    const blogPostData = await BlogPost.findAll({
      where: {
        user_id: req.session.user_id,
      },
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const blogPosts = blogPostData.map((blogPost) => blogPost.get({ plain:true }));

    res.render('homepage', {
      blogPosts,
      loggedIn: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/post/:id', async (req, res) => {
  try {
    const postData = await BlogPost.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const post = postData.get({ plain: true });

    const commentData = await Comment.findAll({
      where: {
        blogpost_id: req.params.id,
      },
      include: [
        {model: User},
        {model: BlogPost}
      ],
    });

    const comments = commentData.map((comment) => comment.get({ plain:true }));

    res.render('singlepost', {
      ...post,
      comments,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

module.exports = router;
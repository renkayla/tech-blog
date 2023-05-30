// homeController.js

const router = require('express').Router();
const { Post, User, Comment } = require('../models'); // Adjust the paths based on your project structure

// Define the homepage route
router.get('/', async (req, res) => {
  try {
    // Retrieve blog posts from the database
    const posts = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ['username'],
        },
        {
          model: Comment,
          include: [{ model: User, attributes: ['username'] }],
        },
      ],
    });

    // Render the 'home' template and pass the retrieved posts as data
    res.render('home', { posts });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;

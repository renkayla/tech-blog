// postController.js

const router = require('express').Router();
const { Post, User, Comment } = require('../models'); // Adjust the paths based on your project structure

// Define the route to create a new blog post
router.post('/create', async (req, res) => {
  try {
    const { title, content } = req.body;

    // Create a new blog post in the database
    const newPost = await Post.create({
      title,
      content,
      user_id: req.session.user_id,
    });

    res.status(200).json(newPost);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Define the route to update a blog post
router.put('/:id', async (req, res) => {
  try {
    const { title, content } = req.body;

    // Update the blog post in the database
    const updatedPost = await Post.update(
      { title, content },
      {
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      }
    );

    if (updatedPost[0] === 0) {
      res.status(404).json({ message: 'No post found with this id associated with the current user.' });
      return;
    }

    res.status(200).json(updatedPost);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Define the route to delete a blog post
router.delete('/:id', async (req, res) => {
  try {
    // Delete the blog post from the database
    const deletedPost = await Post.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (deletedPost === 0) {
      res.status(404).json({ message: 'No post found with this id associated with the current user.' });
      return;
    }

    res.status(200).json(deletedPost);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;

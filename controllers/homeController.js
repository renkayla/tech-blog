import { Router } from 'express';
import { Post, User, Comment } from '../index.js';

const router = Router();

// Define the homepage route
router.get('/', async (req, res) => {
  try {
    // Retrieve blog posts from the database
    const posts = await Post.findAll({
      include: [
        {
          model: User,
          as: 'user', // Specify the alias 'user' for the User model
          attributes: ['username'],
        },
        {
          model: Comment,
          include: [{ model: User, as: 'user', attributes: ['username'] }], // Specify the alias 'user' for the User model
          as: 'comments', // Specify the alias 'comments' for the Comment model
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

export default router;

import { Router } from 'express';
import User from '../models/User.js';

const router = Router();

// Define the sign-up route
router.post('/signup', async (req, res) => {
  try {
    const { username, password } = req.body;

    // Create a new user in the database
    const newUser = await User.create({ username, password });

    // Set the user session
    req.session.save(() => {
      req.session.user_id = newUser.id;
      req.session.logged_in = true;
      res.status(200).json(newUser);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Define the sign-in route
router.post('/signin', async (req, res) => {
  try {
    const { username, password } = req.body;

    // Find the user with the provided username
    const user = await User.findOne({ where: { username } });

    if (!user) {
      res.status(400).json({ message: 'Incorrect username or password. Please try again.' });
      return;
    }

    // Validate the password
    const validPassword = await user.checkPassword(password);

    if (!validPassword) {
      res.status(400).json({ message: 'Incorrect username or password. Please try again.' });
      return;
    }

    // Set the user session
    req.session.save(() => {
      req.session.user_id = user.id;
      req.session.logged_in = true;
      res.status(200).json({ user: user.username, message: 'You are now logged in!' });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Define the sign-out route
router.post('/signout', (req, res) => {
  if (req.session.logged_in) {
    // Destroy the session and log the user out
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

export default router;

import express from 'express';
import exphbs from 'express-handlebars';
import session from 'express-session';
import sequelize from './config/connection.js';
import User from './models/User.js';
import Post from './models/Post.js';
import Comment from './models/Comment.js';
import homeController from './controllers/homeController.js';
import postController from './controllers/postController.js';
import userController from './controllers/userController.js';

export { User, Post, Comment };

// Set up the Express.js application
const app = express();
const PORT = process.env.PORT || 3000;

// Configure middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Configure session management
app.use(
  session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true,
  })
);

// Create an instance of the Handlebars engine
const hbs = exphbs.create();

// Set up Handlebars as the view engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Sync the models with the database
(async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connection has been established successfully.');

    // Sync the models with the database
    await User.sync();
    await Post.sync();
    await Comment.sync();

    // Define routes and corresponding controller methods
    app.use('/', homeController);
    app.use('/posts', postController);
    app.use('/users', userController);

    // Start the server
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();


/*import express from 'express';
import exphbs from 'express-handlebars';
import session from 'express-session';
import homeController from './controllers/homeController.js';
import postController from './controllers/postController.js';
import userController from './controllers/userController.js';

// Set up the Express.js application
const app = express();
const PORT = process.env.PORT || 3000;

// Configure middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Configure session management
app.use(
  session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true,
  })
);

// Create an instance of the Handlebars engine
const hbs = exphbs.create();

// Set up Handlebars as the view engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Define routes and corresponding controller methods
app.use('/', homeController);
app.use('/posts', postController);
app.use('/users', userController);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});*/


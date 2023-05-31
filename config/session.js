import session from 'express-session';

const sessionConfig = {
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false,
    maxAge: 3600000,
  },
};

const sessionMiddleware = session(sessionConfig);

export default sessionMiddleware;

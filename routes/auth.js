const express = require('express');
const router = express.Router();
const passport = require('../config/passport');

// Login
router.get('/login', passport.authenticate('github'));

// Callback
router.get('/github/callback',
  passport.authenticate('github', {
    failureRedirect: '/api-docs'
  }),
  (req, res) => {
    req.session.user = req.user;
    res.redirect('/');
  }
);

// Logout
router.get('/logout', (req, res) => {
  req.logout(() => {
    req.session.destroy();
    res.redirect('/');
  });
});

// Status
router.get('/', (req, res) => {
  if (req.session.user) {
    res.send(`Logged in as ${req.session.user.username}`);
  } else {
    res.send('Logged out');
  }
});

module.exports = router;
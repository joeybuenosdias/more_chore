const express = require('express');
const router = express.Router();
const User = require('../models/user');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');

passport.use(
  new GoogleStrategy({
  clientID: keys.googleClientID,
  clientSecret: keys.googleClientSecret,
  callbackURL: '/api/auth/google/callback'
}, (accessToken) => {
  console.log(accessToken);
}));

router.get('/api/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
  })
);

module.exports = router;

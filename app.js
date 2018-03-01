const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost/more_chore'

mongoose.connect(mongoUri);
mongoose.connection
  .once('open', () => console.log('Good to go!'))
  .on('err', () => {
    console.warn('Warning Server', error)
  });

const app = express();

const chores = require('./routes/chores');
const users = require('./routes/users');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.resolve(__dirname, './client/build')));

app.use('/api/chores', chores);
app.use('/api/users', users)

app.get('*', (request, response) => {
   response.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

module.exports = app;

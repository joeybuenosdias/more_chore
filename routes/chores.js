const express = require('express');
const router = express.Router();
const Chore = require('../models/chore');

router.get('/', (req, res) => {
  Chore.find((err, chores) => {
    res.json(chores);
  });
});

router.post('/', (req, res) => {
  let { title, description } = req.body;
  new Chore({
    title,
    description
  }).save((err, chore) => {
      if(err)
        res.json(err);
      res.json(chore);
  });
});

module.exports = router;

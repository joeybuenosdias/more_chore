const express = require('express');
const router = express.Router();
const Chore = require('../models/chore');

router.get('/', (req, res) => {
  Chore.find({ userId: req.user._id }, (err, chores) => {
    res.json(chores);
  });
});

router.post('/', (req, res) => {
  let { title, description } = req.body;
  let userKey = req.user._id
  new Chore({
    userId: userKey,
    title,
    description
  }).save((err, chore) => {
      if(err)
        res.json(err);
      res.json(chore);
  });
});

router.put('/:id', (req, res) => {
  let { title, description, completed } = req.body;
  Chore.findByIdAndUpdate(
    req.params.id,
    {$set: { title, description, completed }},
    {new: true},
    (err, chore) => {
      if(err)
        return res.json(err)
      return res.json(chore)
    }
  )

})

router.delete('/:id', (req, res) => {
  Chore.findByIdAndRemove(req.params.id, (err) => {
    if(err)
      return res.json(err)
    return res.sendStatus(204)
  });
});

module.exports = router;

const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .err(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const username = req.body.username;

    const newuser = new User({ username });

    newUser.save()
        .then(() => username.json('New User added!!!'))
        .err(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
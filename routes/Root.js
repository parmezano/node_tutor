const express = require('express');
const router = express.Router();
const users = require('../data.js');

router.post('/', (req, res) => {
    res.send(req.body)
})

router.get('/', (req, res) => {
    res.send(users)
})

module.exports = router;
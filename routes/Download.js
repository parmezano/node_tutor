const path = require("path");
const express = require('express');
const router = express.Router()

router.get('/', (req,res)=>{
    res.download(path.resolve('static', 'index.html'));
});

module.exports = router;
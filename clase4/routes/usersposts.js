const express = require('express');
const router = express.Router({ mergeParams : true});
let { postsList } = require('../data');

router.get('/', function (req, res) {
    let userId = req.params.userId;

    // filtrado y devolver!
    res.json({ message: 'posts del usuario id: ' + userId});
});


module.exports = router;
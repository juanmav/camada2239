const express = require("express");
const router = express.Router({mergeParams: true});
const upload = require('./helpers/uploadHelper').upload;

router.get('/:imageId', function (req, res) {
    let imageId = req.params.imageId;
    res.sendFile(imageId, { root: './uploads'});
});

router.post('/', upload.single('file'),
    function (req, res) {
        console.log(req.file);
        console.log(req.files);
        console.log(req.body);
        //res.json({ id: req.file.filename });
        res.json({});
    });

module.exports = router;
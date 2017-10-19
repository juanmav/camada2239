const multer = require('multer');
const crypto = require('crypto');
const mime = require('mime');

let upload = multer({
    storage: multer.diskStorage({
        destination : 'uploads/',
        limits: {
            fileSize: 5120000
        },
        filename: function (req, file, cb) {
            console.log('AHI VIENE!');
            crypto.pseudoRandomBytes(16, function (err, raw) {
                if (err) return cb(err);
                cb(null, raw.toString('hex') +'.'+ mime.extension(file.mimetype))
            })
        }
    })
});

module.exports = {
    upload : upload,
};
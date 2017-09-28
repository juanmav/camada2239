module.exports = function (req, res, next) {
    console.log('pasa todo por mi!');

    console.log(req);

    next();
};
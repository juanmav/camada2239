const expressjwt = require('express-jwt');

module.exports = expressjwt({
    secret: 'misecretoocultoalmundo',
    getToken: function(req) {
        if (req.headers && req.headers['x-access-token']) {
            return req.headers['x-access-token'];
        }
        return null;
    }
});
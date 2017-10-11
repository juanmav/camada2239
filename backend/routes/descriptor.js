const express = require('express');
const router = express.Router();

// Configuracion.

router.get('/', function (req, res) {
    // HATEOUS
    res.json({
        appName: 'Twitter-clon',
        endpoints: [
            {
              name: 'Users',
              uri: './users'
            },
            {
                name: 'Tweets',
                uri: './tweets'
            }
        ]
    })
});

module.exports = router;
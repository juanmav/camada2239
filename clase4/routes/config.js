const express = require('express');
const router = express.Router();

router.get('/', function(req, res){
    res.json(
        {
            appName: 'Servicio de Usuarios',
            endpoints: [
                {
                    name: 'Usuarios',
                    description: 'Servicios de usuarios ABM-L',
                    url: '/users'
                }
            ]
        }
    );
});

module.exports = router;
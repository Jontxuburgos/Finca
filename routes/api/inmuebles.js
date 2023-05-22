const router = require('express').Router();

router.use('/', (req, res) => { 
    res.send('Prueba');

});

module.exports = router;
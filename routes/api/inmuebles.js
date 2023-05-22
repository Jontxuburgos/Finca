const router = require('express').Router();

router.get('/', (req, res) => { 
    res.send('Prueba');

});
router.post('/', (req, res) => {
    res.send('Otra Respuesta');
});
router.put('/:InmuebleId', (req, res) => {
    res.send('Actualiza');
});
router.delete('/:InmuebleId', (req, res) => {
    res.send('Borrado');
});

module.exports = router;
const router = require('express').Router();

const Inmueble = require('../../models/inmueble.model');
//GET
router.get('/', async (req, res) => {
    try {
    const inmuebles = await Inmueble.find();
        res.json(inmuebles);
    } catch (error) {
        res.json({ fatal: error.message });
    }
});
//POST
router.post('/', async (req, res) => {
    try {
        const result = await Inmueble.create(req.body);
        res.json(result);
    } catch (error) {
        res.json({ fatal: error.message });
    }
});
//PUT
router.put("/:inmuebleId", async (req, res) => {
    const { inmuebleId } = req.params;
  
    const result = await Inmueble.findByIdAndUpdate(inmuebleId, req.body, {
      new: true,
    });
    res.json(result);
  });














//DELETE
router.delete('/:InmuebleId', (req, res) => {
    res.send('Borrado');
});

module.exports = router;
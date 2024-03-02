var express = require('express');
var router = express.Router();
const Personaje = require('../models/personaje');

// Obtener la lista de personajes
router.get('/', async (req, res) => {
  try {
    const personajes = await Personaje.find({}, 'id name image gender created');
    res.render('personajes', { personajes });
  } catch (error) {
    res.status(500).send('Error al obtener la lista de personajes.');
  }
});

router.get('/:name', async (req, res) => {
  const {name} = req.params;
  try {
    const personajes = await Personaje.find({name:name}, 'id name gender created');
    console.log(personajes);
    res.render('personajes', {personajes});
  } catch (error) {
    res.status(500).send('Error al obtener la lista de personajes.');
  }
});

module.exports = router;
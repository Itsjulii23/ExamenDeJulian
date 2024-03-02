var express = require('express');
var router = express.Router();
const personaje=require('../models/personaje.js');

/* GET home page. */

async function conection(res) {
  try {
    const personajes = await personaje.find({});
    return personajes;
  } catch (err) {
    console.log(err);
    res.status;
  }
}

/* GET home page. */
router.get('/', async function(req, res, next) {
  personajes = await conection(res);
  res.render('index', { title: 'Express', personajes: personajes });
});

module.exports = router;
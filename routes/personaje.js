var express = require("express");
var router = express.Router();
const Personaje = require("../models/personaje");

/* GET users listing. */
router.get("/todos", async function (req, res, next) {
  try {
    const personajes = await Personaje.find({});
    res.render("index", { personajes });
  } catch (error) {
    res.status(500).send("Error al obtener la lista de personajes.");
  }
});

router.get("/:id", async function (req, res, next) {
  const { id } = req.params;
  try {
    let personaje = await Personaje.find({ id: id });
    personaje = personaje[0];
    // console.log(personaje);
    res.render("personaje", { personaje });
  } catch {
    res.end();
  }
});

module.exports = router;
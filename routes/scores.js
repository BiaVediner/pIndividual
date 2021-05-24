var express = require("express");
var router = express.Router();
var sequelize = require("../models").sequelize;
var Score = require("../models").Score;

var points_game;
var idGame;

router.get("/gettingGame/:game", async function (req, res, next) {

  idGame = req.params.game

  var instrucaoSql = `select points from game where idGame = ${idGame}`;

  try {
    var resultado = await sequelize.query(instrucaoSql);
    res.status(200).send("Dado inserido com sucesso.");
    points_game = resultado[0][0].points
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post("/registerScore/:user", function (req, res, next) {

  let id_user = req.params.user;

  Score.create({
    user_id: id_user,
    game_id: idGame,
    score: points_game
  })
    .then((result) => {
      console.log(`Record created	: ${result}`);
      res.send(result);
    })
    .catch((error) => {
			console.log(error)
      res.status(500).send(error.message);
    });
});

module.exports = router;
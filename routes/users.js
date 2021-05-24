var express = require("express");
var router = express.Router();
var sequelize = require("../models").sequelize;
var User = require("../models").User;

let sessions = [];

/* Recuperar usuário por login e senha */
router.post("/authenticate", function (req, res, next) {
  console.log("Retrieving user by username and password");

  var username = req.body.username; // depois de .body, use o nome (name) do campo em seu formulário de login
  var password = req.body.password; // depois de .body, use o nome (name) do campo em seu formulário de login

  let instructionSql = `select * from user where username='${username}' and password='${password}'`;
  console.log(instructionSql);

  sequelize
    .query(instructionSql, {
      model: User,
    })
    .then((result) => {
      console.log(`Found: ${result.length}`);

      if (result.length == 1) {
        sessions.push(result[0].dataValues.username);
        console.log("sessions: ", sessions);
        res.json(result[0]);
      } else if (result.length == 0) {
        res.status(403).send("Invalid username and/or password");
      } else {
        res.status(403).send("More than one user with the same username and password!");
      }
    }) 
    .catch((error) => {
      res.status(500).send(error.message);
    });
});

/* Cadastrar usuário */
router.post("/register", function (req, res, next) {
  console.log("Creating user");

  User.create({
    email: req.body.email,
    password: req.body.password,
    username: req.body.username,
    gender: req.body.gender
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

/* Verificação de usuário */
router.get("/session/:login", function (req, res, next) {
  let login = req.params.login;
  console.log('login', login)
  console.log(`Verifing if the user ${login} has an active session`);

  let active_session = false;
  for (let u = 0; u < sessions.length; u++) {
    console.log('sessao',sessions[u])
    if (sessions[u] == login) {
      active_session = true;
      break;
    }
  }

  if (active_session) {
    let message = `User ${login} has active session!`;
    console.log(message);
    res.send(message);
  } else {
    res.sendStatus(403);
  }
});

/* Logoff de usuário */
router.get("/logOut/:login", function (req, res, next) {
  let login = req.params.login;
  console.log(`Ending user ${login} session`);
  let new_sessions = [];
  for (let u = 0; u < sessions.length; u++) {
    if (sessions[u] != login) {
      new_sessions.push(sessions[u]);
    }
  }
  sessions = new_sessions;
  res.send(`User ${login} session successfully completed!`);
});

/* Recuperar todos os usuários */
router.get("/", function (req, res, next) {
  console.log("Recuperando todos os usuários");
  User.findAndCountAll()
    .then((result) => {
      console.log(`${result.count} registros`);

      res.json(result.rows);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send(error.message);
    });
});

module.exports = router;

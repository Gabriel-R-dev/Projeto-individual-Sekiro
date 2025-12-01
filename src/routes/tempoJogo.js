var express = require("express");
var router = express.Router();

var tempoController = require("../controllers/tempoJogoController");

router.post("/registrar", function (req, res) {
    tempoController.registrar(req, res);
});

router.get("/listar/:idUsuario", function (req, res) {
    tempoController.listar(req,res)
});

router.get("/media-geral", function (req, res) {
    tempoController.mediaGeral(req, res);
});

router.get("/ranking", function (req, res) {
    tempoController.ranking(req, res);
});

module.exports = router;
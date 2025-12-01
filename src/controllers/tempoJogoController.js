var tempoModel = require("../models/tempoJogoModel");

function registrar(req, res) {
    var horas = req.body.horasServer;
    var fkUsuario = req.body.idUsuarioServer;

    if (horas == undefined) {
        res.status(400).send("Horas está undefined!");

    }else if (fkUsuario == undefined) {
        res.status(400).send("idUsuario está undefined!")
    }else{
        tempoModel.registrarTempo(horas, fkUsuario).then(function (resultado){
            res.status(200).json(resultado);
        })
        .catch(function (erro) {
            console.log("Erro ao registrar tempo de jogo: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
    }
}
function listar(req, res) {
    var idUsuario = req.params.idUsuario;

    tempoModel.listarPorUsuario(idUsuario).then(function (resultado) {
        res.json(resultado);
    })
    .catch(function (erro) {
        console.log("Erro ao listar tempos: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function mediaGeral(req, res) {
    tempoModel.listarMediaGeral().then(function (resultado) {
        res.json(resultado);
    })
    .catch(function (erro) {
        
        console.log("Erro ao calcular média geral: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });

}

function ranking(req, res) {
    tempoModel.ranking().then(function (resultado) {
        res.json(resultado);
    })
    .catch(function (erro) {
        console.log("Erro ao gerar Ranking", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    registrar,
    listar,
    mediaGeral,
    ranking
}
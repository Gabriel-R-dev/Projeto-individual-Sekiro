var database = require("../database/config")

function registrarTempo(horas,fkUsuario) {
    var instrucao = ` INSERT INTO tempo_jogo (horas_jogadas, fk_usuario) VALUES ('${horas}', '${fkUsuario}');`;
    console.log("Executando: " + instrucao);
    return database.executar(instrucao)
}

function listarPorUsuario(fkUsuario) {
    var instrucao = `SELECT idTempo, horas_jogadas, data_registrada FROM tempo_jogo WHERE fk_usuario = ${fkUsuario} ORDER BY data_registrada DESC`;
    
    console.log("Executar: " + instrucao);
    return database.executar(instrucao)
}

function listarMediaGeral() {
    var instrucao = ` SELECT AVG(horas_jogadas) AS "media geral" FROM tempo_jogo;`;
    return database.executar(instrucao);
}

function ranking() {
    var instrucao = `
    SELECT u.nome, SUM(t.horas_jogadas) AS total_horas
    FROM tempo_jogo t JOIN usuario u ON t.fk_usuario = u.idUsuario
    GROUP BY u.idUsuario
    ORDER BY total_horas DESC
    `;
    return database.executar(instrucao);
}

module.exports = {
registrarTempo,
listarPorUsuario,
listarMediaGeral,
ranking
}
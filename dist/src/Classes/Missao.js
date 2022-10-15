"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Missao = void 0;
const dicasPerguntasRespostas_1 = require("../dicasPerguntasRespostas");
const GeradorMissoes_1 = require("./GeradorMissoes");
const gerarMissao = new GeradorMissoes_1.GeradorMissoes([]);
class Missao {
    constructor() {
    }
    missaoUm() {
        gerarMissao.enviaMissao(dicasPerguntasRespostas_1.perguntasMissao.primeira);
        gerarMissao.enviaMissao(dicasPerguntasRespostas_1.perguntasMissao.segunda);
    }
}
exports.Missao = Missao;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeradorMissoes = void 0;
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
class GeradorMissoes {
    constructor(suspeitos, duracao = 5, tempoInicio = 0, segundos = 0) {
        this.suspeitos = suspeitos;
        this.suspeito = suspeitos;
        this.duracao = duracao;
        this.tempoInicio = tempoInicio;
        this.segundos = segundos;
    }
    validacaoTempo(tempo) {
        tempo = tempo - this.segundos * 1000;
        let contador = new Date(tempo);
        if (contador > new Date()) {
            return true;
        }
        else {
            console.log('Seu tempo acabou detetive e infelizmente o suspeito fugiu... Reinicie o jogo');
            this.Missao();
            return;
        }
    }
    iniciarJogo() {
        this.tempoInicio = Date.now();
        this.tempoInicio = this.tempoInicio + 60 * 1000 * this.duracao;
        let tempoDeJogo = new Date(this.tempoInicio);
        function addZero(i) {
            if (i < 10) {
                i = "0" + i;
            }
            return i;
        }
        let h = addZero(tempoDeJogo.getHours());
        let m = addZero(tempoDeJogo.getMinutes());
        let s = addZero(tempoDeJogo.getSeconds());
        let time = h + ":" + m + ":" + s;
        rl.setPrompt('Olá, detetive identifique-se por favor: ');
        rl.prompt();
        rl.on('line', (nome) => {
            console.log(`Você foi identificado, ${nome}, temos uma missão ate as ${time} para ser solucionada \n "o tesouro foi identificado como Copo de Ouro Ringle roubado do Museu Britânico, um homem suspeito foi visto na cena do crime"`);
            this.Missao();
            return;
        });
    }
    Missao() {
        this.validacaoTempo(this.tempoInicio);
        rl.question('Selecione E - para ir a um estabelecimento ou P - digitar pistas e capturar suspeito  ', (resposta) => {
            switch (resposta) {
                case 'E':
                    rl.question('Escolha seu destino: \n A: Biblioteca \n B: Restaurante \n C: Aeroporto \n (obs: para escolher uma alteranativa digite apenas a letra e a mesma deverá ser maiúscula) \n digite a alternativa: ', (destino) => {
                        switch (destino) {
                            case 'A':
                                this.segundos = this.segundos + 10;
                                console.log('Foi visto um homem lendo sobre a ultima copa do mundo');
                                this.Missao();
                                return;
                            case 'B':
                                this.segundos = this.segundos + 10;
                                console.log('foi visto um suspeito com cabelos bem avermelhados tomando café');
                                this.Missao();
                                return;
                            case 'C':
                                this.segundos = this.segundos + 10;
                                console.log('foi visto um sujeito com tatuagem de palhaço no braço');
                                this.Missao();
                                return;
                            default:
                                console.log('Opção invalida, digite entre as opções apresentadas');
                                this.Missao();
                                return;
                        }
                    });
                    return;
                case 'P':
                    console.log('Você já sabe as características do suspeito? Vamos listar algumas opções para ajudar a identificar');
                    this.prenderSuspeito();
                    return;
                default:
                    console.log('Você digitou uma opção inválida... tente novamente');
                    this.Missao();
                    return;
            }
        });
    }
    prenderSuspeito(listaPerguntasSuspeito = 0) {
        if (listaPerguntasSuspeito === this.suspeito.length) {
            console.log('Parabéns detetive! Você capturou josé do Perigo');
            rl.close();
            return;
        }
        console.log(`Pergunta: ${this.suspeito[listaPerguntasSuspeito].descricao}`);
        this.suspeito[listaPerguntasSuspeito].opcoes.forEach(alternativa => {
            console.log(alternativa);
        });
        rl.question('Digite R: responder ou V: voltar as pistas: ', (resposta) => {
            switch (resposta) {
                case 'R':
                    rl.question('Digite a alternativa correta: ', (alternativa) => {
                        if (alternativa === this.suspeito[listaPerguntasSuspeito].resposta) {
                            listaPerguntasSuspeito++;
                            this.prenderSuspeito(listaPerguntasSuspeito);
                            return;
                        }
                        console.log('ops... Pista incorreta, tente novamente');
                        this.prenderSuspeito();
                        return;
                    });
                    return;
                case 'V':
                    console.log('Voltando para pistas');
                    this.Missao();
                    return;
                default:
                    console.log('opção não encontrada');
                    this.prenderSuspeito();
                    return;
            }
        });
    }
    enviaPerguntas(perguntas) {
        this.suspeito.push(perguntas);
        return perguntas;
    }
}
exports.GeradorMissoes = GeradorMissoes;

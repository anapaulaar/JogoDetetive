"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.opcoesSuspeitos = void 0;
const opcaoUm = {
    descricao: 'Qual a cor de cabelo do suspeito?',
    opcoes: [
        'A: Vermelho',
        'B: Castanho',
        'C: Preto',
    ],
    resposta: 'A'
};
const opcaoDois = {
    descricao: 'Qual o traço(característica) do suspeito?',
    opcoes: [
        'A: Tatuagem',
        'B: Cicatriz',
        'C: Brincos'
    ],
    resposta: 'A'
};
const opcaoTres = {
    descricao: 'Qual o sexo do suspeito?',
    opcoes: [
        'F: Feminino',
        'M: Masculino'
    ],
    resposta: 'M'
};
const opcaoQuatro = {
    descricao: 'Qual o esporte do suspeito?',
    opcoes: [
        'A: Vôlei',
        'B: Basquete',
        'C: Futebol'
    ],
    resposta: 'C'
};
exports.opcoesSuspeitos = {
    primeiro: opcaoUm, segunda: opcaoDois, terceiro: opcaoTres, quarto: opcaoQuatro
};

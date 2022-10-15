"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.perguntasMissao = void 0;
const dicaUm = {
    descricao: 'selecione a cidade de destino:',
    opcoes: [
        'A: Oslo',
        'B: São Paulo',
        'C: Lisboa'
    ],
    resposta: 'A',
    dica: 'foi visto um homem com tatuagem e tenis de futebol'
};
const dicaDois = {
    descricao: 'selecione o estabelecimento de destino:',
    opcoes: [
        'A: Biblioteca',
        'B: Barbearia',
        'C: Lanchonete'
    ],
    resposta: 'A',
    dica: 'foi visto lendo sobre vikings'
};
exports.perguntasMissao = {
    primeira: dicaUm, segunda: dicaDois
};

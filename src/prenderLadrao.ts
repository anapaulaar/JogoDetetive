import { ISuspeito } from "./Interfaces/DicasMissoes"

const opcaoUm: ISuspeito = {
	descricao: 'Qual a cor de cabelo do suspeito?',
	opcoes: [
		'A: Vermelho',
		'B: Castanho',
		'C: Preto',
  ],
	resposta: 'A'
}

const opcaoDois: ISuspeito = {
	descricao: 'Qual o traço(característica) do suspeito?',
	opcoes: [
		'A: Tatuagem',
		'B: Cicatriz',
		'C: Brincos'
	],
	resposta: 'A'
}

const opcaoTres: ISuspeito = {
	descricao: 'Qual o sexo do suspeito?',
	opcoes: [
		'F: Feminino',
		'M: Masculino'
	],
	resposta: 'M'
}

const opcaoQuatro: ISuspeito = {
	descricao: 'Qual o esporte do suspeito?',
	opcoes: [
		'A: Vôlei',
		'B: Basquete',
    'C: Futebol' 
	],
	resposta: 'C'
}



export const opcoesSuspeitos = {
	primeiro: opcaoUm, segunda: opcaoDois, terceiro: opcaoTres, quarto: opcaoQuatro
}

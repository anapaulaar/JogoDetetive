import { opcoesSuspeitos } from "./src/prenderLadrao";
import { GeradorMissoes } from "./src/Classes/GeradorMissoes";

const gerarMissao = new GeradorMissoes([])

gerarMissao.enviaPerguntas(opcoesSuspeitos.primeiro)
gerarMissao.enviaPerguntas(opcoesSuspeitos.segunda)
gerarMissao.enviaPerguntas(opcoesSuspeitos.terceiro)
gerarMissao.enviaPerguntas(opcoesSuspeitos.quarto)

gerarMissao.iniciarJogo()

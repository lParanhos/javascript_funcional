const path = require('path')
const fn = require('./funcoes')

const caminho = path.join(__dirname, '..', 'dados', 'legendas')
const simbolos = [
    '.', '?', '-', ',', '"', '♪', 
    '_', '<i>', '</i>', '\r', '[', ']'
]

const palavrasMaisUsadas = fn.composicao(
    fn.lerDiretorio,
    fn.elementosTerminadosCom('.srt'),
    fn.lerArquivos,
    fn.mesclarElementos,
    fn.separarTextoPor('\n'),
    fn.removerElementosSeVazio,
    fn.removerElementosSeIncluir("-->"),
    fn.removerElementosSeApenasNumeros,
    fn.removerSimbolos(simbolos),
    fn.mesclarElementos,
    fn.separarTextoPor(' '),
    fn.removerElementosSeVazio,
    fn.removerElementosSeApenasNumeros,
    fn.agruparElementos,
    fn.ordernarPorAtributosNumericos('qtd', 'desc'),
)

palavrasMaisUsadas(caminho)
    .then(console.log)
 
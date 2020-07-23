const fs = require('fs');
const path = require('path');
const { resolveSoa } = require('dns');
const { type } = require('os');

function lerDiretorio(caminho){
    return new Promise((resolve, reject) => {
       try {
            let arquivos = fs.readdirSync(caminho);
            arquivos = arquivos.map(arquivo => path.join(caminho, arquivo));
            resolve(arquivos)
       } catch (error) {
            reject(error)
       }
    })
}

function elementosTerminadosCom(padraoTextual){
   return function(array){
        return array.filter(elemento => elemento.endsWith(padraoTextual));
   }
}

function lerArquivo(caminho){
    return new Promise((resolve, reject) => {
        try {
            const conteudo = fs.readFileSync(caminho, { encoding: 'utf-8' })
            resolve(conteudo.toString())
        } catch (error) {
            reject(error)
        }
    })
}
function lerArquivos(caminhos){
    return Promise.all(caminhos.map(caminho => lerArquivo(caminho)))
}

function removerElementosSeVazio(array){
    return array.filter(el => el.trim())
}

function removerElementosSeIncluir(padraoTextual){
    return function(array){
        return array.filter(el => !el.includes(padraoTextual))
    }
}

function removerElementosSeApenasNumeros(array){
    return array.filter(el => {
        const num = parseInt(el.trim())
        return num !== num
    })
}

function removerSimbolos(simbolos){
    return function(array){
        return array.map(el => {
            let textoSemSimbolos = el;
            simbolos.forEach(simbolo => {
                textoSemSimbolos = textoSemSimbolos.split(simbolo).join('')
            })
            return textoSemSimbolos
        })
    }
}

function mesclarElementos(array) {
    return array.join(' ')
}

function separarTextoPor(simbolo){
    return function(texto){
       return texto.split(simbolo)
    }
}

module.exports = {
    lerDiretorio,
    elementosTerminadosCom,
    lerArquivos,
    removerElementosSeVazio,
    removerElementosSeIncluir,
    removerElementosSeApenasNumeros,
    removerSimbolos,
    mesclarElementos,
    separarTextoPor
}
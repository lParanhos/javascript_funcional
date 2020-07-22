const fs = require('fs');
const path = require('path');
const { resolveSoa } = require('dns');

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

function elementosTerminadosCom(array, padraoTextual){
    return array.filter(elemento => elemento.endsWith(padraoTextual))
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

function removerSeVazio(array){
    return array.filter(el => el.trim())
}

function removerSeIncluir(array, padraoTextual){
    return array.filter(el => !el.includes(padraoTextual))
}


module.exports = {
    lerDiretorio,
    elementosTerminadosCom,
    lerArquivos,
    removerSeVazio,
    removerSeIncluir
}
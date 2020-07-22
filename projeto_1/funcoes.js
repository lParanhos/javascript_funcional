const fs = require('fs');
const path = require('path');

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

function elementosTerminadosCom(array, padrao){
    return array.filter(elemento => elemento.endsWith(padrao))
}


module.exports = {
    lerDiretorio,
    elementosTerminadosCom
}
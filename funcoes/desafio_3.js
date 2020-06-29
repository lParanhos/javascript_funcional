const fs = require('fs');
const path = require('path');

function leArquivo(caminho){
    return new Promise(resolve => {
        fs.readFile(caminho, (_, conteudo) => {
            resolve(conteudo.toString());
        });
    });
}

const caminho = path.join(__dirname, "dados.txt");

leArquivo(caminho)
    .then(console.log)
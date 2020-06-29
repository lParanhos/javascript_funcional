const primeiroElemento = arrayOuString => arrayOuString[0];
const letraMinuscula = string => string.toLowerCase();

let p = new Promise(function (cumprirPromesa){
    cumprirPromesa(['Ana', 'Bia', 'Carlos', 'Daniel'])
})

p
    .then(primeiroElemento)
    .then(primeiroElemento)
    .then(letraMinuscula)
    //.then(v => console.log(v)) podemos passar diretamente a função log, como fizemos com as funçoes acima
    .then(console.log)
// Função pura ou impura ?
//Nesse caso é impura, na verdade não só pelo uso da função random 
//mas sempre que temos uma função não deterministica, como essa de gerar numeros aleatorios,
// ela acaba sendo impura
function gerarNumeroAleatorio(min, max){
    const fator = max - min + 1;
    return parseInt(Math.random() * fator) + min;
}

console.log(gerarNumeroAleatorio(5 ,6))
console.log(gerarNumeroAleatorio(5 ,6))
console.log(gerarNumeroAleatorio(5 ,6))
console.log(gerarNumeroAleatorio(5 ,6))
console.log(gerarNumeroAleatorio(5 ,6))
console.log(gerarNumeroAleatorio(5 ,6))

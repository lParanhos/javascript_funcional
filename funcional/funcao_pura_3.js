//Uma função pura é uma função em que o valor
// de retorno é determinado APENAS por seus valores
// de entrada, sem efeitos colaterais observáveis

let quantidadeDeExecucoes = 0;


//Ao mudar um valor externo a nossa função quebramos uma das definições sobre funções puras
function soma(a, b) {
    quantidadeDeExecucoes ++; //efeito colateral observavel
    return a + b;
}
console.log(quantidadeDeExecucoes);
console.log(soma(68, 32));
console.log(soma(68, 32));
console.log(soma(68, 32));
console.log(soma(68, 32));
console.log(soma(68, 32));
console.log(quantidadeDeExecucoes);

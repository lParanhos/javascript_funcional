const carrinho = [
    { nome: 'caneta', qtde: 10, preco: 7.99 },
    { nome: 'impressora', qtde: 0, preco: 649.50 },
    { nome: 'caderno', qtde: 4, preco: 27.10 },
    { nome: 'lapis', qtde: 3, preco: 5.82 },
    { nome: 'tesoura', qtde: 1, preco: 19.20 }
]

const getTotal = item => item.qtde * item.preco;
const soma = (acc, el) => acc + el;

const totalGeral = carrinho
        .map(getTotal)
        .reduce(soma);

console.log(totalGeral)
const nums = [1,2,3,4,5];
const dobro = n => n * 2;
console.log(nums.map(dobro));

const nomes = ['Ana', 'Bia', 'Gabi', 'Pedro', 'Bernardo'];
const primeiraLetra = nome => nome[0];
const letras = nomes.map(primeiraLetra);
console.log(nomes, letras);


const carrinho = [
    { nome: 'caneta', qtde: 10, preco: 7.99 },
    { nome: 'impressora', qtde: 0, preco: 649.50 },
    { nome: 'caderno', qtde: 4, preco: 27.10 },
    { nome: 'lapis', qtde: 3, preco: 5.82 },
    { nome: 'tesoura', qtde: 1, preco: 19.20 }
]
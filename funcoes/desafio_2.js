const carrinho = [
    { nome: 'caneta', qtde: 10, preco: 7.99 , fragil: true},
    { nome: 'impressora', qtde: 1, preco: 649.50 , fragil: true},
    { nome: 'caderno', qtde: 4, preco: 27.10 , fragil: false},
    { nome: 'lapis', qtde: 3, preco: 5.82 , fragil: false},
    { nome: 'tesoura', qtde: 1, preco: 19.20, fragil: true }
]

//1. fragil
//2. qtd * preço -> total
//3. média total
const getFragil = item => item.fragil;
const pegaTotal = item => item.qtde * item.preco;
const media = (acc, el, i, array ) => {
    const result = acc + el
    if(i == (array.length - 1)){
        return result / array.length;
    }
    return result;
}

const mediaTotal = carrinho
    .filter(getFragil)
    .map(pegaTotal)
    .reduce(media);

console.log(mediaTotal);

/**
 * resolução professor:
 */

const novaMedia = carrinho
    .filter(item => item.fragil)
    .map(item => item.qtde * item.preco)
    .reduce((acc, el) => {
        const novaQtde = acc.qtde + 1;
        const novoTotal = acc.total + el;
        return {
            qtde: novaQtde, 
            total: novoTotal, 
            media: novoTotal / novaQtde
        }
    }, { qtde: 0, total: 0, media: 0})

console.log(novaMedia)
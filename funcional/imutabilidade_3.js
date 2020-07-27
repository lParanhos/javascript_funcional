const pessoa = Object.freeze({
    nome: 'Maria',
    altura: 1.76,
    cidade: 'São Paulo',
    end: Object.freeze({
        rua: "Feliz !"
    })
})

//Atribuição por referência 
/* const novaPessoa = pessoa

novaPessoa.nome = 'João'
novaPessoa.cidade = 'Fortaleza'

console.log(pessoa) */

//Passagem por referência (Função impura!)
function alteraPessoa(pessoa){
    // Aqui fazemos uma clone apenas do primeiro nível do objeto pessoa
    const novaPessoa = { ...pessoa }
    novaPessoa.nome = 'Claudio'
    novaPessoa.cidade = 'Bauru'
    //Essa cópia do primeiro nível faz com que ao modificar o campo abaixo,
    // modifique também na const pessoa
    novaPessoa.end.rua = 'ABC 123'

    return novaPessoa
}

const novaPessoa = alteraPessoa(pessoa)
console.log(pessoa, novaPessoa)

//Atribuição por valor
/** As atribuições são feitas automáticas pelo javascript
 * ele entende que um objeto/array é muito grande e por isso deve se passar uma referencia do mesmo, ao invés de copia
 * no caso de um valor mais simples (tipos primitivos) ele entende que por ser pequeno não tem problema em passar uma cópia
 * Novamente, tudo acontece de forma automática pelo JS
 */
let a = 3
let b = a 

a++
b--

console.log(a, b)
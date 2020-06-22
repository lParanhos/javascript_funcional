//arrow function
const saudacao = nome => `Fala ${nome}, beleza ?!`
console.log(saudacao('Maria'))

//Por conta do rest os paremetros passados, são jogados para dentro de um array
const somar = (...numeros) => {
    console.log(Array.isArray(numeros))
    let total = 0;
    for(const n of numeros){
        total += n;
    }
    return total;
}

console.log(somar(1,2,3,4,5,6,7,8,9,10))

const potencia = base => exp => Math.pow(base, exp)
    

console.log(potencia(2)(8))

//this
Array.prototype.ultimo = function(){
     console.log(this[this.length - 1]);
}

/** Esse código gera erro, devido o this
 * isso ocorre devido o contexto em que se passa a arrow function
 * Array.prototype.primeiro = () => {
    console.log(this[0]);
}
 */

Array.prototype.primeiro = function(){
    console.log(this[0]);
}

const numeros = [1,2,3,990]
numeros.ultimo()
numeros.primeiro()
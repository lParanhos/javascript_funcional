//somar(3)(4)(5)

function somar(num){
    return function(num2){
        return function(num3){
            return num + num2 + num3;
        }
    }
}

console.log(somar(3)(4)(5));

//fn -> 3 * 7
//fn -> 3 + 7
//fn -> 3 - 7
//calcular(3)(7)(fn)

function calcular(a){
    return function(b){
        return function(fn){
            if(typeof fn === 'function'){
                return fn(a, b)
            }
        }
    }
}

function subtrair(a, b){
    return a - b;
}

function multiplicar(a, b){
    return a * b;
}

const r1 = calcular(10)(5)(subtrair);
const r2 = calcular(10)(5)(multiplicar);
console.log(r1);
console.log(r2);

//Uma função pura é uma função em que o valor
// de retorno é determinado APENAS por seus valores
// de entrada, sem efeitos colaterais observáveis


const PI = 3.14

//Pura ou impura ?
//Nesse caso é uma função impura pois o valor de PI está fora da função
function areaCirc(raio){
   // return raio * raio * PI
   return raio * raio * Math.PI //Estável
}

console.log(areaCirc(10));

//Pura
function areaCirc(raio, pi){
    return raio * raio * pi
}

console.log(areaCirc(10, 3.14))
console.log(areaCirc(10, Math.PI))

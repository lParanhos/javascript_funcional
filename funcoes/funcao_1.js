let a = 2;

//Function declaration
function bomDia(){
	console.log('Bom dia');
}
bomDia();

//Function Expression
const boaTarde = function(){
	console.log('boa tarde');
}

boaTarde();

/**
 * Caso não seja atribuido um valor default 
 * para as propriedades de nossa função,
 * eles tem o valor undefined
 */
function somar(a = 0, b = 0){
    return a + b;
}

let reultado = somar(3,4);
console.log(reultado);

//Aqui ele simplesmente ignora os parametros "extras" que estamos passando
// e utiliza apenas os que ele esperava receber
reultado = somar(3,4);
console.log(reultado);


reultado = somar(3);
console.log(reultado);

reultado = somar();
console.log(reultado);
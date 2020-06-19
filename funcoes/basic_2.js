function bomDia(){
	console.log('Bom dia !!!!!!!');
}

const boaTarde = function(){
	console.log('Boa tarde !!!!!!!');
}

// 1) passar função como param para outra função
function executaQualquerCoisa(fn){
    if(typeof fn === 'function'){
        fn();
    }
}


executaQualquerCoisa(3);
executaQualquerCoisa(bomDia);
executaQualquerCoisa(boaTarde);

//2) Retornar uma função a partir de uma outra função

function potencia(base){
    return function(exp){
        return Math.pow(base, exp)
    }
}

const potencia2 = potencia(2);
console.log(potencia2(8));

const potencia34 = potencia(3)(4)
console.log(potencia34);
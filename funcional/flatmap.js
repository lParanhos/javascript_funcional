const letrasAninhadas = [
        ['O',['l'],'a'],
        [''],
        ['m',['u',['n']],'d','o'],
        ['!','!','!']
];
const letras = letrasAninhadas.flat(Infinity);
const resultado = letras
        .flatMap(l => [l, ','])
        .reduce((a, b) => a + b);
        
console.log(resultado);



/* const letras = ['O','l','a','','m','u','n','d','o','!','!','!'];
const resultado = letras
    .map(l => l.toUpperCase())
    .reduce((a, b) => a + b);

console.log(resultado) */
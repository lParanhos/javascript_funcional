// Os dois tipos

// 1. Operadores de criação
const { of, from } = require('rxjs');

// 2. Operadores encadeáveis (Pipeable op.)
const { last, map } = require('rxjs/operators');

of(1, 2 , 'Ana', false, 'ultimo')
    .pipe(
        last(),
        map(v => v[0]),
        map(v => `A letra encontrada foi: ${v}`)
    )
    .subscribe(function(valor){
        console.log(`O valor gerado foi: ${valor}`)
    });

from([1, 2 , 'Ana', false, 'ultimo'])
.pipe(
    last(),
    map(v => v[0]),
    map(v => `A letra encontrada foi: ${v}`)
)
.subscribe(function(valor){
    console.log(`O valor gerado foi: ${valor}`)
})
/** Closure
 * é quando uma função "lembra" de seu escopo léxico,
 * mesmo quando a função é executada fora desse escopo léxico 
 */

 const somarXMais3 = require('./closure_escopo')
 const x = 1000 
 console.log(somarXMais3())
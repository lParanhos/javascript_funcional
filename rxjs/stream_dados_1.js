function gerarNumeros(){
   return {
       iniciar(fn, tempo = 1000){
        let num = 0;
        const i = setInterval(() => {
            fn(num++);
        }, tempo);

        return {
            parar() {
                clearInterval(i)
            }
        }
       }
   }
}

const temp1 = gerarNumeros();
const exec1 = temp1.iniciar(numero => {
    console.log(`#1 ${numero * 2}`);
}, 1000);

const temp2 = gerarNumeros();
const exec2 = temp2.iniciar(a => {
    console.log(`#2 ${a + 100}`);
}, 2000);

setInterval(() => {
    exec1.parar();
    exec2.parar();
}, 10000);
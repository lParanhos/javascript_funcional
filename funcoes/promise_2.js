/* setTimeout(function() {
    console.log("Executando callback....")

    setTimeout(function() {
        console.log("Executando callback....")

        setTimeout(function() {
            console.log("Executando callback....")

        }, 2000)
    }, 2000)
}, 2000) */

//Vamos reproduzir a funcionalidade do código acima, com promise

function esperarPor(tempo = 2000){
    return new Promise((resolve) => {
        setTimeout(function(){
            console.log("Executando Promise ....")
            resolve()
        }, tempo)
    });
}

esperarPor()
    .then(() => esperarPor())
    .then(esperarPor) 
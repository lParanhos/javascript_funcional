function esperarPor(tempo = 2000){
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(), tempo )
    })
}

function retornaValor(){
    return new Promise((resolve) => {
        setTimeout(() => resolve(10), 5000)
    })
}

//Similar a retornar uma promise com o resolve direto
async function retornaValorRapido(){
    return 20
}

async function executar(){

    const valor = await retornaValorRapido()

    await esperarPor(1500)
    console.log(`Async/Await ${valor + 1}...`)

    await esperarPor(1500)
    console.log(`Async/Await ${valor + 2}...`)

    await esperarPor(1500)
    console.log(`Async/Await ${valor + 3}...`)

    return valor + 1
}

async function executaDeVerdade(){
    const v = await executar()
    return v
}


executaDeVerdade()
    .then(console.log)
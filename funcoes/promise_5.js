function funcionarOuNao(valor, chanceDeErro){
    return new Promise((resolve, reject) => {
        try {
            con.log('Temp')
            if(Math.random() < chanceDeErro){
                reject('Ocorreu um erro !')
            } else {
                resolve(valor)
            }
        } catch (error) {
            reject(error)
        }
    })
}

funcionarOuNao(10, 0.1)
    .then(valor => valor[0])
    .then(
        v => consol.log(v),
        err => console.log(`Erro Esp: ${err}`)
    )
    .then(() => console.log('Quase Fim!'))
    .catch(err => console.log(`Erro: ${err}`))
    .then(() => console.log('Fim!'))
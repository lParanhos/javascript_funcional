class Produto {

    constructor(nome, preco, desc = 0.5){
        this.nome = nome
        this.preco = preco
        this.desc = desc
    }

    set nome(novoNome){
        this._nome = novoNome.toUpperCase()
    }

    get preco(){
        return this._preco
    }

    set preco(novoPreco){
        if(novoPreco >= 0){
            this._preco = novoPreco
        }
    }

    get nome(){
        return `Produto: ${this._nome}`
    }

    get precoFinal() {
        return this._preco * (1 - this.desc)
    }
}

const p1 = new Produto('Caneta', 10)
console.log(p1.nome)
console.log(p1.preco)
p1.preco = -20
console.log(p1.preco)

const p2 = new Produto('Geladeira', 3000)
console.log(p2.preco)
console.log(p2.precoFinal)
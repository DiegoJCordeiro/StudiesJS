let pessoa = {
    primeiroNome: "Diego",
    ultimoNome:"Cordeiro",
    idade: 28,
    setPrimeiroNome: function(primeiroNome) {
        this.primeiroNome = primeiroNome
    },
    getPrimeiroNome: function(){
        return this.primeiroNome
    },
    setUltimoNome: function(ultimoNome) {
        this.ultimoNome = ultimoNome
    },
    getUltimoNome: function(){
        return this.ultimoNome
    }
}

let pessoaInstance = Object.create(pessoa)
pessoaInstance.primeiroNome = 'Testando'
pessoaInstance.ultimoNome   = 'Prototype'

console.log(Object.getPrototypeOf(pessoaInstance) == pessoa)
console.log(Object.getPrototypeOf(pessoa) == Object.prototype)

console.log(pessoaInstance)
console.log(pessoa)

function Carro(marca, modelo, nome) {
    this.marca = marca
    this.modelo = modelo
    this.nome = nome
}

const fordFiesta = new Carro('Ford', '1.6 Turbo', 'Fiesta')


class Motocicleta {
    constructor(marca, modelo, nome, kms) {
        this.marca = marca
        this.modelo = modelo
        this.nome = nome
        this.kms = kms
    }

    set setMarca(marca) {
        this.marca = marca
    }

    get getMarca() {
        return this.marca
    }

    set setModelo(modelo) {
        this.modelo = modelo
    }

    get getModelo() {
        return this.modelo
    }

    set setNome(nome) {
        this.nome = nome
    }

    get getNome() {
        return this.nome
    }

    set setKms(kms) {
        this.kms = kms
    }

    get getKms() {
        return this.kms
    }

    acelerar() {
        this.kms += 1        
    }

    frear() {
        this.kms = 0
    }
}

class Titan extends Motocicleta {
    constructor(marca, modelo, nome, kms, seminova){
        super(marca, modelo, nome, kms)
        this.seminova = seminova
    }

    set setSeminova(seminova) {
        this.seminova = seminova
    }

    get isSeminova() {
        return this.seminova
    }
}


let ehEletrica = Symbol()  // Propriedades do tipo Symbol, são consideradas constantes. Não podem ser criadas e nem alteradas mais de uma vez.

Motocicleta.prototype.fazBarulho = false
Motocicleta.prototype[ehEletrica] = true

let titan = new Motocicleta('Honda', '150 Cl', 'Titan', 0)

console.log(titan.nome + ' ' + titan.modelo)
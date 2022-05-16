//OBJETOS
//JSON - JavaScript Object Notation (JSON)
const usuario = {
    nome: 'Lucas',
    email: 'lucas@lucas.com',
    senha: '123456',
    telefone: '(11) 99999-9999',
    termosDeUso: true,
    idade: 99
}

const carro = {
    marca: 'Fiat',
    modelo: 'Argo',
    potencia: 102,
    acelerar(){
        console.log("Acelerando...");
    },
    turbinar(){
        this.potencia = this.potencia * 2
    }
}

const pessoa = {
    nome: 'Lucas',
    peso: 60,
    altura: 1.5,
    imc(){
        console.log("imc: " + (this.peso/(this.altura*this.altura)).toFixed(2))
    }
}

function Pessoa(nomeParam, pesoParam, alturaParam){
    this.nome = nomeParam
    this.peso = pesoParam
    this.altura = alturaParam
    this.imc = function(){
    console.log("IMC: " + (this.peso/(this.altura*this.altura)).toFixed(2))
    }
}

const marcos = new Pessoa("Marcos", 150, 1.96)


marcos.imc()
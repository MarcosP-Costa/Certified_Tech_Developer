//Tradicional
function soma(a, b){
    console.log("Soma: " + a + b);
}
//Forma expressa

let soma2 = function(a, b){
    console.log("Soma2 : " + (a + b));
}

let soma3 = (a, b) => {
    console.log("Soma3: " + (a + b))
}

function dobro(x){
    return 2*x
}

let dobro2 = x => 2*x;

let carro = {
    nome: "Carro X",
    marca: "Marca X",
    nomeEMarca:() => {
        console.log("Nome: " + this.nome +  " marca: " + this.marca);
    },
    nomeEMarca2:function(){
        console.log("nome: " + this.nome + " marca: " + this.mmarca);
    }
}

const numeros = [1, 2, 3, 4, 5]

const meuCallBack = (numero, i) => {
    console.log("Valor do Index " + i  + " = " + numeros)
}

numeros.forEach(meuCallBack);

function forEach(callback){
    callback(numeros[0],i,numeros);
}

function callBack(){
    console.log("Teste")
}

const UM_SEGUNDO = 1000;
console.log("Vai passar um segundo")
setTimeout(callBack, 5000)


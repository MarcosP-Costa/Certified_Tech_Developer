//Função 1, converter polegadas em centimetros
function function1(polegadas){
 let centimetros = polegadas * 2.54
 return centimetros
}

//Função 2, recebe uma string e converte em URL
function function2(string){
let URL = "http://www." + string + ".com.br"
return URL
}

//Função 3, recebe uma string e retorna a mesma frase com um "!"
function function3(string){
let URL = string + "!"
return URL
}

//Função 4, converter idade de cachorro para humano
function function4(idadeHumano){
let idadeCachorro = idadeHumano * 7
return idadeCachorro
}

//Função 5, calcular a sua hora de trabalho
function function5(salario){
let horasTrabalhas = 8
let diasUteisTrabalhados = 22
let valorDaHora = salario / (horasTrabalhas * diasUteisTrabalhados)
return valorDaHora.toFixed(2)
}

console.log(function4(10))

//Função 6, calculadora de IMC
function function6(altura, peso){
let IMC = peso / (altura * altura)
return IMC.toFixed(0)
}

//Função 7, converter minúsculas em maiúsculas
function function7(stringMinuscula){
let stringMaiuscula = stringMinuscula.toUpperCase()
return stringMaiuscula
}

//Função 8, recebe um parâmetro e retorne o tipo dele.
function function8(parametro){
let tipoDoParametro = typeof parametro
return tipoDoParametro
}

//Função 9, recebemos um raio e retornamos a circunferência.
function function9(raioDoCirculo){
let circunferencia = raioDoCirculo / Math.PI
return circunferencia.toFixed(2)
//o calculo é Raio dividido pelo PI = Circunferencia
}
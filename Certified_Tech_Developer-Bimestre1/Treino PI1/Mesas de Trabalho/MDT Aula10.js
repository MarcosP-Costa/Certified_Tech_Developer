let array1 = [19, 2, 11, 4, 10, 15]
let array2 = ["o", "l", "a"]
let array3 = ["star wars", "matrix",  "mr. robot", "o preço do amanhã", "a vida é bela"]
let array4 = ["Toy Story", "Procurando Nemo", "Kung-fu Panda", "Wally", "Fortnite"]
let array5 = ["star wars", "matrix",  "mr. robot", "o preço do amanhã", "a vida é bela", "Toy Story", "Procurando Nemo", "Kung-fu Panda", "Wally", "Fortnite"]

//Array invertido, criar uma função que retorne um array ao contrario no console, e outra função que INVERTA o array
function imprimirInverso(arrayQualquer){
let a = arrayQualquer.length - 1

    for(i=a;i>=0;i--){
    console.log(arrayQualquer[i])
    }
}

imprimirInverso(array1)

function inverter(arrayQualquer){
let b = arrayQualquer.length - 1
let arrayInvertido = []

    for(i=b;i>=0;i--){
    arrayInvertido.push(arrayQualquer[i])
    }
    return console.log(arrayInvertido)
}

//Array somar, criar uma função que retorne a soma de todos os valores de um array
function somarArray(arrayQualquer){
let c = arrayQualquer.length
let arraySomado = 0

    for(i=0;i<c;i++){
        arraySomado += arrayQualquer[i]
    }
    return console.log(arraySomado)
}

//Concatenar array, criar uma função que receba um array e "concatena" os valores dentro dele.
function concatenarArray(arrayQualquer){

    let letra = arrayQualquer.length
    let concatenar = ""
    
    for(i=0;i<letra;i++){
    
        concatenar += arrayQualquer[i]
    
    }
    return console.log(concatenar)
    }

//Coleção de Filmes
//Função 1: criar uma função que converta todos os filmes em maiusculo

function maiusculo(arrayQualquer){
let d = arrayQualquer.length

    for(i=0;i<d;i++){
    arrayQualquer[i] = arrayQualquer[i].toUpperCase()
    }
    return console.log(arrayQualquer)
}

//Função 2: criar uma função que adicione os itens de um segundo array ao primeiro
//Depois Remover o ultimo valor de uma string e adicionar a uma variavél
function juntarArrays(arrayQualquer1, arrayQualquer2){
    let e = arrayQualquer2.length
    let arrayFinal = arrayQualquer1

    for(i=0;i<e;i++){
    arrayFinal.push(arrayQualquer2[i])
    }
    let infiltrado = arrayFinal.pop()
    arrayFinal.pop()
    return console.log(arrayFinal)
}

//compararArray, criar uma função que recebe 2 arrays e compara o resultado em cada lugar do array
const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];
function compararArray(arrayQualquer1, arrayQualquer2){
let f = arrayQualquer1.length
    for(i=0;i<f;i++){
        if(arrayQualquer1[i] == arrayQualquer2[i]){
            console.log("As classificações da rodada " + (i + 1) + " são iguais!")
        }else{
            console.log("As classificações da rodada " + (i + 1) + " são diferentes!")
        }
    }
}







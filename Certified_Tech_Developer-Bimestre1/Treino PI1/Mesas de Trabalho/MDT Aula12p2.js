//Crie a função digitalHouse() que receberá 2 números como parâmetros. 
//A Função deve imprimir na tela os números de 1 a 100, mas levando em conta os seguintes critérios:
//1 - Se o número a ser impresso for um múltiplo do primeiro parâmetro inserido, você deve exibir a string "Digital" em vez do número.
//2 - Se o número a ser impresso for um múltiplo do segundo parâmetro inserido, você deve exibir a string "House" em vez disso.
//3 - Se o número a ser impresso for um múltiplo de ambos os parâmetros, você deve exibir a string "Digital House" em vez do número.

function digitalHouse(a, b){
    for(i=1;i<=100;i++){
        if(i%a == 0 && i%b == 0){
            console.log("Digital House")
        }else if(i%a == 0){
            console.log("Digital")
        }else if(i%b == 0){
            console.log("House")
        }else[
            console.log(i)
        ]
    }
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
    


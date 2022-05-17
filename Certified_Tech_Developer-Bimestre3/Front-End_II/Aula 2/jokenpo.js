// Pedra, Papel, Tesoura

let numComputador = Math.round((Math.random()*100) - 1)
let numUsuario = prompt("Bora jogar Jo-Ken-Po! \nDigite Pedra, Papel ou Tesoura! (Sem espaço hein!!)")
    numUsuario = numUsuario.toUpperCase()
if(numUsuario == "PEDRA"){
numUsuario = 1
}else if(numUsuario == "PAPEL"){
numUsuario = 2
}else if(numUsuario == "TESOURA"){
numUsuario = 3
}else{
   alert("Digite apenas Pedra, Papel ou Tesoura!")
}

if(numComputador <= 33){
numComputador = 1
}else if(numComputador > 33 & numComputador <= 66){
numComputador = 2
}else if(numComputador > 66 & numComputador <= 99){
numComputador = 3
}

if(numUsuario == numComputador){
    console.log("FOI UM EMPATE");
}else if((numUsuario - numComputador) == 1 || (numUsuario - numComputador) == -2){
    console.log("O Usuario Venceu!")
}else if((numUsuario - numComputador) == -1 || (numUsuario - numComputador) == 2){
    console.log("O Computador Venceu!")
}


//arrumar codigo
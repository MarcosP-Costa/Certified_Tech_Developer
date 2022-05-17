// Pedra, Papel, Tesoura

let numComputador = Math.round((Math.random()*100) - 1)
let numUsuario = prompt("Bora jogar Jo-Ken-Po! \nDigite Pedra, Papel ou Tesoura! (Sem espaço hein!!)")
    numUsuario = numUsuario.toUpperCase()
if(numUsuario == "PEDRA"){
numUsuario = 1
document.querySelector('.usuario').innerText = "PEDRA"
}else if(numUsuario == "PAPEL"){
numUsuario = 2
document.querySelector('.usuario').innerText = "PAPEL"
}else if(numUsuario == "TESOURA"){
numUsuario = 3
document.querySelector('.usuario').innerText = "TESOURA"
}else{
   alert("Digite apenas Pedra, Papel ou Tesoura!")
}

if(numComputador <= 33){
numComputador = 1
document.querySelector('.computador').innerText = "PEDRA"
}else if(numComputador > 33 & numComputador <= 66){
numComputador = 2
document.querySelector('.computador').innerText = "PAPEL"
}else if(numComputador > 66 & numComputador <= 99){
numComputador = 3
document.querySelector('.computador').innerText = "TESOURA"
}

if(numUsuario == numComputador){
    alert("FOI UM EMPATE!")
}else if((numUsuario - numComputador) == 1 || (numUsuario - numComputador) == -2){
    alert("O Usuario Venceu!")
}else if((numUsuario - numComputador) == -1 || (numUsuario - numComputador) == 2){
    alert("O Computador Venceu!")
}
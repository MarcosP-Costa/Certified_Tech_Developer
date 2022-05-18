var numComputador = parseInt(Math.random() * 3 + 1)
var numUsuario = parseInt(Math.random() * 3 + 1)
var vitoriaUsuario = 0
var vitoriaComputador = 0
let jogadasUsuario = []
let jogadasComputador = []
var rodada = 0

//alert("Vamos jogar JoKenPo!")
function converterNumero(numParam) {
    let opcao = numParam
    switch (opcao) {
        case 1:
            opcao = "PEDRA "
            break;
        case 2:
            opcao = "PAPEL "
            break;
        case 3:
            opcao = "TESOURA "
            break;
    }
    return opcao
}

function converterString(stringParam) {
    let opcao = stringParam
    switch (opcao) {
        case "PEDRA":
            opcao = 1
            break;
        case "PAPEL":
            opcao = 2
            break;
        case "TESOURA":
            opcao = 3
            break;
    }
    return opcao
}



function jogar(usuarioParam, computadorParam) {
    if(vitoriaUsuario >=2 || vitoriaComputador >=2){
        rodada++
    }else{

    
    if (usuarioParam - computadorParam == 1 || usuarioParam - computadorParam == -2) {


            vitoriaUsuario++
            jogadasComputador.push(converterNumero(computadorParam))
            jogadasUsuario.push(converterNumero(usuarioParam))
            rodada++
            console.log("Usuario Venceu");
        
    } else if (usuarioParam - computadorParam == -1 || usuarioParam - computadorParam == 2) {


            vitoriaComputador++
            jogadasComputador.push(converterNumero(computadorParam))
            jogadasUsuario.push(converterNumero(usuarioParam))
            rodada++
            console.log("Computador Venceu");
        
    } else {
        console.log("empate");
    }
}
}


while (rodada <= 3) {
    numComputador = parseInt(Math.random() * 3 + 1)
    numUsuario = converterString(prompt("Escolha uma opção entre Pedra, Papel e Tesoura\n(Digite sem espaço hein ;)").toUpperCase())
    jogar(numUsuario, numComputador)
}
if(vitoriaUsuario > vitoriaComputador){
    document.querySelector("h1").innerText += " Usuario!"
}else{
    document.querySelector("h1").innerText += " Computador"
}

document.querySelector(".usuario").innerText = jogadasUsuario
document.querySelector(".computador").innerText = jogadasComputador

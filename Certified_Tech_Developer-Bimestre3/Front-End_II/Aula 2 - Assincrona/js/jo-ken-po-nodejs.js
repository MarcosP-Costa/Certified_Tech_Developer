var numComputador = parseInt(Math.random() * 3 + 1)
var numUsuario = parseInt(Math.random() * 3 + 1)
var vitoriaUsuario = 0
var vitoriaComputador = 0
var rodada = 0


//alert("Vamos jogar JoKenPo!")
function converterNumero(numParam) {
    let opcao = numParam
    switch (opcao) {
        case 1:
            opcao = "PEDRA"
            break;
        case 2:
            opcao = "PAPEL"
            break;
        case 3:
            opcao = "TESOURA"
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
            rodada++
            console.log("Usuario Venceu");
        
    } else if (usuarioParam - computadorParam == -1 || usuarioParam - computadorParam == 2) {


            vitoriaComputador++
            rodada++
            console.log("Computador Venceu");
        
    } else {
        console.log("empate");
    }
}
}


while (rodada <= 3) {
    numComputador = parseInt(Math.random() * 3 + 1)
    numUsuario = parseInt(Math.random() * 3 + 1)
    jogar(numUsuario, numComputador)
}



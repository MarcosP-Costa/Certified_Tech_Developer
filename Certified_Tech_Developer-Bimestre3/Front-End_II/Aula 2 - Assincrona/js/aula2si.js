let numComputador = parseInt(Math.random() * 3 + 1)
let numUsuario = parseInt(Math.random() * 3 + 1)
let vitoriaUsuario = 0
let vitoriaComputador = 0

function jogar() {
    numUsuario = prompt("Bora jogar Jo-Ken-Po! \nDigite Pedra, Papel ou Tesoura! (Sem espaço hein!!)")

    numUsuario = numUsuario.toUpperCase()
    if (numUsuario == "PEDRA") {
        numUsuario = 1
        document.querySelector('.usuario').innerText = "PEDRA"
    } else if (numUsuario == "PAPEL") {
        numUsuario = 2
        document.querySelector('.usuario').innerText = "PAPEL"
    } else if (numUsuario == "TESOURA") {
        numUsuario = 3
        document.querySelector('.usuario').innerText = "TESOURA"
    } else {
        alert("Como você não digitou um valor valido, vou jogar por você ;)")
        //Caso o usuario digite um valor invalido, eu jogo por ele ;)
        numUsuario = 3
        document.querySelector('.usuario').innerText = "TESOURA"
    }
    switch (numUsuario) {
        case 1:
            document.querySelector('.usuario').innerText = "PEDRA"
            break;
        case 2:
            document.querySelector('.usuario').innerText = "PAPEL"
            break;
        case 3:
            document.querySelector('.usuario').innerText = "TESOURA"
            break;
    }
    if (numUsuario == numComputador) {
        //Aqui vemos quem vendeu, a lógica é simples, Tirando PEDRA, o número de cada sinal tem vantagem sobre o anterior
        //Papel=2 tem vantagem na Pedra=1, tesoura=3 tem vantagem contra papel=2
        //Então eu subtraio o valor 2 pelo valor 1, caso de 1 ou -2, o usuario venceu
        //Porque Papel=2 menos Pedra=1 sobra 1
        // Tesoura=3 menos Papel=2 sobra 1
        //E por ultimo, Pedra=1 menos Tesoura=3 sobra -2
        //Nesses casos o jogador um vence, e para saber se o jogador 2 vence, é só inverter os valores =D

    } else if ((numUsuario - numComputador) == 1 || (numUsuario - numComputador) == -2) {
        vitoriaUsuario++
    } else if ((numUsuario - numComputador) == -1 || (numUsuario - numComputador) == 2) {
        vitoriaComputador++
    }

}

for(rodada = 0; rodada >= 99; rodada++){
    if(vitoriaUsuario = 2){
        alert("Usuario Ganhou!")
        rodada += 99
    }else 
    if(vitoriaComputador = 2){
        alert("Computador Ganhou!")
        rodada += 99
    }
    else{
        jogar()
    }
}
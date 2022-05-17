// Pedra, Papel, Tesoura

let numComputador = parseInt(Math.random() * 3 + 1)
//Aqui convertemos o valor dado por Math.random() para inteiro, pois o valor gerado é entre 0 a 1
//depois adicionamos 1 para que o valor seja sempre entre 1 a 3(sem esse adicional, por arredondar para baixo
//a variavel poderia ter o valor 0, e não queremos isso)

let confirmar = confirm("Você quer que o jogo seja jogado sozinho?")
if (confirmar == false) {
    let numUsuario = prompt("Bora jogar Jo-Ken-Po! \nDigite Pedra, Papel ou Tesoura! (Sem espaço hein!!)")
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
        numUsuario = parseInt(Math.random() * 3 + 1)
    }
} else {
    numUsuario = parseInt(Math.random() * 3 + 1)
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
}

if (numComputador == 1) {
    document.querySelector('.computador').innerText = "PEDRA"

} else if (numComputador == 2) {
    document.querySelector('.computador').innerText = "PAPEL"

} else if (numComputador == 3) {
    document.querySelector('.computador').innerText = "TESOURA"

}

if (numUsuario == numComputador) {
    alert("FOI UM EMPATE!")
} else if ((numUsuario - numComputador) == 1 || (numUsuario - numComputador) == -2) {
    alert("O Jogador 1 Venceu!")
} else if ((numUsuario - numComputador) == -1 || (numUsuario - numComputador) == 2) {
    alert("O Jogador 2 Venceu!")
}
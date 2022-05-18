// Pedra, Papel, Tesoura

let numComputador = parseInt(Math.random() * 3 + 1)
let numUsuario = parseInt(Math.random() * 3 + 1)
//Aqui convertemos o valor dado por Math.random() para inteiro, pois o valor gerado é entre 0 a 1
//depois adicionamos 1 para que o valor seja sempre entre 1 a 3(sem esse adicional, por arredondar para baixo
//a variavel poderia ter o valor 0, e não queremos isso)

let confirmar = confirm("Você quer que o jogo seja jogado sozinho?")
//Aqui pergunto se o usuario quer escolher o sinal jogado, ou quer que seja aleatorio
if (confirmar == false) {
    //casso ele queira jogar, ele digita um valor entre Pedra, Papel e Tesoura
    numUsuario = prompt("Bora jogar Jo-Ken-Po! \nDigite Pedra, Papel ou Tesoura! (Sem espaço hein!!)")

    numUsuario = numUsuario.toUpperCase()

    //Aqui eu transformo a STRING em um valor, Pedra =1, Papel =2, Tesoura =3
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
} else {
    //Caso o usuario não queira jogar, aqui é gerado o valor aleatório
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
    //Aqui é gerado o sinal do computador
    document.querySelector('.computador').innerText = "PEDRA"

} else if (numComputador == 2) {
    document.querySelector('.computador').innerText = "PAPEL"

} else if (numComputador == 3) {
    document.querySelector('.computador').innerText = "TESOURA"

}

let rodada = 0
let vitoriaUsuario = 0
let vitoriaComputador = 0
let jogadasUsuario = []
let jogadasComputador = []










while(rodada<=3){
    if ((numUsuario - numComputador) == 1 || (numUsuario - numComputador) == -2) {
        vitoriaUsuario++
        rodada++
        } else if ((numUsuario - numComputador) == -1 || (numUsuario - numComputador) == 2) {
        vitoriaComputador++
        rodada++
        }
}
alert(vitoriaComputador)
alert(vitoriaUsuario)




const jogador1 = [23, 69, 32]
const jogador2 = [13, 67, 43]

function encontrarGanhador(a, b){
    let pontos1 = 0
    let pontos2 = 0
    let rodadas = a.length

    for(i=0; i<rodadas ; i++){
        if(jogador1[i] > jogador2[i]){
            //jogador1 pontuou
            pontos1++
        }else if(jogador1[i] < jogador2[i]){
            //jogador2 pontuou
            pontos2++
        }else{
            //empate
        }
    }
        if(pontos1 > pontos2){
            //jogador1 venceu
            return console.log("O vencedor da competição é o jogador1 com um total de: " + pontos1 + " pontos!\nEm segundo lugar ficou o jogador2 com " + pontos2 + " pontos!")
        }else if(pontos1 < pontos2){
            //jogador2 venceu
            return console.log("O vencedor da competição é o jogador2 com um total de: " + pontos2 + " pontos!\nEm segundo lugar ficou o jogador1 com " + pontos1 + " pontos!")
        }else{
            return console.log("A competição resultou em um empate! ambos os jogadores marcaram " + pontos1 + " pontos!")
        }
}

encontrarGanhador(jogador1, jogador2)
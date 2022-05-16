let ParticipanteA = [5, 8, 4, 9, 5]
let ParticipanteB = [8, 7, 80, 6, 8]
let ParticipanteC = [50, 50, 50, 50, 50]
//let ParticipanteB = [8, 7, 8, 6, 8]
//let ParticipanteC = [7, 5, 10, 8, 3]

function pontuacaoMedia(participante){
let media1 = 0
let a = participante.length

   for(i=0;i<a;i++) {
       media1 += participante[i]
   }
   return media1/a
}

function pontuacaoMaior(participante){
let maiorValor = 0
let b = participante.length
    for(i=0;i<b;i++){
        if(participante[i] > maiorValor){
            maiorValor = participante[i]
        }
    }
    return maiorValor
    
}


function campeonato(p1, p2, p3){
let campeaoMedia
let campeaoMaior
let mediaA, mediaB, mediaC, maiorA, maiorB, maiorC



            mediaA = pontuacaoMedia(ParticipanteA)
            maiorA = pontuacaoMaior(ParticipanteA)
            mediaB = pontuacaoMedia(ParticipanteB)
            maiorB = pontuacaoMaior(ParticipanteB)
            mediaC = pontuacaoMedia(ParticipanteC)
            maiorC = pontuacaoMaior(ParticipanteC)

    //Aqui a estrutura para saber qual a maior media
    if(mediaA > mediaB && mediaA > mediaC){
        campeaoMedia = "Participante A"
    }else if(mediaB > mediaA && mediaB > mediaC){
        campeaoMedia = "Participante B"
    }else{
        campeaoMedia = "Participante C" 
    }


    //Aqui a estrutura para saber qual o maior valor
    if(maiorA > maiorB && maiorA > maiorC){
        campeaoMaior = "Participante A"
    }else if(maiorB > maiorA && maiorB > maiorC){
        campeaoMaior = "Participante B"
    }else{
        campeaoMaior = "Participante C" 
    }

    if(campeaoMaior == campeaoMedia){
        return "O " + campeaoMaior + " venceu as duas categorias!! \nUma maquina!!"
    }else{
        return "O vencedor com a maior média é: " + campeaoMedia + "\nO vencedor com o maior valor é: " + campeaoMaior
    }
    

}

console.log(campeonato(ParticipanteA, ParticipanteB, ParticipanteC))


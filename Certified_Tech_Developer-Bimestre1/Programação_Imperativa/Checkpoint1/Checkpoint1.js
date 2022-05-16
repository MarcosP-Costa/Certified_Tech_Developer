//Equipe 2
//Marcos Paulo Costa
//Ehrich Mendes de Menezes
//Ettore Muniz
//Felipe Stefani
//Laura Pertile
//Laiane Alessandra


function microondas(pratoEscolhido, tempoDoCliente){
    let comida = pratoEscolhido.toLowerCase()
    let tempo = 0

switch (comida){
    case "pipoca":
        tempo = 10
    break
    case "macarrão":
        tempo = 8
    break
    case "carne":
        tempo = 15
    break
    case "feijão":
        tempo = 12
    break
    case "brigadeiro":
        tempo = 8
    break
    default:
        return "Prato Inexistente, não se esqueça dos acentos!"

}

if(tempoDoCliente < tempo){
        return "Prato Pronto \nTempo Insuficiente!"
}else if(tempoDoCliente >= tempo && tempoDoCliente < (tempo*2)){
        return "Prato pronto, bom apetite!!"
}else if(tempoDoCliente >= (tempo*2) && tempoDoCliente < (tempo*3)){
        return "Prato Pronto \nA Comida Queimou!"
}else if(tempoDoCliente >= (tempo*3)){
        return "Prato Pronto \nKABUUUUM!!!"
}
}


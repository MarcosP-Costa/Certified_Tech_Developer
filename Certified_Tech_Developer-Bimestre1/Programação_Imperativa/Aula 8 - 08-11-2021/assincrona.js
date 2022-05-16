function podeSubir(altura, acompanhante){
 if (altura <= 200 && altura >= 140){
return console.log("Acesso Autorizado")
}else if(altura < 140 && altura >= 120){
    if(acompanhante == "sim"){
        return console.log("Acesso Autorizado com Acompanhante")

    }else{
        return console.log("Acesso Negado, necessário acompanhante")
    }

}else{
         return console.log("Acesso Negado")
}
}

podeSubir(125, "sim")
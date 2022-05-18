export function dividir(numParam1, numParam2){
if(isNaN(numParam1) || isNaN(numParam2)){
return "Insira um número valido"
}else if(numParam1 == 0 || numParam2 == 0){
return "Não se pode dividir por 0"
}else{
    let total = numParam1 / numParam2
return total
}
}






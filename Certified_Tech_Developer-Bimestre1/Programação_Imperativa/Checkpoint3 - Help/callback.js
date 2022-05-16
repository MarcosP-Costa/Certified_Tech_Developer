function somar(a, b){
    return a + b
}
function subtrair(a, b){
    return a - b
}
function multiplicacao(a, b){
    return a * b
}

function calculadora(a, b, operacao){
    return operacao(a, b)
}



console.log(calculadora(5, 15, multiplicacao))
    function adicionar(a, b, c){
    let d = a + b + c
        return d
    }
    
    function subtra(a, b){
        let c = a - b
        return c
    }
        
    function multi(a, b){
        let c = a * b
        return c
    }
    
    function divisao(a, b){
        let c = a / b
        return c
    }
    console.log ("-------------- Teste de Operações / Calculadora --------------")
    

    function quadradoDoNumero(a){
        return multi(a, a)
    }
    
    function mediaDeTresNumeros(num1,num2,num3){
        return adicionar(num1,num2,num3) / 3
    }

    function calculaPorcentagem (a, b){
    //o calculo é, a vezes b dividido por 100
    return divisao(multi(a, b), 100)
    }

    function geradorDePorcentagem(a, b){
    //o calculo é, a vezes 100 dividido por b
    return divisao(multi(a, 100), b)
    }

    
    
    
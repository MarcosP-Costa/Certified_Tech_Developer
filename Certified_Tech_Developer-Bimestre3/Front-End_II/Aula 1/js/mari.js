function arraySoma(array){

    let soma = 0;

    for(let i = 0; i < array.length; i++){
        soma = soma + array[i];

        console.log(soma);
    }
}

arraySoma([1, 4, 6]);
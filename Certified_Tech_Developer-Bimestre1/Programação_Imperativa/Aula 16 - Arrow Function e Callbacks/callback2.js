//Crie uma função acaoCarro(), que receberá uma callback como parâmetro. Após isso, crie duas funções: andar() – deve exibir uma mensagem dizendo que o carro está andando – e parar() – deve exibir uma mensagem dizendo que o carro parou.

//Execute ambas as ações utilizando a função acaoCarro(), passando suas ações como callbacks.

const andar = () => {return "O carro esta andando"}
const parar = () => {return "O carro parou"}

function acaoCarro(callback1, callback2){
    console.log(callback1())
    console.log(callback2())
}

acaoCarro(andar, parar)
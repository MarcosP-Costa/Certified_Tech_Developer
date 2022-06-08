/* 1- Capturar as informações vindas do HTML e obter os valores com o JS */

//Inputs mais simples, que podemos pegar com o value do que foi digitado
let titulo = document.getElementById("titulo");

let imagem = document.getElementById("imagem");

let descricao = document.getElementById("descricao");


//Capturando o botão de salvar
let botaoAdicionar = document.getElementById("adicionar");

//adiciona um evento ao botão de "salvar"
botaoAdicionar.addEventListener("click", function (evento) {

    //Valida se o campo obrigatório, está preenchido
    if (titulo.value) {

        evento.preventDefault();
        console.log(titulo.value + imagem.value + descricao.value);
    }
});
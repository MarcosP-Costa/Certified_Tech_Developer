/* 1- Capturar as informações vindas do HTML e obter os valores com o JS */

//Inputs mais simples, que podemos pegar com o value do que foi digitado
let titulo = document.getElementById("titulo");

let imagem = document.getElementById("imagem");

let descricao = document.getElementById("descricao");


//Capturando o botão de Adicionar
let botaoAdicionar = document.getElementById("adicionar");

var contagemCard = 0

function modificarCard(){
    document.getElementsByClassName("tituloCard")[contagemCard].innerText = titulo.value
    let elemento = document.querySelector(".imagemCard")
    console.log(elemento);
    elemento.setAttribute("src", imagem.value)
    document.getElementsByClassName("descricaoCard")[contagemCard].innerText = descricao.value
}

function criarCard(){
    contagemCard++
    let tagTitulo1 = document.createElement("h4")
    let textoTagTitulo1 = document.createTextNode("Card" + contagemCard)
    tagTitulo1.appendChild(textoTagTitulo1)
    document.body.appendChild(tagTitulo1)
    tagTitulo1.setAttribute("class", "mb-3")

    let tagTitulo2 = document.createElement("h5")
    let textoTagTitulo2 = document.createTextNode(titulo.value)
    tagTitulo2.appendChild(textoTagTitulo2)
    document.body.appendChild(tagTitulo2)
    tagTitulo2.setAttribute("class", "mb-3 tituloCard")

    let tagEstrutura1 = document.createElement("div")
    document.body.appendChild(tagEstrutura1)
    tagEstrutura1.setAttribute("class", "row g-3")
    let tagEstrutura2 = document.createElement("div")
    document.body.appendChild(tagEstrutura2)
    tagEstrutura2.setAttribute("class", "col-sm6")

    let tagImagem = document.createElement("img")
    document.body.appendChild(tagImagem)
    tagImagem.setAttribute("class", "imagemCard")
    tagImagem.setAttribute("src", imagem.value)
}


//adiciona um evento ao botão de "Adicionar"
botaoAdicionar.addEventListener("click", function (evento) {

    //Valida se o campo obrigatório, está preenchido
    if (titulo.value) {

        evento.preventDefault();
    }
    criarCard()
});


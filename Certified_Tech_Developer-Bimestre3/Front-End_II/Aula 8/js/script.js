let evento1 = document.getElementById("botao")
let carregado = () => {console.log("a")}  //função que da um "alert" qd a página for carregada
let titulo = document.getElementById("titulo")



evento1.addEventListener('mouseover', function(evento){
    evento.preventDefault()
    titulo.classList.toggle("darkmode")
});

evento1.addEventListener('mouseout', function(evento){
    evento.preventDefault()
    titulo.classList.toggle("darkmode")
})



//let evento2 = document.getElementById("eventoTeclado")

/* evento1.onmouseover = function(){
    console.log("mouse em cima");
}

evento1.onmouseout = function(){
    console.log("mouse em baixo");
} */


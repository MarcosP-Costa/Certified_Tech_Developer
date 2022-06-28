let botao1 = document.getElementById("botao1")
let botao2 = document.getElementById("botao2")
let botao3 = document.getElementById("botao3")
let botao4 = document.getElementById("botao4")

let usuario = {
    firstName: "Ma1r21cosP2",
    lastName: "C1o2st1a2",
    email: "marc12os1no2kbuk@gmail.com",
    password: "12341234"
}

let usuarioJson = JSON.stringify(usuario)

let configRequest1 = {
    method: "POST", //método HTTP
    headers: { //Cabeçalho da requisição
        "Content-type": "Application/json"
    },
    body: usuarioJson //Corpo da requisição
}
let configRequest2 = {
    method: "GET",
    headers: {
        "Content-type": "Application/json",
        "Authorization": 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6I…U1NH0.zvAV2fW-j1GlsM0taxVUZ1NWj33zGWaGLIoQDf8EO0o'
    }
}


botao1.addEventListener("click", function(evento){
    evento.preventDefault()

    fetch("https://ctd-todo-api.herokuapp.com/v1/users", configRequest1)
    .then(resultado =>{
        if(resultado.status == 200 || resultado.status == 201){
            return resultado.json()
        }else{
            throw resultado
        }
    })
    .then(resultado => {
        console.log(resultado);
    })
    .catch(erro => {
        console.log(erro);
    })
})

botao2.addEventListener("click", function(evento){
    evento.preventDefault()
    fetch('https://ctd-todo-api.herokuapp.com/v1/users/getMe', configRequest2)
    .then(resultado =>{
        if(resultado.status == 200 || resultado.status == 201){
            return resultado.json()
        }else{
            throw resultado
        }
    })
    .then(resultado => {
        console.log(resultado);
    })
    .catch(erro => {
        console.log(erro);
    })
})


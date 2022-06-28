let login = {
    email: document.getElementById("inputEmail"),
    senha: document.getElementById("inputPassword")
}

let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');

let botaoLogin = document.getElementById("botao")

botaoLogin.addEventListener("click", function (evento) {
        evento.preventDefault()
        console.log(regex.test(login.email.value));
})




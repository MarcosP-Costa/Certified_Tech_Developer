let nome = document.getElementById('nome')
let sobrenome = document.getElementById("sobrenome")
let email = document.getElementById("email")
let senha = document.getElementById("senha")
let botao1 = document.getElementById("botao1")
let botao2 = document.getElementById("botao2")
let botao3 = document.getElementById("botao3")

let signUpUserObject = {
    'firstName': '',
    'lastName': '',
    'email': '',
    'password': ''
}


signUpUserObject.firstName = nome.value
signUpUserObject.lastName = sobrenome.value
signUpUserObject.email = email.value
signUpUserObject.password = password.value

let signUpUserObjectJSON = JSON.stringify(signUpUserObject)

botao2.addEventListener("click", function (event) {
    event.preventDefault()

    signUpUserObject.firstName = nome.value
    signUpUserObject.lastName = sobrenome.value
    signUpUserObject.email = email.value
    signUpUserObject.password = password.value

    let signUpUserObjectJSON = JSON.stringify(signUpUserObject)

    console.log(signUpUserObject);
    console.log(signUpUserObjectJSON);
    console.log();
    buscaDadosUsuario(signUpUserObjectJSON)

})


botao1.addEventListener("click", function (event) {
    event.preventDefault()

    signUpUserObject.firstName = nome.value
    signUpUserObject.lastName = sobrenome.value
    signUpUserObject.email = email.value
    signUpUserObject.password = password.value

    let signUpUserObjectJSON = JSON.stringify(signUpUserObject)

    console.log(signUpUserObject);
    console.log(signUpUserObjectJSON);
    console.log();


    let configRequest = {
        method: "POST", // método HTTP
        headers: {
            "Content-type": "Application/json"
        },
        body: signUpUserObjectJSON
    }

    fetch("https://ctd-todo-api.herokuapp.com/v1/users", configRequest)
        .then(resultado => {
            //Verifica se ocorreu sucesso ao fazer o login
            if (resultado.status == 201 || resultado.status == 200) {
                return resultado.json();
            } else {
                //Lança uma exceção em caso de erro no login
                throw resultado;
            }
        })
        .then(resultado => {
            console.log(resultado);
            alert("Cadastro Feito com Sucesso!")
        })
        .catch(erro => {
            console.log(erro);
        })
})

async function buscaDadosUsuario(ObjetoJSON) {

    /* Cria o arquivo de configuração */
    let configRequest = {
        method: "POST", // método HTTP
        headers: {
            "Content-type": "Application/json"
        },
        body: ObjetoJSON
    }

    try { //Tenta executar as seguintes ações...

        let resposta = await fetch("https://ctd-todo-api.herokuapp.com/v1/users", configRequest);

        if (resposta.status == 200 || resposta.status == 201) {
            let respostaConvertida = await resposta.json();
            console.log(respostaConvertida);

        } else {
            throw resposta.status;
        }
    } catch (error) { //Caso tenha algum problema/erro...
        console.log(error);
    }
}

botao3.addEventListener("click", function (event) {
    event.preventDefault()
    pegarBerry(nome)
})

async function pegarBerry(num) {
    /* Cria o arquivo de configuração */
    let configRequest = {
        method: "GET", // método HTTP
        headers: {
            "Content-type": "Application/json"
        }
    }

    try { //Tenta executar as seguintes ações...
        let resposta = await fetch(`https://pokeapi.co/api/v2/berry/${num.value}`, configRequest);

        if (resposta.status == 200 || resposta.status == 201) {
            let respostaConvertida = await resposta.json();
            console.log(respostaConvertida);

        } else {
            throw resposta.status;
        }
    } catch (error) { //Caso tenha algum problema/erro...
        console.log(error);
    }
}
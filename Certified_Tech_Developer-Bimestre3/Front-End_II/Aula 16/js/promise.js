let validacao = false

let objetoUsuario = {
    nome: "Marcos Paulo",
    endereco: {
        cidade: "São Paulo",
        uf: "SP"
    }
}
let objetoUsuarioRecebido = JSON.stringify(objetoUsuario)


let novaPromise = new Promise(function(resolve, reject){

    if(validacao){
        resolve(objetoUsuarioRecebido)
    }else{
        reject("A promise foi rejeitada")
    }

});



novaPromise.then(function(resultado){
        console.log(resultado);
    return JSON.parse(resultado)
}
).then(function(resultado){
    console.log(resultado.nome);
}).catch(function(erro){
    console.log(erro);
})
 
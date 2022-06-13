let cartao = { //Aqui armazenamos os dados do "cartão"
   titulo: document.getElementById('titulo'),
   descricao: document.getElementById('descricao'),
   imagem: document.getElementById('imagem')
}

let adicionar = document.getElementById('adicionar') //aqui pegamos o botão

adicionar.addEventListener('click', function(event){ //aqui fazemos toda a função ao clicar no botão
   event.preventDefault()
   
   document.getElementById('cards').innerHTML += `
   <div class="card">
   <img src="${cartao.imagem.value}"> </img>
   <h1> ${cartao.titulo.value} </h1>
   <p>${cartao.descricao.value}</p>
   </div>
`;
})




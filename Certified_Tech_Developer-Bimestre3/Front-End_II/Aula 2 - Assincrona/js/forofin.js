let funcionario = {
    nome: "Marcos",
    idade: 24,
    profissao: "Developer"
}

let array = [1, "Lucas", true]

let string = "Paulo"


for(let valor in funcionario){
 //   console.log(funcionario[valor]);
}

//quando criamos o "let valor" no for in, atribuimos o nome do "campo" a ele em casa ciclo, por exemplo, no primeiro ciclo ele poe "nome", no segundo "idade", e por ai vai
//por isso qd queremos saber o valor exatamente daquele campo nessa iteração, precisamos colocar o nome do objeto[variavel que criamos], pq primeiro ele vai ver o nome no objeto, e etc.


for(let valor of string){
    console.log(valor);
}


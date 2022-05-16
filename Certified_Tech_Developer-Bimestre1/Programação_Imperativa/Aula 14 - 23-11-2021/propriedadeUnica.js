//Você deve criar uma função chamada propriedadeUnica que recebe uma array de objetos como parâmetro e uma string.  Você deve devolver um novo array de objetos, tendo apenas a propriedade que foi passada como string.  
//exemplo: 
//let array = [ { nome: "Lean", idade: 27 }, { nome: "Eze", idade: 49} ]
//propriedadeUnica(array, "idade") deve retornar [ { idade: 27 }, { idade: 49 } ]
//propriedadeUnica(array, "nome") deve retornar [ { nome: "Lean"}, { nome: "Eze" } ]

let pessoa = [
    {
        nome: "Marcos",
        idade: 24
    },
    {
        nome: "Sarah",
        idade: 22
    }
]

    function propriedadeUnica(array, a){
        if(a == "idade"){
            for(i=0;i<array.length;i++){
               console.log("Idade: " + array[i].idade)
            }
        }else if(a == "nome"){
            for(i=0;i<array.length;i++){
                console.log("nome: " + array[i].nome)
             }
        }else{
            return console.log("Dados Invalidos!")
        }
    }

// Calculadora de notas
//Crie o objeto do aluno,que consistirá nas seguintes propriedades básicas:
//    número
//    Número do arquivo
//    Lista de notas
//    Gostaríamos de calcular a média do aluno e se ela é aprovada com base em uma nota de aprovação que será dada.

let Aluno1 = {
    nome: "Marcos Paulo",
    media: function(nota1, nota2, nota3){
    if(((nota1 + nota2 + nota3)/3) >= 7){
        return "Parabens! Você foi aprovado!"
    }else{
        this.aprovacao = false
        return "Infelizmente você foi reprovado!"
    }
    },
    aprovacao: true
}





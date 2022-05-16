var qtAlunos = 3
var a, notaIndividual, notaTotal, media
a = 1
notaTotal = 0
function mediaAlunos(){
while(a <= qtAlunos){
notaIndividual = 6.5
notaTotal = notaTotal + notaIndividual
a++
}
media = notaTotal / qtAlunos

console.log("Essa turma tem um total de: " + qtAlunos + " alunos, ")
console.log("A nota total dessa turma é: " + notaTotal + ", ")
console.log("Então, a média fica em: " + media)

}

mediaAlunos()







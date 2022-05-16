var readlineSync = require('readline-sync');
var qtAlunos = readlineSync.questionInt('Digite a quantidade de alunos: ')
var a, notaIndividual, notaTotal, media
a = 1
notaTotal = 0
function mediaAlunos(){
while(a <= qtAlunos){
notaIndividual = readlineSync.questionInt('Digita a nota do aluno ' + a + ' :')
notaTotal = notaTotal + notaIndividual
a++
}
media = notaTotal / qtAlunos

console.log("Essa turma tem um total de: " + qtAlunos + " alunos, ")
console.log("A nota total dessa turma é: " + notaTotal + ", ")
console.log("Então, a média fica em: " + media)

}

mediaAlunos()







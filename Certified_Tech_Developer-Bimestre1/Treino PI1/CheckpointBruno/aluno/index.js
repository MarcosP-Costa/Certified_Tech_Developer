
function Aluno(nome, faltas, notas) {
    this.nome = nome;
    this.qtdDeFaltas = faltas;
    this.notas = notas;
    this.media = function () {
        let soma = 0
        for(let i = 0; i < this.notas.length; i++) {
            soma = soma + this.notas[i]
           
        }
        return soma / this.notas.length
    };

    this.faltas = function () {
        return this.qtdDeFaltas + 1
    }

    
    
}

const aluno1 = new Aluno("Bruno",8,[10,8,7,9]);
const aluno2 = new Aluno("Adriana",15,[6,9,3,10]);
const aluno3 = new Aluno("Jose",4,[8,6,10,8]);
const aluno4 = new Aluno("Maria",7,[7,8,9,8]);
const aluno5 = new Aluno("Ricardo",12,[7,8,6,5]);

listaAlunos = [aluno1, aluno2, aluno3, aluno4, aluno5]
module.exports = {
    listaAlunos ,
    Aluno,
    
}
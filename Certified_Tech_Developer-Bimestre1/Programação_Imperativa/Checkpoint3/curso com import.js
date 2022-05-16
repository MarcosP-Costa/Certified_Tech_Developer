let alunos = require('./alunos');
//3º Criar objeto literal curso
function Curso(nomeDoCursoParam, notaDeAprovacaoParam, faltasMaximasParam) {
    this.nomeDoCurso = nomeDoCursoParam
    this.notaDeAprovacao = notaDeAprovacaoParam
    this.faltasMaximas = faltasMaximasParam
    this.listaDeEstudantes = alunos.listaALunos
    //4º Criar método que permite adicionar alunos à lista do curso
    this.adicionarAluno = function (alunoNovo) {
        return this.listaDeEstudantes.push(alunoNovo)
    }
    this.aprovarAluno = function (alunoAvaliado) {
        let aprovado
        if (alunoAvaliado.calcularMedia() >= this.notaDeAprovacao && alunoAvaliado.qtFaltas < this.faltasMaximas) {
            //Caso o aluno tenha a media maior ou igual e faltas menor
            return aprovado = true
        } else if (alunoAvaliado.calcularMedia() >= (this.notaDeAprovacao + (this.notaDeAprovacao * 0.1)) && alunoAvaliado.qtFaltas == this.faltasMaximas) {
            //Caso o aluno tenha exatamente a quantidade de faltas maximas pra passar, e a media maior ou igual que a nota minima + 10%
            return aprovado = true
        } else {
            return aprovado = false
        }
    }
    //confirmar com o professor
    this.alunosAprovados = function () {
        //(ProgImperativa.listaDeEstudantes[1].nome)
        let listaAlunosAprovados = []
        listaAlunosAprovados.push(this.aprovarAluno(this.listaDeEstudantes[0]))
        listaAlunosAprovados.push(this.aprovarAluno(this.listaDeEstudantes[1]))
        listaAlunosAprovados.push(this.aprovarAluno(this.listaDeEstudantes[2]))
        console.log(listaAlunosAprovados)

    }

}
let FrontEnd = new Curso("Front-End", 7, 7)
let ProgImperativa = new Curso("Programação Imperativa", 7, 2)

//console.log(FrontEnd.aprovarAluno(alunos.listaALunos[0]))

FrontEnd.alunosAprovados()
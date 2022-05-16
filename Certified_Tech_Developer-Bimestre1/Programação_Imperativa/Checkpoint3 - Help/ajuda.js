//1º Crie um objeto aluno que tenha nome notas e quantidade de faltas
function Aluno(nomeParam, qtFaltasParam, notasParam) {
    this.nome = nomeParam
    this.qtFaltas = qtFaltasParam
    this.notas = notasParam
    //2º método calcularMedia

    this.calcularMedia = function () {
        let media = 0
        for (let i = 0; i < this.notas.length; i++) {
            media = media + this.notas[i]
        }
        media = media / this.notas.length
        return media;
    }
    this.faltas = function () {
        return this.qtFaltas + 1
    }
} //Fim do Construtor Filho

function Curso(nomeDoCursoParam, notaDeAprovacaoParam, faltasMaximasParam, listaDeEstudantesParam) {
    //Passo 3, função construtora CURSO
    this.nomeDoCurso = nomeDoCursoParam
    this.notaDeAprocacao = notaDeAprovacaoParam
    this.faltasMaximas = faltasMaximasParam
    this.listaDeEstudantes = listaDeEstudantesParam
    //Passo 4, adicionar aluno
    this.adicionarAluno = function (alunoNovo) {
        return this.listaDeEstudantes.push(alunoNovo)
    }
    //Passo 5, aprovar aluno
    this.aprovarAluno = function (alunoAvaliado) {
        let aprovado = false
        if (alunoAvaliado.calcularMedia() >= this.notaDeAprocacao && alunoAvaliado.qtFaltas < this.faltasMaximas) {
            //Caso o aluno tenha a media maior ou igual e faltas menor   
            aprovado = true
            return aprovado
        } else if (alunoAvaliado.calcularMedia() >= (this.notaDeAprocacao + (this.notaDeAprocacao * 0.1)) && alunoAvaliado.qtFaltas == this.faltasMaximas) {
            //caso o aluno tenha exatamente a quantidade de faltas permitida e nota +10%
            aprovado = true
            return aprovado
        } else {
            return aprovado
        }
    }
    //passo 6 - array de booleanos
    this.alunosAprovados = function () {
        let listaAlunosAprovados = []
        for (let i = 0; i < this.listaDeEstudantes.length; i++) {
            listaAlunosAprovados.push(this.aprovarAluno(this.listaDeEstudantes[i]))
        }
        console.log(listaAlunosAprovados)
    }
}
//Objetos Literais Alunos
const aluno1 = new Aluno("Marcos", 3, [5, 5, 10, 50])
const aluno2 = new Aluno("Paulo", 1, [7.6])
const aluno3 = new Aluno("Costa", 6, [7.8])
const aluno4 = new Aluno("Agostinho", 6, [9.8])

//Objetos Literais Cursos
const curso1 = new Curso("Front-End", 7, 4, [aluno1, aluno2, aluno3])

//curso1.adicionarAluno(aluno4)
curso1.alunosAprovados()
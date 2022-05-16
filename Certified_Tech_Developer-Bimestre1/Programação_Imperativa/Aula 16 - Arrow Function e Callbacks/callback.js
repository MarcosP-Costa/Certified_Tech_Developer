const somar = (numeroA, numeroB) => numeroA + numeroB;
const calculadora = (numeroA, numeroB, operacao) => operacao(numeroA, numeroB)
let hora = new Date()

console.log(calculadora(2, 3, somar) + " E são " + hora.getHours() + " Horas!");
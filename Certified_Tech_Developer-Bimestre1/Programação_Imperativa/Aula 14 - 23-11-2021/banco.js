function Conta(numeroDaConta, tipoDeConta, saldoDaConta, titularDaConta){
    this.conta = numeroDaConta
    this.tipo = tipoDeConta
    this.saldo = saldoDaConta
    this.titular = titularDaConta
}

const conta1 = new Conta(5486273622,	"Conta Corrente",	400,	"Abigael Natte")
const conta2 = new Conta (1183971869,	"Conta Poupança",	8675,	"Ramon Connell")
const conta3 = new Conta(9582019689,	"Conta Poupança",	27363,	"Jarret Lafuente")
const conta4 = new Conta(1761924656,	"Conta Poupança",	32415,	"Ansel Ardley")
const conta5 = new Conta(7401971607,	"Conta Poupança",	18789,	"Jacki Shurmer")
const conta6 = new Conta(630841470,	    "Conta Corrente",	28776,	"Jobi Mawtus")
const conta7 = new Conta(4223508636,	"Conta Corrente",	2177,	"Thomasin Latour")
const conta8 = new Conta(185979521,	    "Conta Poupança",	25994,	"Lonnie Verheijden")
const conta9 = new Conta(3151956165,	"Conta Corrente",	7601,	"Alonso Wannan")
const conta10 = new Conta(2138105881,	"Conta Poupança",	33196,	"Bendite Huggett")

let listaDeContas = [conta1, conta2, conta3, conta4, conta5, conta6, conta7, conta8, conta9, conta10]

let banco = {
    clientes: listaDeContas,
    consultarCliente: function(titular){
        for(i=0;i<listaDeContas.length;i++){
            if(listaDeContas[i].titular == titular){
                return "Esse o cliente " + listaDeContas[i].titular + " esta cadastrado!"
            }
        }
    },
    deposito: function(titular, valor){
        if(valor < 0){
            return "valor incorreto!"
        }else{
        for(i=0;i<listaDeContas.length;i++){
            if(listaDeContas[i].titular == titular){
                listaDeContas[i].saldo +=  valor
                return "Deposito Realizado! novo valor: " + listaDeContas[i].saldo
            }
        } 
    }
},
    saque: function(titular, valor){
        if(valor < 0){
            return "valor incorreto!"
        }else{
            for(i = 0; i<listaDeContas.length;i++){
                if(listaDeContas[i].titular == titular){
                    if(valor > listaDeContas[i].saldo){
                        return "valor incorreto!, o valor solicitado é maior do que seu saldo no banco!"
                    }else{
                    listaDeContas[i].saldo -= valor
                    return "Saque Realizado! novo valor: " + listaDeContas[i].saldo                          
                }
                }
            }
        }
    }
}

console.log(banco.saque("Alonso Wannan", 601))
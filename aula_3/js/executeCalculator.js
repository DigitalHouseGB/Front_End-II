import{somar,subtrair,multiplicar,divisao} from "./script_1.js";

alert("Bem vindo a calculadora amadora\nOs comandos para usa-la são, 'dividir', 'somar', 'multiplicar' ou 'subtrair' ")

let perguntaOperacao = prompt("Qual operação matemática deseja fazer ?")

let resultadoOperacao = 0 

function usuario(operacao){
        
    if(operacao == "somar"){
        alert("Digite o primeiro número e logo após, digite o segundo número para executar a operação")
        resultadoOperacao = somar()
    }else if(operacao == "dividir"){
        alert("Digite o primeiro número e logo após, digite o segundo número para executar a operação")
        resultadoOperacao = divisao()
    }else if(operacao == "multiplicar"){
        alert("Digite o primeiro número e logo após, digite o segundo número para executar a operação")
        resultadoOperacao = multiplicar()
    }else if(operacao == "subtrair"){
        alert("Digite o primeiro número e logo após, digite o segundo número para executar a operação")
        resultadoOperacao = subtrair()
    }
    return resultadoOperacao
}

usuario((perguntaOperacao))

alert("O resultado da conta é" +" "+ resultadoOperacao)




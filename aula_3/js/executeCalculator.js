import{calculadora} from "./script.js";

let nome = prompt("Informe seu nome")

alert(`Olá ${nome}\nBem vindo a calculadora amadora\nOs comandos para usa-la são, 'dividir', 'somar', 'multiplicar' ou 'subtrair'\n`)

alert("Digite o primeiro número e logo após, digite o segundo número para executar a operação")

let resultado = 0

/* Implementação de callback */
function pergunta(calculadora){
let perguntaOperacao = prompt("Qual operação matemática deseja fazer ?")
resultado = calculadora[perguntaOperacao]()
return resultado
}
pergunta(calculadora)

alert (`O resultado é ${resultado}`)

function maisCalc(){
    let confirmacao = confirm("Deseja executar mais algum calculo ?")
    if(confirmacao === true){
        pergunta(calculadora)
        alert (`O resultado é ${resultado}`)
    }
    if(confirmacao === true){
        maisCalc()
    }else{
        alert("Obrigado por nos visitar")
    }
    
}

maisCalc()

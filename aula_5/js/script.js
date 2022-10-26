function darkMode(nome){
let modoEscuro = confirm(`Olá ${nome} deseja ativar o modo escuro ?`)

let dark = document.querySelector(".dark")

    if(modoEscuro){
    }else{
        alert("Caso queria ativar o dark mode basta recarregar a página")
        return dark.classList.toggle("dark")
    }
}

darkMode(prompt("Informe seu nome"))
window.addEventListener("load", function(){
    let submit = document.querySelector("#reiniciar")

    submit.addEventListener("click",function(enviar){
        enviar.preventDefault()
    })
})

addEventListener("load", function(){
    alert("a pagina carregou")
})

let enviar = document.getElementById("enviar")

enviar.onmouseover = function(){
    this.style.color="blue"
    this.style.scale="1.90"
    console.log("mouse em cima")
}

enviar.addEventListener("mouseout", function(){
    this.style.color = "purple"
    this.style.scale = "1.10"
})

let texto = document.getElementById("texto")

texto.addEventListener("keydown", function(apertar){
    console.log(apertar.key)
})




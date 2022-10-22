function somar(numero1,numero2){
    
    let usuario =  parseInt(prompt(numero1)) ;
    let usuario_2 =  parseInt(prompt(numero2)) ;
      
    let resultado = 0
    
    resultado = usuario + usuario_2

    return resultado

}

function subtrair(numero1,numero2){
    let usuario =  parseInt(prompt(numero1)) ;
    let usuario_2 =  parseInt(prompt(numero2)) ;
      
    let resultado = 0
    
    resultado = usuario - usuario_2

    return resultado
}

function multiplicar(numero1,numero2){
    let usuario =  parseInt(prompt(numero1)) ;
    let usuario_2 =  parseInt(prompt(numero2)) ;
      
    let resultado = 0
    
    resultado = usuario * usuario_2

    return resultado
}

function divisao(numero1,numero2){
    let usuario =  parseInt(prompt(numero1)) ;
    let usuario_2 =  parseInt(prompt(numero2)) ;
      
    let resultado = 0
   
    resultado = usuario / usuario_2

    return resultado
} 

export{somar,subtrair,multiplicar,divisao};

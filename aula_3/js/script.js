let calculadora = {
    somar: function(numero1,numero2){
    
    numero1 =  parseInt(prompt(`Digite o numero 1`)) ;
    numero2 =  parseInt(prompt(`Digite o numero 2`)) ;
      
    let resultado = 0
    
    resultado = numero1 + numero2

    return resultado

},
subtrair: function(numero1,numero2){
    numero1 =  parseInt(prompt(`Digite o numero 1`)) ;
    numero2 =  parseInt(prompt(`Digite o numero 2`)) ;
      
    let resultado = 0
    
    resultado = numero1 - numero2

    return resultado
},
multiplicar: function(numero1,numero2){
    numero1 =  parseInt(prompt(`Digite o numero 1`)) ;
    numero2 =  parseInt(prompt(`Digite o numero 2`)) ;
      
    let resultado = 0
    
    resultado = numero1 * numero2

    return resultado
},
dividir: function(numero1,numero2){
    numero1 =  parseInt(prompt(`Digite o numero 1`)) ;
    numero2 =  parseInt(prompt(`Digite o numero 2`)) ;
      
    let resultado = 0
   
    resultado = numero1 / numero2

    return resultado
}
}

export{calculadora};

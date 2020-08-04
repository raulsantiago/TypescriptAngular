// Function
var dobroDoValor = function(numero){
    return numero * 2
}
console.log(dobroDoValor(7))

// Arrow Function
var dobroDoValor = numero => numero * 2
console.log(dobroDoValor(7))

// Arrow Function com mais de 1 parametros
var dobroDoValor = (numero, numero2) => numero * numero2
console.log(dobroDoValor(7, 7))

// Arrow Function sem parametro
var dobroDoValor = () => 7 * 7
console.log(dobroDoValor())

// Arrow Function com result
var dobroDoValor = numero => {
    let resultado = numero * 2
    return resultado
}
console.log(dobroDoValor(7))

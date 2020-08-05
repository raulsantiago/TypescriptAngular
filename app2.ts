import Carro, { coisa as x }  from './Carro' // Usando uma variavel x recebendo a variavel coisa
import Concessionaria from './Concessionaria'
import Pessoa from './Pessoa'

/*
let carroA = new Carro('Veloster', 3)
console.log(carroA)
carroA.acelerar()
console.log(carroA)
carroA.acelerar()
carroA.acelerar()
console.log(carroA)
*/

/*
let concessionariaA = new Concessionaria('Av Brasil');
console.log(concessionariaA)
*/

/*
let pessoa = new Pessoa('Raul', 'Escort');
console.log(pessoa.dizerCarroPeferido())
*/

/* -- criar carros -- */
let carroC = new Carro('Fusca', 2)
let carroD = new Carro('Brasilia', 4)
let carroE = new Carro('Kombi', 6)

/* -- lista de carros da concessionaria -- */
let listaDeCarros: Array<Carro> = [carroC, carroD, carroE]

let concessionariaB = new Concessionaria('Av Sao Pe', listaDeCarros)

/* -- exibir a lista de acrros  -- */
//console.log(concessionariaB.mostrarListaDeCarros())

/* -- comprar carro -- */
let cliente = new Pessoa('Lua','Fusca')
//console.log(cliente.dizerCarroPeferido())

concessionariaB.mostrarListaDeCarros().map((carro: Carro) => {
    //console.log(carro) // listou o array

    if(carro['modelo'] == cliente.dizerCarroPeferido()){
    cliente.comprarCarro(carro)
    }
})

console.log(cliente.dizerCarroQueTem())
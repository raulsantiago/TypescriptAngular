import Carro from './Carro'
import Moto from './Moto'
import Concessionaria from './Concessionaria'

let carro = new Carro('Fus',3);

let moto = new Moto();
moto.acelerar()
moto.acelerar()
carro.acelerar()
carro.acelerar()

console.log(moto)
console.log(carro)

let concessionaria = new Concessionaria('', [])
console.log(concessionaria.fornecerHorariosDeFuncionamento())

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Carro_1 = __importDefault(require("./Carro")); // Usando uma variavel x recebendo a variavel coisa
var Concessionaria_1 = __importDefault(require("./Concessionaria"));
var Pessoa_1 = __importDefault(require("./Pessoa"));
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
var carroC = new Carro_1.default('Fusca', 2);
var carroD = new Carro_1.default('Brasilia', 4);
var carroE = new Carro_1.default('Kombi', 6);
/* -- lista de carros da concessionaria -- */
var listaDeCarros = [carroC, carroD, carroE];
var concessionariaB = new Concessionaria_1.default('Av Sao Pe', listaDeCarros);
/* -- exibir a lista de acrros  -- */
//console.log(concessionariaB.mostrarListaDeCarros())
/* -- comprar carro -- */
var cliente = new Pessoa_1.default('Lua', 'Fusca');
//console.log(cliente.dizerCarroPeferido())
concessionariaB.mostrarListaDeCarros().map(function (carro) {
    //console.log(carro) // listou o array
    if (carro['modelo'] == cliente.dizerCarroPeferido()) {
        cliente.comprarCarro(carro);
    }
});
console.log(cliente.dizerCarroQueTem());

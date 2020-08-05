"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Carro_1 = __importDefault(require("./Carro"));
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, carroPreferido) {
        this.carro = new Carro_1.default('', 0);
        this.nome = nome;
        this.carroPreferido = carroPreferido;
    }
    Pessoa.prototype.dizerNome = function () {
        return this.nome;
    };
    Pessoa.prototype.dizerCarroPeferido = function () {
        return this.carroPreferido;
    };
    Pessoa.prototype.comprarCarro = function (carro) {
        this.carro = carro;
    };
    Pessoa.prototype.dizerCarroQueTem = function () {
        return this.carro;
    };
    return Pessoa;
}());
exports.default = Pessoa;

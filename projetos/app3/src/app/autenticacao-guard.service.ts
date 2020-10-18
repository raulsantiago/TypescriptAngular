import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { Autenticacao } from './autenticacao.service';


// Protegendo uma rota sem autencicação
@Injectable()
export class AutenticacaoGuard implements CanActivate {

    constructor(private autenticacao: Autenticacao) {}

    canActivate(): boolean{
        return this.autenticacao.autenticado()
    }
}
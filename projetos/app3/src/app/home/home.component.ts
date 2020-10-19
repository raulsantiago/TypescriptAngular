import { Component, OnInit, ViewChild } from '@angular/core';
import { Autenticacao } from '../autenticacao.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  @ViewChild('publicacoes') public publicacoes: any

  constructor(private autenticacao: Autenticacao) { }

  ngOnInit() {
  }

  public sair(): void {
    this.autenticacao.sair()
  }

  // Atualizando a página publicação (filho) com este metodo do (Pai) home
  public atualizarTimeLine(): void {
    this.publicacoes.atualizarTimeLine()
  }

}

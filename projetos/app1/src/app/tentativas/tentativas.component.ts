import { Component, OnInit, OnChanges, Input } from '@angular/core';

import { Coracao } from '../shared/coracao.model'

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit, OnChanges {

  // Passar variavel de pai para filho component
  @Input() public tentativas: number

  public coracoes: Array<Coracao> = [
    new Coracao(true),new Coracao(true),new Coracao(true)
  ]

  constructor() { 
    
  }

  // Fase do cilco de vida onde traz na inicialização sempre atualizado o dado do componente de origem
  ngOnChanges(): void {
    if(this.tentativas !== this.coracoes.length){
      let indice = this.coracoes.length - this.tentativas
      this.coracoes[indice - 1].cheio = false
    }
  }

  ngOnInit(): void {
  }

  

}

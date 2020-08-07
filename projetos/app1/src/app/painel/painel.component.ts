import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';

import { Frase } from '../shared/frase.model'
import { FRASES } from './frases-mock'

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit, OnDestroy {
  

  public frases: Frase[] = FRASES
  public instrucao: string = 'Traduza a frase:'
  public resposta: string = ''

  public rodada: number = 0
  public rodadaFrase: Frase

  public progresso: number = 0

  public tentativas: number = 3

  // Passando variavel de filho para pai component
  @Output() public encerrarJogo: EventEmitter<string> = new EventEmitter()

  constructor() { 
    this.atualizaRodada()
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {    
  }

  public atualizaResposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value
  }

  public verificarResposta(): void {
    if(this.rodadaFrase.frasePtBr == this.resposta){      
      // trocar pergunta da rodade e atualiza para próxima
      this.rodada++
      this.atualizaRodada()
      // progresso em %
      this.progresso = this.progresso  + (100/ this.frases.length)
      //
      if(this.rodada === 4){
       this.encerrarJogo.emit('vitoria')
      }
    }else {
      // dimunir a variavel tentativas
      this.tentativas--

      if(this.tentativas === -1){
        this.encerrarJogo.emit('derrota')
      }
      
    }
  }

  public atualizaRodada(): void {
    // Atualiza a rodada
    this.rodadaFrase = this.frases[this.rodada]
    // limpa a frase da textarea
    this.resposta = ''
  }

}

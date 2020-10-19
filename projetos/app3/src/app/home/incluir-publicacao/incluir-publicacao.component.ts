import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";

import { Observable } from "rxjs/Observable";
import "rxjs/Rx";
import { Subject } from 'rxjs/Subject';

import * as firebase from "firebase";
import { Bd } from "../../bd.service";
import { Progresso } from '../../progresso.service';

@Component({
  selector: 'app-incluir-publicacao',
  templateUrl: './incluir-publicacao.component.html',
  styleUrls: ['./incluir-publicacao.component.css']
})
export class IncluirPublicacaoComponent implements OnInit {

  // Output para fins de passar ao componente Pai que é Home
  @Output() public atualizarTimeLine: EventEmitter<any> = new EventEmitter<any>()

  public email: string
  private imagem: any

  public progressoPublicacao: string = 'pendente'
  public porcentagemUpload: number

  public formulario: FormGroup = new FormGroup({
    "titulo": new FormControl(null)
  })
  constructor(
    private bd: Bd,
    private progresso: Progresso
  ) { }

  ngOnInit() {
    firebase.auth().onAuthStateChanged((user) => {
      this.email = user.email
      
    })
  }

  public publicar(): void {
    this.bd.publicar({
      email: this.email,
      titulo: this.formulario.value.titulo,
      imagem: this.imagem[0]
    })
    let acompanhamentoUpload = Observable.interval(500)/* Voce pode diminuir o tempo caso não consiga ver o andamento 
    do upload da imagem, coloque somente 1 ao invés de 1500 */
    let continua = new Subject()

    continua.next(true)
    
    acompanhamentoUpload
      .takeUntil(continua)
      .subscribe(() => {
        this.progressoPublicacao = 'andamento'
         console.log(this.progresso.status)
         console.log(this.progresso.estado)

        this.porcentagemUpload = 0 //Math.round((this.progresso.estado.bytesTransferred / this.progresso.estado.totalBytes)*100) 
        if(this.progresso.status === 'concluido') {
          this.progressoPublicacao = 'concluido'
          // emitir um evento do componente parent ( home )
          this.atualizarTimeLine.emit()
          continua.next(false)
        }          
        
        })
      }
   

  public preparaImagemUpload(event: Event): void {
    this.imagem = (<HTMLInputElement>event.target).files
  }

}

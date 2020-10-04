import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertasService } from '../ofertas.services';
import { Oferta } from '../shared/oferta.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Observer } from 'rxjs/Observer';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [OfertasService]
})
export class OfertaComponent implements OnInit, OnDestroy {

  private tempoObervableSubscription: Subscription
  private meuObservableTesteSubscription: Subscription

  public oferta: Oferta

  constructor(private route: ActivatedRoute, private ofertasService: OfertasService) { }

  ngOnInit() {
    this.ofertasService.getOfertaPorId(this.route.snapshot.params['id'])
    .then((oferta: Oferta) => {
      this.oferta = oferta
    })

    // snapshot não atualiza com modificações
    //console.log('Id teste: ', this.route.snapshot.params['id'])
    
    // subscribe sim atualiza com modificações
    //this.route.params.subscribe((parametro : any ) => {console.log(parametro)})

    // this.route.params.subscribe((parametro : any ) => {console.log(parametro)},
    //   (erro: any) => console.log(erro),
    //   () => console.log('processamento foi classificado com concluído!')
    //   )

    // let tempo = Observable.interval(2000)

    // this.tempoObervableSubscription = tempo.subscribe((intervalo: number) => {
    //   console.log(intervalo)
    // })

    // // observable (observável) | observer.error finaliza o evento informando o erro | observer.complete finaliza o evento com sucesso
    // let meuObservableTeste = Observable.create((observer: Observer<number>) => {
    //   observer.next(1)
    //   observer.next(5)
    //   // observer.error('algum erro foi encontrado')
    //   observer.complete()
    // })

    // // observable (observador)
    // this.meuObservableTesteSubscription = meuObservableTeste.subscribe(
    //   (resultado: number) => console.log(resultado + 10),
    //   (erro: string) => console.log(erro),
    //   () => console.log('Stem de eventos finalizada')
    //   )
    

  }

  ngOnDestroy() {
    // this.meuObservableTesteSubscription.unsubscribe()
    // this.tempoObervableSubscription.unsubscribe()
  }

}

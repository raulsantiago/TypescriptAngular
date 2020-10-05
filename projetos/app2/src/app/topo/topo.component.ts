import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.services';
import { Observable } from 'rxjs/Observable';
import { Oferta } from '../shared/oferta.model';
import { Subject } from 'rxjs/Subject';
// import 'rxjs/add/operator/switchMap';
// import 'rxjs/add/operator/debounceTime';
// import 'rxjs/add/operator/distinctUntilChanged';
// import 'rxjs/add/observable/of';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [OfertasService]
})
export class TopoComponent implements OnInit {

  public ofertas: Observable<Oferta[]>
  
  private subjectPesquisa: Subject<string> = new Subject<string>()

  constructor(private ofertasService: OfertasService) { }

  ngOnInit() {
    this.ofertas = this.subjectPesquisa //retorno Oferta[]
    .debounceTime(1000) // executa a ação do switchMap após 1 segundo
    .distinctUntilChanged() // fazer pesquisas distintas
    .switchMap((termo: string) => {
      if(termo.trim() === ''){
        // retorna um observable de array de ertas vazio
        return Observable.of<Oferta[]>([])
      }
      return this.ofertasService.pesquisaOfertas(termo)
    })
    .catch((err: any) => {      
      return Observable.of<Oferta[]>([])
    })    
  }

  public pesquisa(termoDaBusca: string): void{    
    this.subjectPesquisa.next(termoDaBusca)
    
    // this.ofertas = this.ofertasService.pesquisaOfertas(termoDaBusca)
    // this.ofertas.subscribe(
    //   (ofertas: Oferta[]) => console.log(ofertas),
    //   (erro: any) => console.log('Erro status: ', erro.status),
    //   () => console.log('Evento completo!')      
    // )
  }

  public limpaPesquisa(): void {
    this.subjectPesquisa.next('')
  }

}

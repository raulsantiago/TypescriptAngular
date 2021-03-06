import { Component, OnInit } from '@angular/core';
import { OrdemCompraService } from '../ordem-compra.service';
import { Pedido } from '../shared/pedido.model';


@Component({
  selector: 'verboso-app-ordem-compra',
  templateUrl: './verboso-ordem-compra.component.html',
  styleUrls: ['./verboso-ordem-compra.component.css'],
  providers: [OrdemCompraService]
})
export class OrdemCompraComponent implements OnInit {

  public idPedidoCompra: number

  // Pedido
  public pedido: Pedido = new Pedido('', '', '', '')


  public endereco: string = ''
  public numero: string = ''
  public complemento: string = ''
  public formaPagamento: string = ''

  // controles de validação dos campos
  public enderecoValido: boolean
  public numeroValido: boolean
  public complementoValido: boolean
  public formaPagamentoValido: boolean

  //estados primitivos dos campos (pristine)
  public enderecoEstadoPrimitivo: boolean = true
  public numeroEstadoPrimitivo: boolean = true
  public complementoEstadoPrimitivo: boolean = true
  public formaPagamentoEstadoPrimitivo: boolean = true

  //controlar o botão
  public formEstado: string = 'disabled'

  constructor(private ordemCompraService: OrdemCompraService) { }

  ngOnInit() {
    //this.ordemCompraService.efetivarCompra()
  }

  public atualizaEndereco(endereco: string): void {
    this.endereco = endereco
    this.enderecoEstadoPrimitivo = false
    // validação se a string é maior que 3
    if(this.endereco.length > 3){
      this.enderecoValido = true
    } else {
      this.enderecoValido = false
    }
    this.habilitaForm()
  }

  public atualizaNumero(numero: string): void {
    this.numero = numero
    this.numeroEstadoPrimitivo = false
    // validação se o numero é maior que 0
    if(this.numero.length >= 1){
      this.numeroValido = true
    } else {
      this.numeroValido = false
    }
    this.habilitaForm()
  }

  public atualizaComplemento(complemento: string): void {
    this.complemento = complemento
    this.complementoEstadoPrimitivo = false
    // validação se a string é maior que 0
    if(this.complemento.length > 0) {
      this.complementoValido = true
    } else {
      this.complementoValido = false
    }
    this.habilitaForm()
  }

  public atualizaFormaPagamento(formaPagamento: string): void {
    this.formaPagamento = formaPagamento
    this.formaPagamentoEstadoPrimitivo = false
    // validação se a string é maior que 0
    if(this.formaPagamento.length > 0){
      this.formaPagamentoValido = true
    } else {
      this.formaPagamentoValido = false
    }
    this.habilitaForm()
  }

  public habilitaForm(): void {
    if(this.enderecoValido === true && this.numeroValido === true && this.complementoValido === true && this.formaPagamentoValido === true){ 
      this.formEstado = ''
    } else {
      this.formEstado = 'disabled'
    }
  }

  public confirmarCompra(): void {
    this.pedido.endereco = this.endereco
    this.pedido.numero = this.numero    
    this.pedido.complemento = this.complemento
    this.pedido.formaPagamento = this.formaPagamento
    this.ordemCompraService.efetivarCompra(this.pedido)
    .subscribe((idPedido: number) => {
      this.idPedidoCompra = idPedido
    })
  }

}

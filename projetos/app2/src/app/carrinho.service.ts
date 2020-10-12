import { ItemCarrinho } from './shared/item-carrinho.model'
import { Oferta } from './shared/oferta.model'

class CarrinhoService {
    public itens: ItemCarrinho[] = []

    public exibirItens(): ItemCarrinho[]{
        return this.itens
    }

    public incluirItem(oferta: Oferta): void {
        let itemCarrinho: ItemCarrinho = new ItemCarrinho(
            oferta.id,
            oferta.imagens[0],
            oferta.titulo,
            oferta.descricao_oferta,
            oferta.valor,
            1
        )

        // verificar se o item em questão já não existe dentro do this.itens
        let itemCarrinhoEncontrado = this.itens.find((item: ItemCarrinho) => item.id === itemCarrinho.id)
        if(itemCarrinhoEncontrado){
            itemCarrinhoEncontrado.quantidade += 1
        } else {
            this.itens.push(itemCarrinho)    
        }        
        //console.log('Item carrinho no service: ', itemCarrinho)
    }

    public totalCarrinhoCompras(): number {
        let total: number = 0
        this.itens.map((item: ItemCarrinho) => {
            total = total + (item.valor * item.quantidade)
        })
        return total
    }

    public adicionarQuantidade(itemCarrinho: ItemCarrinho): void {
        //  incrementa quantidade 
        let itemCarrinhoEncontrado = this.itens.find((item: ItemCarrinho) => item.id === itemCarrinho.id)
        if(itemCarrinhoEncontrado){
            itemCarrinhoEncontrado.quantidade += 1
        }       
    }

    public removerQuantidade(itemCarrinho: ItemCarrinho): void {
        //  decrementa quantidade 
        let itemCarrinhoEncontrado = this.itens.find((item: ItemCarrinho) => item.id === itemCarrinho.id)
        if(itemCarrinhoEncontrado){
            itemCarrinhoEncontrado.quantidade -= 1
            // Remove do carrinho caso chegue a zero
            if(itemCarrinhoEncontrado.quantidade === 0){
                this.itens.splice(this.itens.indexOf(itemCarrinhoEncontrado), 1)
            }            

            // Não remove do carrinho, mas não permite negativar a quantidade
            // if(itemCarrinhoEncontrado.quantidade !== 0){
            //     itemCarrinhoEncontrado.quantidade -= 1
            // }            
        }       
    }

    public limparCarrinho(): void {
        this.itens = []
    }


}

export { CarrinhoService }
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'descricaoReduzida'
})
export class DescricaoReduzida implements PipeTransform {
    transform(texto: string, truncarEm: number){
        if(texto.length > truncarEm) {
            return texto.substr(0, truncarEm) + '...'
        }
        return texto
    }

}
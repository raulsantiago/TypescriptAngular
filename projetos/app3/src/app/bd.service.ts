import * as firebase from "firebase";

export class Bd {
    // Metodo de inserir no BD 
    public publicar(publicacao: any): void {
        firebase.database().ref(`publicacoes/${btoa(publicacao.email)}`)
        .push( { titulo: publicacao.titulo })
        //console.log(publicacao)
    }
}
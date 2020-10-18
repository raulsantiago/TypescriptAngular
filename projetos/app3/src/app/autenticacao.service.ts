import { Usuario } from './acesso/usuario.model';
import * as firebase from 'firebase';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class Autenticacao {

    public token_id: string

    constructor(private router: Router) { }

    public cadastrarUsuario(usuario: Usuario): Promise<any> {
        //console.log('Serviço :', usuario)

        return firebase.auth().createUserWithEmailAndPassword(usuario.email, usuario.senha)
        .then((resposta: any) => {

            //remover a senha do objeto usuario
            delete usuario.senha

            //registrando dados complementares do usuario no path email na base 64
            firebase.database().ref(`usuario_detalhe/${btoa(usuario.email)}`)
                .set(usuario)

            console.log(btoa(usuario.email))
        })
        .catch((erro: Error) => {
            console.log(erro)
        })
    }

    // Com Token JWT usando LocalStorage do Brownse
    public autenticar(email: string, senha: string): void {    
        firebase.auth().signInWithEmailAndPassword(email, senha)
        .then((resposta: any) => {
            firebase.auth().currentUser.getIdToken()
            .then((idToken: string) => {
                this.token_id = idToken
                localStorage.setItem('idToken', idToken)
                this.router.navigate(['/home'])
            })
        })
        .catch((error: Error) =>  console.log(error))
    }

    // logica para verficar e manter autenticacao com token e localSorage
    public autenticado(): boolean {

        if(this.token_id === undefined && localStorage.getItem('idToken') !== null){
            this.token_id = localStorage.getItem('idToken')
        }

        // Redireciona para pagina raiz se entrar em alguma página sem autenticacao
        if(this.token_id === undefined){
            this.router.navigate(['/'])
        }

        return this.token_id !== undefined

        // muito verboso
        // let temToken: boolean = true
        // if(this.token_id !== undefined){
        //     temToken = true
        // } else {
        //     temToken = false
        // }
        // return temToken
    }

    // Fazendo logout removendo o token JTW e Firebase e chamando página raiz
    public sair(): void {
        firebase.auth().signOut()
        .then(() => {
            localStorage.removeItem('idToken')
            this.token_id = undefined
            this.router.navigate(['/'])
        })
        
    }

}
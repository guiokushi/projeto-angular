import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  numero: number
  
  nome: string;
  esconderCaixa = true;

  escolher(): void{
    this.numero = Math.floor(Math.random() * 100) + 1
  }

  alterarNome(event){
    console.log(event.target.value)
    this.nome = event.target.value;

  }

  adicionar(nomeInput): void{
    this.nome = nomeInput.value
    this.esconderCaixa = false
    // console.log(nomeInput)
    // console.log("Adicionando...")
  }
  
  // lancarDado(): number{
  //   return Math.floor(Math.random() * 6) + 1;
  // }
  // nome = "Ana"
  // idade = 17
}

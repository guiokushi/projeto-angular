import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  pessoas = [
    { nome: 'José', idade: 18 },
    { nome: 'Maria', idade: 22 }
  ]

  onAdicionarPessoa(pessoa) {
    this.pessoas = [pessoa, ...this.pessoas];
  }


  textoBotao = "Esconder";
  esconder = false;

  alterarExibicao() {
    this.textoBotao = this.esconder ? "Exibir" : "Esconder";
    this.esconder = !this.esconder;
  }
}

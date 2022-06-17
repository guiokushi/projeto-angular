import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nome;
  esconderCaixa = true;
  produto;

  alterarNome(evento) {
    console.log(evento.target.value);
    this.nome = evento.target.value;
  }
  adicionar(nome) {
    console.log(nome);
    this.nome = nome;
    console.log("Adicionando...");
    this.esconderCaixa = false;
  }

  alterarProduto(produtoInput) {
    this.produto = "Novo Produto: " + produtoInput.value;
  }
  /*nome = "Ana";
  idade = 20;

  lancarDado() {
    return Math.floor(Math.random() * 6) + 1;
  }*/
}

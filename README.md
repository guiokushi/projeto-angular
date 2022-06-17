Conceitos
####################################################################################################################
Template = HTML

Componente - Estamos adicionando novos elementos(extensões) para o HTML padrão,
eles funcionam criando pequenas caixas de conteudo que podem ser utilizadas em outras paginas HTML

Modules - Caixas que guardam coisas (componentes etc.)
-É necessário registrar o componente em um module para o componente funcionar


Renderização mutuamente exclusiva: Ou um evento acontece ou o outro acontece

####################################################################################################################
Componente
NO componente tem que importar o @Component(){}
para utilizar é só utilizar o nome que está no selector do componente.
ex: Selector: "meu-componente"

no HTML que quiser utilizar digite:

<meu-componente><meu-componente>

e importe o componente dentro do appModules.ts na parte de import{} from e no
@NgModule

Para gerar um component pelo CLI escreva ng generate component pasta/nome-component --skip-tests


Tornar classe publica -> export class

Selector = utilizado para dar nome ao componente para que ele possa ser utilizado

Propriedade Template X TemplateURL:
-Template: Nele é possível escrever diretamente o HTML recomendavel apenas para casos simples
-TemplateURL: acessa o HTML de um arquivo

Propriedade Style x StyleURLs USAR SEMPRE [] pois é uma lista:
-Style: ele é possível escrever diretamente o CSS recomendavel apenas para casos simples
-StyleURL: Acessa um arquivo CSS

Desativar o strict do typescript com false no tsconfig.json para pode tipar estaticamente


ngOnInit(): Ele faz o ciclo de inicialização do componente, utilizado para inicializar variaveis/serviços

ex:

ngOnInit(): void{
	this.clientes = this.clienteService.getClientes()
}



####################################################################################################################
Diretiva Estrutural
Construção do Angular com capacidade de mudar a estrutura da arvore dom
*ngIf ="nome" 
Então, a diretiva ngIf é usada para incluir ou excluir um elemento da interface do usuário, incluindo os elementos filhos do elemento. A marcação excluída por uma diretiva ngIf não será invisível, apenas não estará no DOM.

*ngfor = "let cliente of Clientes"

####################################################################################################################
A pilha MEAN

MongoDB - utiliza NoSQL
Express - Utilizado para facilitar o codigo para tratamento de requisições HTTP
Angular - Framework Front End
NodeJS - executa codigo javascript do lado do servidor

####################################################################################################################
Talvez seja util

 button normalmente da um submit por padrão mas se eu quiser executar js antes disso é só colocar o type dele como button
---------------------------------------------------------------------------------------
Single source of truth

Basically, when you want to implement 'single source of truth', you want to make your components controllable.

By default input fields are not controllable which means it will render data from DOM, not state.

However, if you make your input listen to state instead (therefore making it controllable) it will not be able to change its value unless you change state.

First effect you will notice is that, once you added value property to it, when you type in, nothing will change. And if you add onChange method that changes state, it will be fully controllable component that only listens to one source of truth; state, instead of DOM events.

-----------------------------------------------------------------------------------------------

Quando for devolver uma lista de clientes nao utilizar o return this.clientes pois ele quebra o encapsulamento e qualquer um pode ter acesso a uma variavel privada
UTILIZAR:
return [...this.clientes]

PUSH - é utilizado para incluir um elemento a uma lista no ultimo espaço

--------------------------------------------------------------------------------------
Media Query
As consultas de mídia são um recurso do CSS 3 que permite a renderização de conteúdo para se adaptar a diferentes condições, como a resolução da tela.
--------------------------------------------------------------------------------------
Adcionando informações a uma lista

Spread ... - pode ser utilizado para extrair todos os elementos de uma lista

clientes = []
onClienteAdicionado(cliente){
	this.clientes = [cliente, ...this.clientes]
}


####################################################################################################################
Variavel de referencia de template: 
uma variavel faz referencia a um elemento do template , ex um input 
entao fica assim a referencia utilizando o # :

<input id=... type=... class=... placeholder=.... #nomeInput>

utilizando a variavel que criamos
<button (click)="adcionar(nomeInput)" type="button"> </button>

no componente
adicionar(nomeInput) void{
	this.nome = nomeInput.value
}
####################################################################################################################
Data Binding - https://github.com/professorbossini/20221_maua_ecm252_angular_data_binding
Interpolação - {{}}

Pode ser utrilizado para:

1- mostrar uma variavel do componente

2- resolver expressões ex: {{ 1 + 1 }}

3- é possivel chamar funções ex: {{ 1 + 1 + retornaUm()}} vai ser igual a 3

4- Ele resolve expressões booleanas {{cusoAngular && getCurtirCurso}} se os dois forem verdadeiros ele retorna verdadeiro

------------------------------------------------------------------------------------------------------------------------

Property Binding - []

Utilizamos em uma propriedade de uma tag, estamos linkando uma variavel a uma propriedade da tag
ex: <img [src] = "urlImage">

Podemos utilizar no hidden de uma div tambem:

No componente

nome: String;
esconderCaixa = true;

No HTML
<div class=... [hidden] = "esconderCaixa">
	{{nome}}
</div>
A caixa não aparece a menos que o esconderCaixa seja false

No componente
adicionar(nomeInput) void{
	this.nome = nomeInput.value
	this.esconderCaixa = false
}

------------------------------------------------------------------------------------------------------------------------
Event Binding - ()

Utilizamos para escutar eventos que acontecem no template ou acionar metodos

<button (click) = "botaoClicado()">

<input type="text" (keyup) = "onKeyUp($event)"  (keyup.enter) = "salvarValor($event.target.value)">
Para se referir a um evento utilizamos o $event

Ou utilizamos a Variavel de referencia de template para substituir os event.target:
<input type="text" (keyup) = "onKeyUp($event)" (keyup.enter) = "salvarValor(campoInput.value)" #campoInput>
 
EventEmitter() = vai transmitir um evento que aconteceu para outros elemetos como se fosse um trigger
ex: 
@Output()
clienteAdicionado() = new EventEmitter()


dentro de uma função usamos o seguinte:

onAdcionarCliente(){
	const cliente = {
		nome: this.nome
		fone: this.fone
		email: this.email
	}
	this.clienteAdicionado.emit(cliente)
}

e no HTML:
<app-cliente-inserir(clienteAdcionado) = "onClienteAdcionado($event)">

no componente desse html 

onClienteAdcionado(cliente){
	console.log(cliente)
}


@Output() - torna publica a existencia de um elemento do component.ts

@Input() - Ele recebe algo como parametro, outros elementos enxergam ele como entrada de dados
-----------------------------------------------------------------------------------------------------------------------
Two Way Data Binding - [(ngModel)]

Utilizamos para que o Componente e o Template se mantenham atualizados

<input type="text" [(ngModel) = "nome"]>

É necessário fazer a importação do FormsModule para usar o two way

ex:

NO hTML
<div class="container my-3 border p-3">
    <div class="form-group">
        <label for="numeroInput">Escolha um número</label>
        <input type="number" class="form-control" id="numeroInput" placeholder="Escolha um número" [(ngModel)]="numero">
    </div>   
    <div class="alert alert-primary mt-3 p-3 text-center">{{numero}}</div>
    <button (click)="escolher()" type="button" class="btn btn-primary">Escolher para mim</button>
</div>
No Componente

numero: number

escolher(): void{
    this.numero = Math.floor(Math.random() * 100) + 1
  }

####################################################################################################################

Podemos utilizar a extensao Subject de rxjs
ex:
private listaClientesAtualizada = new Subject<Cliente[]>();


adicionarCliente (nome: string, fone: string, email: string): void{
	const cliente: Cliente = {
		nome, fone, email
	}
	this.clientes.push(cliente)
	this.listaClientesAtualizada.next([...this.clientes])
}

getListaClientesAtualizada(){
	return this.listaClientesAtualizada.asObservable()
}

no componente:
O componente se registra pra receber uma copia da lista
ngOnInit(): void{
	this.clientes = this.clienteService.getClientes()
	this.clienteService.getListaClientesAtualizada().subscribe(cliente:Cliente[]) =>{
		this.clientes = clientes
	}
}

####################################################################################################################

Template driven form -
 de forma geral ele vai construir um objeto json apartir dos dados inseridos sem precisar do two way data bind em cada campo

Template driven form MUITO MELHOR que two way data bind

para substituir um two way data bind

antes:

<input type="text" [(ngModel)] = "nome">

Depois:

<input type="text" name = "nome" ngModel>


esse nome não é o mesmo nome que a gente usava pro two way data bind
ele é uma referencia pro form fazer o json

o form fica assim:

<form (submit) = "onADicionarCliente(clienteForm)" #clienteForm = "ngForm">


Utilizar required para tornar um campo obrigatorio
se o form for invalido 
if(form.invalid) return

####################################################################################################################


Dependencia

Componente -> Serviço -> Backend

Uma classe que quer utilizar um service DEPENDE de uma instancia desse service


Injeção de dependencia
O construtor da classe é responsavel por fazer a injeção de dependencia. Ele "constroi" aquela dependencia para voce utilizar no componente
INCLUIR ELE NO APPMODULES providers

Exemplo:
Serviço - ClienteService

no componente

constructor(clienteService : ClienteService()){}

Lembrando que essa variavel clienteService é local então é necessario criar uma variavel no componente para receber essa variavel local

clienteService: ClienteService
constructor(clienteService : ClienteService()){
	this.clienteService = clienteService
}
 
OU

Pra poupar tempo pode ser inserido diretamento no parametro
constructor(private clienteService : ClienteService()){}

É necessario dizer ao angular quem providenciara as informações(provider)

no Modules do componente e escreve na parte de ngMOdules providers e coloca o serviço
![10](https://user-images.githubusercontent.com/87087019/174397210-4c5c8883-5d5e-469a-a49e-776fa63a203a.png)
![1](https://user-images.githubusercontent.com/87087019/174397213-7d51bce7-03db-44c5-a12b-a797eb3fd3e8.png)
![2](https://user-images.githubusercontent.com/87087019/174397214-4277f116-218c-430b-a0c2-7c8a34b86005.png)
![3](https://user-images.githubusercontent.com/87087019/174397218-86ac6e21-ac7a-4ce5-8ca9-ca8b4077bbc2.png)
![4](https://user-images.githubusercontent.com/87087019/174397220-a00a3d13-f20f-4629-909d-a2276d3b3997.png)
![5](https://user-images.githubusercontent.com/87087019/174397222-b71bfdd7-ab32-4585-9c38-10ecff8df793.png)
![6](https://user-images.githubusercontent.com/87087019/174397225-1f235de2-abe4-4ec1-a94c-55edecb556fc.png)
![7](https://user-images.githubusercontent.com/87087019/174397228-ce68aac4-577d-4866-b79e-c9c9918c1069.png)
![8](https://user-images.githubusercontent.com/87087019/174397230-8bb6de39-3009-42a7-9aec-ee746532e1e7.png)
![9](https://user-images.githubusercontent.com/87087019/174397233-b1a03c1d-73dc-43b2-ae3c-4fd3536f33dc.png)

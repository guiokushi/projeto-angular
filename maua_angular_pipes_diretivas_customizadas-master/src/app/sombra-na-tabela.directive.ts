import { Directive, ElementRef, Renderer2, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appSombraNaTabela]',
  exportAs: 'sombraNoComponente'
})
export class SombraNaTabelaDirective {

  @HostBinding('style.boxShadow') sombra: string;
  @Input('appSombraNaTabela') sombraEntrada: string;

  /*constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) {


  }*/


  @HostListener('mouseover') atribuirSombra() {
    /*this.renderer.setStyle(
      this.elementRef.nativeElement,
      'box-shadow',
      '10px 10px'
    );*/
    this.sombra = this.sombraEntrada;
  }

  @HostListener('mouseleave') removerSombra() {
    /*this.renderer.removeStyle(
      this.elementRef.nativeElement,
      'box-shadow'
    )*/
    this.sombra = '';
  }

}

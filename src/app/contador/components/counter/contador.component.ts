import { Component } from "@angular/core";


@Component({
    selector: 'app-contador',
    template: `
        <h1>{{title}}</h1>
        <h1>La base es: <strong>5</strong> </h1>

        <button (click)="acomular(base)"> + 1</button>
        <span>{{numero}}</span>
        <button (click)="acomular(-base)"> - 1</button>
    `
})
export class ContadorComponent {
    title = 'contador app';
    numero: number = 10;
    base: number = 5;
  
  
    acomular(valor: number){
      this.numero += valor;
    }

}
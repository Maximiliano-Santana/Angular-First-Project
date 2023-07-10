import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <p>Counter: {{counter}}</p>
    <button (click)="sumar(+1)">Sum</button>
    <button (click)="sumar(-1)">Res</button>
  `,
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {
    public title:string = 'Hola mundo'; //se esta declarando como public para poder asignar el tipado a la variable, termina siendo lo mismo pero es mejor practica.
  public counter:number = 10;

  public increaser:number = 1;

  sumar(value:number):void{
    this.counter+=value;
  }
}

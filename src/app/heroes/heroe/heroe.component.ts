import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.scss']
})
export class HeroeComponent {

  public name:string = 'Light Wizard';
  public power:string = 'light'
  public heal:number = 1000;
  public damage:number = 150;
  public toggleButton:boolean = true;
  
  get CapitalizedName():string{
    return this.name.toUpperCase();
  }

  addHeal():number{
    return this.heal+=50;
  }

  changeHero():void{
    this.name = 'FIre Wizard';
    this.toggleButton = false
  }

  changePower():void{
    this.power = 'Fire balls';

  }
  
}


// //let numero:number = 5;
// let numero:any = 5;
// numero = 'uno';

// class Auto{ 
// //Encapsulamiento
// //Las variables se hacen privadas para no poder acceder a ellas desde fuera y solo se puedan cambiar a traves de metodos que escribimos dentro de la clase, de esta manera condicionamos el tipado de los atributos de nuetros objetos. De ser de tipo publico, podria cambiarlo desde fuera con 'Auto.name = 5, lo que inferiria con mis tipados. 
//   private name:string; 
//   private speed:number;

//   constructor(name:string, speed:number){
//     this.name = name;
//     this.speed = speed;
//   }

//   getName():string{
//     return this.name;
//   }
  
//   setName(name:string):void{
//     this.name = name;
//   }
// }
// //Herencia
// //La palabra reservada extends, hace que la clase Autobot herede todas las propiedades de un Auto
// class Autobot extends Auto{
//   private faction:string; 

//   constructor(name:string, speed:number, faction:string){
// //Super es el metodo que ya viene dentro de las clases para decir que todo lo que se envie se utilice en el constructor del padre.
//     super(name, speed);
//     this.faction = faction;
//   }
//   getFaction():string{
//     return this.faction;
//   }
//   changeFaction(faction:string){
//     this.faction = faction;
//   }

// //Polimorfismo
// //Es la capacidad de que algo se comporte de manera diferente de acuerdo al contexto de donde este este ubicado.
//   override getName():string{ //Override se utiliza para sobre escribir la clase que tiene el mismo nombre
//     return super.getName();
//   }
// }

// const Ferrari = new Auto('F24K', 500);
// const McLaren = new Auto('JKL', 800);
// const Bubulbi = new Autobot('Bubulbi', 500, 'Autobot');

// //Shape
// //Los diguiente funciona aunque Bubulbi sea un autobot, tambien puede ser considerado como una instancia de clase Auto. Ya que tienen la misma forma
// const arrayAutos:Auto[] = [Ferrari, Bubulbi, McLaren];

// for (const auto of arrayAutos){
//   console.log(auto.getName());
// }

// console.log(Bubulbi.getFaction());

// //Por el mismo concepto anterior esto es posible, algo que en js no lo es
// class Persona {
//   nombre:string;
//   edad:number;
//   constructor(nombre:string, edad:number){
//     this.nombre = nombre;
//     this.edad = edad;
//   }
// }

// class Persona2 {
//   nombre:string;
//   edad:number;
//   constructor(nombre:string, edad:number){
//     this.nombre = nombre;
//     this.edad = edad;
//   }
// }

// const Max = new Persona('Max', 21);
// const Steve = new Persona2('Max', 21);

// console.log(Max == Steve);

// //Class vs Interface


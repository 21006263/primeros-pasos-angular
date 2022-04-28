import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
 
})
export class ListadoComponent {

 heroe: string[] = ['Goku', 'Vegueta', 'Gohan', 'Trunk', 'Bulma'];

heroeBorrado: string = '';

 borrarHertoe() {
  //  this.heroe = [];
 this.heroeBorrado = this.heroe.shift() || '';
   //console.log(hereoeBorrado)
 }

}

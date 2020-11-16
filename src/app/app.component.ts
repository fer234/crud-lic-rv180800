import { Component } from '@angular/core';
import { Persona } from './models/persona';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
// arreglo del tipo Persona, que tiene 4 registro almacenados
personaArray: Persona[] = [
{id:1, name:"Ricardo", lastname:"Moya",age:28},
{id:2, name:"Ramon",lastname:"Invarato",age:28},
{id:3, name:"Pepe", lastname:"Moreno",age:40},
{id:4, name:"Paco Pepe", lastname:"Gonzalez",age:32}
]
//atributo selecPersona del tipo Persona, por lo tanto, puede almacenar un objeto
selectedPersona: Persona = {id:0, name:'', lastname:'', age:0 };
//un método que no retorna nada “void”, recibe como parámetro una variable del
//tipo Persona, para ser asignada al atributo selectPersona y poder ser mostrado
// en pantalla.
openForEdit(persona: Persona): void
{
this.selectedPersona = persona;
}
//método que no retorna nada “void”, NO recibe parámetro, pero realiza dos
//operaciones agregar / editar, si no hay registro seleccionado se guarda,
//de lo contrario limpia el atributo selectedPersona en pantalla. [(ngModel)]
addOrEdit(): void
{
if(this.selectedPersona.id === 0) // Guardar registro
{
this.selectedPersona.id = this.personaArray.length + 1;
this.personaArray.push(this.selectedPersona);
}
this.selectedPersona = {id:0, name: '', lastname: '', age:0 };
}
//método que no retorna nada “void”, NO recibe parámetro, elimina del arreglo el
//registro, pero antes muestra en pantalla un confirmar, se recorre el arreglo
//realizando un “filter” para no almacenar el registro seleccionado en el nuevo
//arreglo “PersonaArray” , por eso ocupados el operador “!=” y luego limpiamos
//el registro seleccionado.
delete(): void
{
if(confirm('¿Esta seguro de elimiar el Registro?'))
{
this.personaArray = this.personaArray.filter(x => x != this.selectedPersona);
this.selectedPersona = {id:0, name: '', lastname: '', age:0 };
}
}
}

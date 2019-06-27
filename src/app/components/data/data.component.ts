import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: []
})
export class DataComponent
{
  forma: FormGroup;

  constructor()
  {
    this.forma = new FormGroup(
      {
        nombre: new FormControl('Dosh', [Validators.required, Validators.minLength(5)]),
        apellido: new FormControl('', Validators.required),
        email: new FormControl('', [Validators.required, Validators.email])
      }
    );
  }

  guardarCambios()
  {
    console.log(this.forma.value);
    console.log(this.forma);
  }
}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from "@angular/forms";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: []
})
export class DataComponent
{
  forma: FormGroup;

  usuario = {
    nombreCompleto:
    {
      nombre: "David",
      apellido: "Murillo"
    },
    email: "dmz866@hotmail.com",
    pasatiempos: ["Gym", "Correr", "Leer"]
  };

  constructor()
  {
    this.forma = new FormGroup(
      {
        nombreCompleto: new FormGroup(
        {
          nombre: new FormControl('Dosh', [Validators.required, Validators.minLength(5)]),
          apellido: new FormControl('', [Validators.required, this.noMurillo])
        }),
        email: new FormControl('', [Validators.required, Validators.email]),
        pasatiempos: new FormArray(
        [
          new FormControl('Correr', Validators.required)
        ]),
        username: new FormControl('', Validators.required, this.existeUsuario),
        password1: new FormControl('', Validators.required),
        password2: new FormControl()
      }
    );

    //this.forma.setValue(this.usuario);
    this.forma.controls['password2'].setValidators([Validators.required, this.noIgual.bind(this.forma)]);

    this.forma.get('nombreCompleto.nombre').valueChanges.subscribe( data => { console.log(data); } );
    this.forma.controls['username'].statusChanges.subscribe(data => { console.log(data); });
  }

  noIgual(control: FormControl): { [s: string]: boolean }
  {
    //this is forma cuz of bind
    return { noigual: (control.value !== this.controls['password1'].value) };
  }

  guardarCambios()
  {
    console.log(this.forma.value);
    console.log(this.forma);
    /* this.forma.reset(
      {
        nombreCompleto:
        {
          nombre: "",
          apellido: ""
        },
        email: ""
      }); */

    //this.forma.controls['nombreCompleto'].controls['nombre'].setValue("DOsh");
  }

  agregarPasatiempo()
  {
    (<FormArray>this.forma.controls['pasatiempos']).push(
      new FormControl("Leer", Validators.required)
    );
  }

  noMurillo(control: FormControl): {[s: string]: boolean}
  {
    return  { noMurillo: (control.value === "Murillo") };
  }

  existeUsuario(control: FormControl): Promise<any> | Observable<any>
  {
    const promesa = new Promise(
      (resolve, reject) =>
      {
        setTimeout( () =>
        {
            resolve({ existeusuario: (control.value === "strider") });
        }, 3000);
      }
    );

    return promesa;
  }
}

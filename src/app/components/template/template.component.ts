import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles:
  [
    `
      .ng-invalid.ng-touched:not(form)
      {
        border: 1px solid red;
      }
    `
  ]
})
export class TemplateComponent implements OnInit
{
  usuario =
  {
    nombre: null,
    apellido: null,
    email: null,
    pais: "EC",
    sexo: "H",
    acepta: false
   };

   listaPaises =
   [
     {
       codigo: "EC",
       nombre: "Ecuador"
     },
     {
      codigo: "CRI",
      nombre: "Costa Rica"
    }
   ];

   listaSexo = ["H", "M"];

  constructor() { }

  ngOnInit() {
  }

  guardar(formu)
  {
    console.log("formu");
  }

}

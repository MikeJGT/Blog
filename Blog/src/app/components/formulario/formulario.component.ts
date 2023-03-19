import { Component } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  formulario: FormGroup;

  constructor(private postSv: PostsService, private rute: Router) {
    this.formulario = new FormGroup({
      titulo: new FormControl(null, [
        Validators.required
      ]),
      texto: new FormControl(),
      autor: new FormControl(),
      imagen: new FormControl(),
      fecha: new FormControl(),
      categoria: new FormControl(null, [
        Validators.required
      ]),
    });
  }

  onSubmit() {
    if (this.formulario.valid) {
      console.log('datos', this.formulario.value)
      this.postSv.create(this.formulario.value)
      this.rute.navigate(['/posts'])
    } else {
      alert('Faltan campos por rellenar.')
    }
  }

  checkError(campo: string, validator: string) {
    return this.formulario.get(campo)?.hasError(validator) && this.formulario.get(campo)?.touched
  }
}

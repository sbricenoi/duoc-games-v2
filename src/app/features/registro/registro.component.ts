import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  standalone: false,
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  registroForm: FormGroup;
  mensaje: string = '';

  constructor(private fb: FormBuilder) {
    this.registroForm = this.fb.group({
      nombreCompleto: ['', Validators.required],
      nombreUsuario: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      contrasena: ['', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(18),
        Validators.pattern(/^(?=.*[A-Z])(?=.*\d).+$/)
      ]],
      repetirContrasena: ['', Validators.required],
      fechaNacimiento: ['', [Validators.required, this.mayorDeTreceValidator]],
      direccion: ['']
    }, { validators: this.passwordsIguales });
  }

  // Validador personalizado para mayor de 13 años
  mayorDeTreceValidator(control: any) {
    if (!control.value) return null;
    const fecha = new Date(control.value);
    const hoy = new Date();
    const edad = hoy.getFullYear() - fecha.getFullYear();
    if (
      edad > 13 ||
      (edad === 13 && hoy.getMonth() > fecha.getMonth()) ||
      (edad === 13 && hoy.getMonth() === fecha.getMonth() && hoy.getDate() >= fecha.getDate())
    ) {
      return null;
    }
    return { menorDeTrece: true };
  }

  // Validador para contraseñas iguales
  passwordsIguales(group: FormGroup) {
    const pass = group.get('contrasena')?.value;
    const rep = group.get('repetirContrasena')?.value;
    return pass === rep ? null : { passwordsNoCoinciden: true };
  }

  onSubmit() {
    if (this.registroForm.valid) {
      this.mensaje = '¡Registro exitoso!';
      this.registroForm.reset();
    } else {
      this.mensaje = 'Por favor, corrige los errores antes de enviar.';
      this.registroForm.markAllAsTouched();
    }
  }

  limpiarFormulario() {
    this.registroForm.reset();
    this.mensaje = '';
  }
} 
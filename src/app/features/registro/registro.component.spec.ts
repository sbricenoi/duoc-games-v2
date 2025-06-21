import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RegistroComponent } from './registro.component';

describe('RegistroComponent', () => {
  let component: RegistroComponent;
  let fixture: ComponentFixture<RegistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistroComponent],
      imports: [ReactiveFormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(RegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with an invalid form', () => {
    expect(component.registroForm.valid).toBeFalsy();
  });

  it('should validate required fields', () => {
    const form = component.registroForm;
    
    // Verificar que todos los campos requeridos estén marcados como inválidos
    expect(form.get('nombreCompleto')?.valid).toBeFalsy();
    expect(form.get('nombreUsuario')?.valid).toBeFalsy();
    expect(form.get('correo')?.valid).toBeFalsy();
    expect(form.get('contrasena')?.valid).toBeFalsy();
    expect(form.get('repetirContrasena')?.valid).toBeFalsy();
    expect(form.get('fechaNacimiento')?.valid).toBeFalsy();
    
    // El campo dirección debe ser válido ya que es opcional
    expect(form.get('direccion')?.valid).toBeTruthy();
  });

  it('should validate email format', () => {
    const emailControl = component.registroForm.get('correo');
    
    // Email inválido
    emailControl?.setValue('invalid-email');
    expect(emailControl?.valid).toBeFalsy();
    
    // Email válido
    emailControl?.setValue('test@example.com');
    expect(emailControl?.valid).toBeTruthy();
  });

  it('should validate password requirements', () => {
    const passwordControl = component.registroForm.get('contrasena');
    
    // Contraseña muy corta
    passwordControl?.setValue('Abc1');
    expect(passwordControl?.valid).toBeFalsy();
    
    // Contraseña muy larga
    passwordControl?.setValue('Abc1234567890123456789');
    expect(passwordControl?.valid).toBeFalsy();
    
    // Contraseña sin mayúscula
    passwordControl?.setValue('abc123456');
    expect(passwordControl?.valid).toBeFalsy();
    
    // Contraseña sin número
    passwordControl?.setValue('Abcdefgh');
    expect(passwordControl?.valid).toBeFalsy();
    
    // Contraseña válida
    passwordControl?.setValue('Abc123456');
    expect(passwordControl?.valid).toBeTruthy();
  });

  it('should validate password confirmation', () => {
    const form = component.registroForm;
    
    // Establecer contraseñas diferentes
    form.patchValue({
      contrasena: 'Abc123456',
      repetirContrasena: 'Different123'
    });
    
    expect(form.hasError('passwordsNoCoinciden')).toBeTruthy();
    
    // Establecer contraseñas iguales
    form.patchValue({
      contrasena: 'Abc123456',
      repetirContrasena: 'Abc123456'
    });
    
    expect(form.hasError('passwordsNoCoinciden')).toBeFalsy();
  });

  it('should validate age requirement (13 years old)', () => {
    const fechaControl = component.registroForm.get('fechaNacimiento');
    const hoy = new Date();
    
    // Usuario menor de 13 años
    const fechaMenor = new Date(hoy.getFullYear() - 12, hoy.getMonth(), hoy.getDate());
    fechaControl?.setValue(fechaMenor.toISOString().split('T')[0]);
    expect(fechaControl?.hasError('menorDeTrece')).toBeTruthy();
    
    // Usuario de exactamente 13 años
    const fechaExacta = new Date(hoy.getFullYear() - 13, hoy.getMonth(), hoy.getDate());
    fechaControl?.setValue(fechaExacta.toISOString().split('T')[0]);
    expect(fechaControl?.hasError('menorDeTrece')).toBeFalsy();
    
    // Usuario mayor de 13 años
    const fechaMayor = new Date(hoy.getFullYear() - 14, hoy.getMonth(), hoy.getDate());
    fechaControl?.setValue(fechaMayor.toISOString().split('T')[0]);
    expect(fechaControl?.hasError('menorDeTrece')).toBeFalsy();
  });

  it('should make form valid with all correct data', () => {
    const form = component.registroForm;
    const fechaValida = new Date();
    fechaValida.setFullYear(fechaValida.getFullYear() - 18); // Usuario de 18 años
    
    form.patchValue({
      nombreCompleto: 'Juan Pérez',
      nombreUsuario: 'juanperez',
      correo: 'juan@example.com',
      contrasena: 'Abc123456',
      repetirContrasena: 'Abc123456',
      fechaNacimiento: fechaValida.toISOString().split('T')[0],
      direccion: 'Calle Principal 123'
    });
    
    expect(form.valid).toBeTruthy();
  });

  it('should handle form submission correctly', () => {
    const form = component.registroForm;
    const fechaValida = new Date();
    fechaValida.setFullYear(fechaValida.getFullYear() - 18);
    
    // Llenar formulario con datos válidos
    form.patchValue({
      nombreCompleto: 'María García',
      nombreUsuario: 'mariagarcia',
      correo: 'maria@example.com',
      contrasena: 'Maria123456',
      repetirContrasena: 'Maria123456',
      fechaNacimiento: fechaValida.toISOString().split('T')[0],
      direccion: 'Avenida Central 456'
    });
    
    // Simular envío del formulario
    component.onSubmit();
    
    // Verificar mensaje de éxito
    expect(component.mensaje).toBe('¡Registro exitoso!');
  });

  it('should handle form submission with invalid data', () => {
    // Intentar enviar formulario vacío
    component.onSubmit();
    
    // Verificar mensaje de error
    expect(component.mensaje).toBe('Por favor, corrige los errores antes de enviar.');
  });

  it('should clear form correctly', () => {
    const form = component.registroForm;
    
    // Llenar formulario
    form.patchValue({
      nombreCompleto: 'Test User',
      correo: 'test@example.com'
    });
    
    // Establecer mensaje
    component.mensaje = 'Test message';
    
    // Limpiar formulario
    component.limpiarFormulario();
    
    // Verificar que se haya limpiado
    expect(form.get('nombreCompleto')?.value).toBe(null);
    expect(form.get('correo')?.value).toBe(null);
    expect(component.mensaje).toBe('');
  });

  it('should mark all fields as touched on invalid submission', () => {
    const form = component.registroForm;
    
    // Intentar enviar formulario inválido
    component.onSubmit();
    
    // Verificar que todos los campos estén marcados como touched
    expect(form.get('nombreCompleto')?.touched).toBeTruthy();
    expect(form.get('nombreUsuario')?.touched).toBeTruthy();
    expect(form.get('correo')?.touched).toBeTruthy();
    expect(form.get('contrasena')?.touched).toBeTruthy();
    expect(form.get('repetirContrasena')?.touched).toBeTruthy();
    expect(form.get('fechaNacimiento')?.touched).toBeTruthy();
  });
});

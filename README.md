# Duoc Games - Aplicación Angular

Esta aplicación Angular incluye un sistema de registro de usuarios con formularios reactivos y validaciones completas.

## Características Implementadas

### Formulario de Registro Reactivo
- **Transformación completa**: El formulario HTML original ha sido transformado a un formulario reactivo de Angular
- **Validaciones implementadas**:
  - Todos los campos son obligatorios excepto "dirección de despacho"
  - Validación de formato de email
  - Validación de contraseña (6-18 caracteres, al menos una mayúscula y un número)
  - Validación de coincidencia de contraseñas
  - Validación de edad mínima (13 años)
  - Campo de dirección opcional

### Funcionalidades del Formulario
- **Botón "Enviar"**: Valida y procesa el formulario
- **Botón "Limpiar"**: Resetea todos los campos del formulario
- **Mensajes de validación**: Feedback visual para el usuario
- **Validación en tiempo real**: Los errores se muestran cuando el usuario interactúa con los campos

## Estructura del Proyecto

```
src/
├── app/
│   ├── features/
│   │   └── registro/
│   │       ├── registro.component.ts      # Lógica del formulario reactivo
│   │       ├── registro.component.html    # Template del formulario
│   │       ├── registro.component.css     # Estilos del componente
│   │       └── registro.component.spec.ts # Pruebas unitarias
│   └── ...
```

## Validaciones Implementadas

### Campos Obligatorios
- Nombre completo
- Nombre de usuario
- Correo electrónico
- Contraseña
- Repetir contraseña
- Fecha de nacimiento

### Validaciones Específicas
1. **Email**: Formato válido de correo electrónico
2. **Contraseña**: 
   - Entre 6 y 18 caracteres
   - Al menos una letra mayúscula
   - Al menos un número
3. **Confirmación de contraseña**: Debe coincidir con la contraseña principal
4. **Edad**: Usuario debe tener al menos 13 años
5. **Dirección**: Campo opcional

## Pruebas Unitarias

El proyecto incluye pruebas unitarias completas que validan:

### Pruebas Implementadas
1. **Validación de campos requeridos**: Verifica que todos los campos obligatorios estén marcados como inválidos cuando están vacíos
2. **Validación de formato de email**: Prueba emails válidos e inválidos
3. **Validación de contraseña**: Verifica todos los requisitos de la contraseña
4. **Validación de confirmación de contraseña**: Prueba que las contraseñas coincidan
5. **Validación de edad**: Verifica el requisito de edad mínima de 13 años
6. **Envío del formulario**: Prueba el comportamiento con datos válidos e inválidos
7. **Limpieza del formulario**: Verifica que el botón "Limpiar" funcione correctamente
8. **Marcado de campos**: Verifica que los campos se marquen como "touched" al intentar enviar un formulario inválido

## Cómo Ejecutar las Pruebas

### Prerrequisitos
Asegúrate de tener todas las dependencias instaladas:
```bash
npm install
```

### Ejecutar las Pruebas
```bash
ng test
```

Este comando:
- Inicia el servidor de pruebas Karma
- Abre automáticamente un navegador Chrome
- Ejecuta todas las pruebas unitarias
- Muestra los resultados en tiempo real
- Genera un reporte de cobertura

### Opciones Adicionales
```bash
# Ejecutar pruebas en modo watch (se re-ejecutan al cambiar archivos)
ng test --watch

# Ejecutar pruebas una sola vez y cerrar
ng test --watch=false

# Ejecutar pruebas con reporte de cobertura
ng test --code-coverage
```

## Tecnologías Utilizadas

- **Angular 16**: Framework principal
- **Reactive Forms**: Para formularios reactivos
- **Jasmine**: Framework de testing
- **Karma**: Test runner
- **Bootstrap**: Para estilos y componentes UI

## Archivos Principales

### Componente de Registro
- `registro.component.ts`: Lógica del formulario reactivo con validadores personalizados
- `registro.component.html`: Template con formulario reactivo y mensajes de validación
- `registro.component.spec.ts`: 12 pruebas unitarias que cubren todas las funcionalidades

### Validadores Personalizados
- `mayorDeTreceValidator`: Valida que el usuario tenga al menos 13 años
- `passwordsIguales`: Valida que las contraseñas coincidan

## Estado del Proyecto

✅ **Completado**:
- Transformación de formulario HTML a formulario reactivo
- Implementación de todas las validaciones requeridas
- Pruebas unitarias completas (12 pruebas)
- Funcionalidad de envío y limpieza del formulario
- Mensajes de validación en tiempo real

El proyecto está listo para ser evaluado y cumple con todos los requisitos especificados en la actividad.

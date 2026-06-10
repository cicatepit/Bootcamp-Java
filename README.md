# WOOLET

## JAVA FULL STACK BOOTCAMP

### Módulo 2 — Fundamentos del Desarrollo Frontend

WOOLET es una billetera digital desarrollada como proyecto final del módulo.

El proyecto implementa una interfaz frontend dinámica para la gestión de activos financieros, permitiendo autenticación de usuarios, consulta de saldo, administración de destinatarios, simulación de transferencias y visualización de movimientos, utilizando exclusivamente tecnologías frontend.

La aplicación fue diseñada con una arquitectura orientada a componentes reutilizables para facilitar su evolución hacia tecnologías posteriores del plan formativo, particularmente Spring Boot, Thymeleaf y arquitecturas MVC.

---

# Objetivos del proyecto

* Implementar una interfaz de billetera digital funcional.
* Aplicar HTML semántico y buenas prácticas de accesibilidad.
* Implementar estilos responsivos mediante CSS.
* Incorporar Bootstrap para componentes visuales.
* Utilizar JavaScript para la lógica de negocio.
* Incorporar jQuery para manipulación del DOM y animaciones.
* Gestionar persistencia local mediante localStorage.
* Mantener una estructura escalable orientada a componentes.

---

# Funcionalidades

## Autenticación

* Inicio de sesión mediante credenciales.
* Validación de usuario y contraseña.
* Gestión de sesión activa.
* Cierre de sesión seguro.

## Estado de cuenta

* Visualización de saldo disponible.
* Información resumida del usuario.
* Información bancaria para compartir.

## Transferencias

* Simulación de transferencia de fondos.
* Validación de monto.
* Verificación de saldo disponible.
* Confirmación previa de transferencia.
* Registro automático de movimientos.

## Destinatarios

* Visualización de destinatarios registrados.
* Consulta de información completa.
* Agregar nuevos destinatarios.
* Validación de datos ingresados.
* Eliminación de destinatarios.

## Perfil

* Visualización de información personal.
* Edición de datos del usuario.
* Validación de formatos.
* Persistencia local.

## Historial de movimientos

* Registro cronológico de operaciones.
* Fecha y hora de cada movimiento.
* Descripción de operación.
* Resultado de operación.
* Balance acumulado periódico.

---

# Tecnologías utilizadas

## Frontend

* HTML5
* CSS3
* JavaScript ES6
* Bootstrap 5
* jQuery

## Persistencia

* localStorage

## Control de versiones

* Git
* GitHub

---

# Arquitectura del proyecto

La aplicación fue organizada siguiendo una lógica orientada a componentes reutilizables.

```text
WOOLET
│
├── login.html
├── home.html
├── transferir.html
├── destinatarios.html
├── perfil.html
├── salir.html
│
├── style.css
├── script.js
│
└── assets/
    └── woolet-logo.png
```

---

# Estructura visual

Cada pantalla interna utiliza una distribución de tres paneles:

```text
┌──────────────┬──────────────────────┬──────────────────────┐
│   SIDEBAR    │     MAIN CONTENT     │     DETAIL PANEL     │
└──────────────┴──────────────────────┴──────────────────────┘
```

## Sidebar

Contiene:

* Logo WOOLET
* Navegación principal
* Cierre de sesión

## Main Content

Contiene:

* Información principal de cada módulo.

## Detail Panel

Contiene:

* Formularios.
* Confirmaciones.
* Resúmenes.
* Ediciones.
* Información contextual.

Los paneles secundarios utilizan animaciones de aparición y desaparición mediante jQuery.

---

# Persistencia local

La aplicación almacena información utilizando localStorage.

## Claves utilizadas

```javascript
wooletUser
wooletBalance
wooletTransactions
wooletRecipients
wooletProfile
```

---

# Credenciales de demostración

```text
Usuario: user
Contraseña: pass
```

---

# Responsividad

La aplicación fue diseñada para adaptarse a:

* Escritorio.
* Notebook.
* Tablet.
* Dispositivos móviles.

Utilizando:

* Flexbox.
* Media Queries.
* Componentes Bootstrap.

---

# Evolución futura

La estructura actual fue diseñada para facilitar la migración a tecnologías backend.

Próximas tecnologías compatibles:

* Java
* Spring Boot
* Spring MVC
* Thymeleaf
* JPA/Hibernate
* MySQL/PostgreSQL
* APIs REST

La separación entre vistas, estilos y lógica permite reutilizar gran parte de la interfaz actual como capa de presentación dentro de una futura aplicación Spring.

---

# Autor

Proyecto desarrollado por Camilo Catepillán Tessi como integración de conocimientos frontend.


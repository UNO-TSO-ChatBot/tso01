# UNO Sede Informática — Landing Page

Landing page institucional para la **Sede Informática de la Universidad Nacional del Oeste (UNO)**,
desarrollada como trabajo práctico de la materia **TSO 2026**.

---

## Tecnologías utilizadas

| Tecnología | Versión | Uso |
|---|---|---|
| React | 19 | UI por componentes |
| Vite | 6 | Bundler y servidor de desarrollo |
| Bootstrap | 5.3.2 | Utilidades de layout (CDN) |
| Bootstrap Icons | 1.11.3 | Íconos (CDN) |
| Google Fonts (Inter) | — | Tipografía (CDN) |

---

## Estructura del proyecto

```
tso01/
├── public/
│   └── images/           # Imágenes estáticas (logo, fotos)
├── src/
│   ├── components/
│   │   ├── Header.jsx    # Navbar fija con menú hamburguesa en mobile
│   │   ├── Inicio.jsx    # Hero: título, subtítulo, CTA y cards de carreras
│   │   ├── Carreras.jsx  # Grid 2×2 de carreras con modal de detalle
│   │   ├── Facultad.jsx  # Foto + texto institucional con estadísticas
│   │   ├── Experiencias.jsx  # Carrusel de testimonios de alumnos
│   │   ├── Contacto.jsx  # Información de contacto institucional
│   │   ├── Footer.jsx    # Pie de página fijo
│   │   └── Chatbot.jsx   # Widget de chat flotante
│   ├── App.jsx           # Componente raíz — orquesta todas las secciones
│   ├── index.css         # Estilos globales y de todos los componentes
│   └── main.jsx          # Punto de entrada de React
├── index.html            # HTML base con fuentes y Bootstrap por CDN
├── vite.config.js        # Configuración de Vite
└── package.json
```

---

## Paleta de colores

| Variable | Color | Uso |
|---|---|---|
| `--color-primary` | `#0D9488` (teal) | Navbar, footer, títulos, íconos |
| `--color-secondary` | `#0369A1` (sky blue) | Botones outline, bordes |
| `--color-accent` | `#BE185D` (rosa) | Botones de acción principal (CTA) |
| `--color-bg` | `#F8FFFE` | Fondo general |

---

## Cómo correr el proyecto

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo con hot reload
npm run dev

# Build de producción
npm run build

# Preview del build
npm run preview
```

El servidor de desarrollo corre en `http://localhost:5173` por defecto.

---

## Flujo de estado

- El estado del **modal de carreras** (`modal`) vive en `App.jsx` y se pasa como prop a `<Inicio>` y `<Carreras>`.
- Cuando el usuario hace click en una card de `<Inicio>`, se navega a `#carreras` y se abre el modal de esa carrera.
- El estado del **chatbot** y el **carrusel de testimonios** es local a sus componentes (`Chatbot.jsx` y `Experiencias.jsx`).

---

## Ramas

- `main` — versión estable (no modificar, antes crear una rama y Requerir un pull request antes de fusionar)
- `feature/ejemplo` — rama de desarrollo para actualizaciones

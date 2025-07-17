# 🔹 Dashboard React - Proyecto UI/UX Profesional para Reto Técnico

Este proyecto es una solución profesional y funcional para el reto de selección como **Desarrolladora de Software Junior**.  
Construido con **React + Vite**, el dashboard presenta una arquitectura clara, diseño moderno, acceso a datos en tiempo real mediante una API pública y una experiencia de usuario accesible y responsive.

---

## 🔧 Tecnologías utilizadas

- ⚛️ React + Vite
- 🎨 CSS modularizado por componente
- 🧠 React Hooks (`useState`, `useEffect`)
- 🌐 Fetch API para llamadas a servicios externos
- 📦 Estructura desacoplada y escalable por componentes

---

## 📅 Funcionalidades implementadas

- ✅ Gráfico de torta con distribución de datos (por marca)
- ✅ Gráfico de líneas con volumen de ventas
- ✅ Panel de KPIs y resumen de pagos
- ✅ Tabla dinámica de usuarios
- ✅ Filtros por país y estado (activo/inactivo)
- ✅ Estados de carga y error
- ✅ Layout completamente responsive
- ✅ Accesibilidad (uso de `aria-label`, contraste, navegación con teclado)

---

## 📊 Estructura del proyecto

```bash
src/
├── assets/               # Recursos estáticos
├── components/           # Componentes UI reutilizables (Navbar, Filtros, etc)
├── pages/
│   └── ResumenPanel/     # Panel principal con gráficos y KPIs
├── UserTable/            # Tabla dinámica con filtros
├── App.jsx               # Enrutamiento principal
└── main.jsx              # Punto de entrada al DOM

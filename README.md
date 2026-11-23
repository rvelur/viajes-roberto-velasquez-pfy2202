# Horizonte Travel - Agencia de Viajes (`viajes-roberto-velasquez-pfy2202`)

Aplicación web desarrollada en **React** para la actividad sumativa de la Semana 5 de **Desarrollo Frontend II (PFY2202)** en Duoc UC. Permite explorar destinos turísticos internacionales, consultar vuelos y hoteles disponibles y armar un itinerario de viaje con cálculo dinámico de presupuesto.

## Enlace de Despliegue (GitHub Pages)
- **URL Pública:** https://rvelur.github.io/viajes-roberto-velasquez-pfy2202

---

## Tecnologías y Versiones Utilizadas

- **React:** `19.x` (`react` y `react-dom`)
- **React Router DOM (`HashRouter`):** `7.x` — Navegación SPA fluida entre la vista de destinos (`/`) y el detalle por destino (`/destino/:id`).
- **Apollo Client:** `^3.11.0` y **GraphQL:** `16.x` — Ejecución de consultas `gql` mediante `useQuery` para obtener vuelos y hoteles por destino.
- **Mock Service Worker (MSW):** `2.15.0` — Backend mock que intercepta simultáneamente peticiones **REST** (`GET /api/destinos`) y **GraphQL** (`GetDestinationDetails`).
- **GitHub Pages (`gh-pages`):** Despliegue de la aplicación en producción.
- **HTML5, CSS3 y JavaScript (ES6+):** Diseño responsivo adaptable a escritorio, tablet y móvil mediante CSS Grid, Flexbox y Media Queries.

---

## Funcionalidades Principales

1. **Exploración y Filtrado de Destinos (API REST Mock):**
   - Listado dinámico de destinos turísticos con país, descripción, fotografía y actividades populares.
   - Filtro interactivo por país mediante manejo de estado con `useState` y `useEffect`.
2. **Consulta de Vuelos y Hoteles por Destino (API GraphQL Mock):**
   - Visualización detallada de aerolíneas, rutas, fechas, precios y disponibilidad de asientos.
   - Visualización de hoteles con categoría, fechas disponibles, tarifa por noche y habitaciones disponibles.
3. **Planificador de Itinerario y Validaciones:**
   - Selección interactiva de vuelo y hotel con cálculo automático del presupuesto total en USD.
   - Validación en tiempo real del campo de cantidad de noches (impide valores menores a `1` y muestra alerta si el campo queda vacío).

---

## Estructura del Proyecto

```text
viajes-roberto-velasquez-pfy2202/
├── public/
│   ├── index.html
│   └── mockServiceWorker.js       # Service Worker de MSW
├── src/
│   ├── components/
│   │   ├── DestinationCard.js     # Tarjeta reutilizable de destino (REST)
│   │   ├── FlightCard.js          # Tarjeta reutilizable de vuelo (GraphQL)
│   │   ├── HotelCard.js           # Tarjeta reutilizable de hotel (GraphQL)
│   │   ├── Navbar.js              # Barra de navegación principal
│   │   └── TripSummary.js         # Resumen de itinerario y cálculo de presupuesto
│   ├── graphql/
│   │   └── queries.js             # Definición de consultas GraphQL
│   ├── mocks/
│   │   ├── browser.js             # Configuración del worker MSW
│   │   └── handlers.js            # Manejadores REST y GraphQL simulados
│   ├── pages/
│   │   ├── HomePage.js            # Listado y filtro de destinos (REST)
│   │   └── DestinationDetail.js   # Detalle de vuelos y hoteles por destino (GraphQL)
│   ├── App.css                    # Estilos globales y responsivos
│   ├── App.js                     # Configuración de rutas con React Router
│   └── index.js                   # Inicialización de MSW y ApolloProvider
├── package.json
└── README.md
```

---

## Requisitos Previos, Instalación y Ejecución

### Requisitos Previos
- **Node.js** (v18 o superior) y **npm** instalados en el sistema.

### Pasos para Instalar y Ejecutar en Local

1. **Clonar el repositorio:**
   ```bash
   git clone [https://github.com/rvelur/viajes-roberto-velasquez-pfy2202.git](https://github.com/rvelur/viajes-roberto-velasquez-pfy2202.git)
   ```

2. **Ingresar a la carpeta del proyecto:**
   ```bash
   cd viajes-roberto-velasquez-pfy2202
   ```

3. **Instalar todas las dependencias:**
   ```bash
   npm install
   ```

4. **Ejecutar la aplicación en modo desarrollo:**
   ```bash
   npm start
   ```
   La aplicación se abrirá automáticamente en el navegador en `http://localhost:3000/viajes-roberto-velasquez-pfy2202/`.

5. **Generar compilación de producción (opcional):**
   ```bash
   npm run build
   ```

---

## Pruebas de Compatibilidad en Navegadores

Se realizaron pruebas funcionales, de intercepción de peticiones (REST/GraphQL con MSW) y de diseño responsivo en los siguientes navegadores:

- **Google Chrome:** Carga correcta de destinos vía REST, consulta de vuelos y hoteles vía GraphQL, validación de cantidad de noches y adaptación responsiva en móvil y escritorio sin errores en consola.
- **Microsoft Edge:** Navegación fluida entre rutas con React Router, filtrado por país y cálculo dinámico del presupuesto operativos.
- **Mozilla Firefox:** Registro correcto del Service Worker (`mockServiceWorker.js`), renderizado de componentes y confirmación de itinerario sin fallos.
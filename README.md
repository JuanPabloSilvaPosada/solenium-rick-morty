# Rick and Morty Explorer

Prueba técnica para buscar y visualizar personajes de la serie Rick and Morty usando la [Rick and Morty API](https://rickandmortyapi.com/documentation/#rest).

## Índice

1. [Instalación](#instalación)
2. [Estructura del proyecto](#estructura-del-proyecto)
3. [Funcionalidades](#funcionalidades)
   - [HU01 - Búsqueda de personajes](#hu01---búsqueda-de-personajes)
   - [HU02 - Visualización de información](#hu02---visualización-de-información)
   - [HU03 - Historial de búsquedas](#hu03---historial-de-búsquedas)
   - [HU04 - Diseño y usabilidad](#hu04---diseño-y-usabilidad)

## Instalación

Pasos para instalar y ejecutar el proyecto localmente:

1. Clona este repositorio en tu máquina local:
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   ```

2. Navega al directorio del proyecto:
   ```bash
   cd solenium-rick-morty
   ```

3. Instala las dependencias utilizando `pnpm`:
   ```bash
   pnpm install
   ```

4. Inicia el servidor de desarrollo:
   ```bash
   pnpm dev
   ```

5. Abre tu navegador y ve a `http://localhost:5173` para ver la aplicación en funcionamiento.

## Estructura del proyecto

### Explicación de las carpetas principales

- **`src/`**: Código fuente de la aplicación.
  - **`components/`**: Componentes reutilizables: tarjetas de personaje, formulario de búsqueda, lista, loader y mensajes de error.
  - **`hooks/`**: Hook personalizado para la lógica de búsqueda y estado de personajes.
  - **`services/`**: Servicio para las peticiones a la Rick and Morty API.
  - **`assets/`**: Fuentes y recursos estáticos.
- **`public/`**: Archivos estáticos servidos directamente (favicon).
- **Configuraciones**: `vite.config.js`, `eslint.config.js` para las herramientas del proyecto.

## Funcionalidades

### HU01 - Búsqueda de personajes

Como usuario, quiero buscar un personaje por nombre para ver su información:

- Campo de entrada y botón de búsqueda. ✅
- Manejo de errores si el nombre no existe. ✅
- Indicador de carga durante la búsqueda. ✅
- Reintentos automáticos hasta un maximo de 3 ante error 429 (demasiadas peticiones). ✅

### HU02 - Visualización de información

Como usuario, quiero ver la información principal del personaje encontrado:

- **Nombre** ✅
- **Imagen** ✅
- **Especie** ✅
- **Estado (Alive, Dead, Unknown)** ✅
- **Origen** ✅

### HU03 - Historial de búsquedas

Como usuario, quiero ver mis últimas búsquedas para acceder rápidamente a
ellas:

- Lista con las últimas 3 búsquedas guardadas en `localStorage`. ✅
- Volver a consultar haciendo clic en una búsqueda reciente. ✅

### HU04 - Diseño y usabilidad

Como usuario, quiero que la aplicación se vea bien en distintos dispositivos y sea fácil de usar.

- Diseño responsive (grid adaptable según ancho de pantalla). ✅
- Paginación con botones Anterior / Siguiente (solo visibles cuando aplica). ✅
- Estilos con variables CSS y fuentes temáticas. ✅

## Posibles mejoras

- **Animaciones:** Transiciones y micro-interacciones al cargar resultados, cambiar de página o al hacer hover en tarjetas y botones (por ejemplo con CSS o una librería como Framer Motion).
- **Modo claro y oscuro:** Tema según la preferencia del usuario (`prefers-color-scheme`) o un selector manual, guardando la elección en `localStorage`.
- **Búsqueda al escribir:** Ejecutar la búsqueda mientras el usuario escribe en el input, usando **debounce** para no hacer una petición por cada tecla.
- **Filtros:** Permitir filtrar por especie, estado, género, ubicación, etc., para que el usuario afine los resultados a su gusto.
- **Ampliar con toda la API:** Integrar el resto de endpoints (episodios, ubicaciones) y mostrar en el detalle del personaje toda la información que ofrece la API (episodios en los que aparece, ubicación actual, etc.).
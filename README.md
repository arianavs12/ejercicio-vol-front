# Movie Explorer App

Esta aplicación web utiliza React para mostrar una lista de películas populares obtenidas a través de la API de The Movie Database (TMDb). También permite buscar películas por nombre y ver detalles como reseñas, fecha de lanzamiento, género y duración.

## Requerimientos

- [Node.js](https://nodejs.org/) instalado en tu máquina.

## Configuración

1. **Clona este repositorio en tu máquina local:**

   ```bash
   git clone https://github.com/tu-usuario/tu-repositorio.git
   cd tu-repositorio
2.- **Instala las dependencias del servidor (Node.js):**

npm install
cd server

3. **Configura la API Key de TMDb:**

Regístrate en TMDb para obtener una API Key.

Crea un archivo .env en el directorio server y agrega tu API Key:

.env

API_KEY= your_api_key_here
API_URL= api_url
API_LANGUAGE='idioma'
PORT = puerto_preferente

4. **Inicia tu servidor**
   
   node index.js
5. **Abre una nueva terminal para clonar el repositorio frontend**
6. **Clona el repositorio como se menciona arriba**
7. ** ingresa al repositorio en tu carpeta e instala las dependencias**
  npm install
8. **Ejecuta la aplicación**
    npm start

Ejecuta la aplicación en el modo de desarrollo.\
Abre [http://localhost:3000](http://localhost:3000) para verlo en tu navegador.

La página se recargará cuando realices cambios.

Uso
La página principal muestra una lista de películas populares.
Usa el buscador para encontrar detalles sobre una película específica.
Haz clic en una película para ver más detalles como reseña, fecha de lanzamiento, género y duración.

Ducumentación de TMBD
https://www.themoviedb.org
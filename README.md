# Juego de dados

<strong> Enlace de la aplicación desplegada:
<a href="https://juego-dados-production.up.railway.app/home">JUEGO DE DADOS</a></strong>

Esta aplicación es un pequeño proyecto construido para mi portafolio que consiste en un juego de dados en la cual participaran varios jugadores generados automáticamente por el algoritmo. El usuario podrá elegir el numero de jugadores que estarán en la partida, asignarles un nombre y posteriormente, iniciar el juego. Cada jugador hará una "tirada de dado" y el que obtenga el mayor puntaje sera el ganador. En caso de empate el sistema escogerá un ganador al azar.

## <strong>Tecnologías, instalación de dependencias y ejecución del programa:</strong>

- <strong>Principales tecnologías y herramientas usadas en el proyecto:</strong>

  - ExpressJS
  - MongoDB
  - NodeJS
  - Pug
  - VanillaJS
  - CSS

- <strong>Dependencias de NodeJS:</strong>

  Posterior a la clonación del repositorio realizar los siguientes pasos:

  Para la instalación de dependencias, en la dirección:

        /juego-dados

  se instalaran todas las dependencias ejecutando el comando

        npm install

  Si se desea, se recomienda configurar las variables de entorno MONGODB y PORT en el archivo

        /juego-dados/.env

  En la misma dirección es posible ejecutar el programa escribiendo el comando

        nodemon app

  En el navegador es posible visualizar la pagina de inicio en la siguiente ruta

        localhost:8080/home

## <strong>Experiencia de usuario:</strong> <a name="id9"></a>

La aplicación tiene un funcionamiento bastante simple:

> Ingreso de jugadores:

    ![Ingreso de los usuarios](https://JeffRerinGallery.b-cdn.net/Documentation/Juego%20de%20dados/1.png)

En esta sección se puede seleccionar el numero de jugadores que entraran en el juego, este numero debe estar entre 2 y 12 (incluidos). Una vez seleccionado el numero de jugadores se debe presionar el botón 'generar jugadores'.

> Nombres de los jugadores:

    ![Nombre de los usuarios](https://JeffRerinGallery.b-cdn.net/Documentation/Juego%20de%20dados/2.png)

El sistema automáticamente selecciona un nombre predeterminado a los jugadores, es posible cambiarlos si se desea. Con los nombres establecidos se debe presionar el botón 'iniciar juego' para comenzar la partida.

> Juego:

    ![Inicio del juego](https://JeffRerinGallery.b-cdn.net/Documentation/Juego%20de%20dados/3.png)

En esta sección se muestra el nombre de los jugadores y un botón con la descripción 'iniciar juego' el cual asignara una "tirada de un dado" para cada participante del juego y seleccionara el ganador. En caso de empate el sistema seleccionara un ganador al azar entre los empatados.

> Juego con resultados:

    ![Inicio del juego](https://JeffRerinGallery.b-cdn.net/Documentation/Juego%20de%20dados/4.png)

Una vez terminado el juego se ofrece la opción de iniciar un nuevo juego al usuario.

## <strong>AUTOR</strong>

- Portafolio - <a href="https://www.jeffrm.com.co">jeffrm.com.co</a>
- LinkedIn - <a href="https://www.linkedin.com/in/jeffrey-rerin/">Jeffrey Rerín</a>

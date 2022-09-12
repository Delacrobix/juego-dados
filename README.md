# Juego de dados

Esta aplicación es un pequeño juego de dados en la cual participaran varios jugadores imaginarios. El usuario podrá elegir el numero de jugadores que estarán en la partida, asignarles un nombre y posteriormente, iniciar el juego. Cada jugador hará una "tirada de dado" y el que obtenga el mayor puntaje sera el ganador. En caso de empate el sistema arrojara un ganador al azar.

### <strong>Tecnologías, instalación de dependencias y ejecución del programa:</strong><a name="id8"></a>

- <strong>Principales tecnologías usadas en el proyecto:</strong>
    - Express.JS
    - MongoDB
    - Node.JS
    - Pug

- <strong>Dependencias de NodeJS:</strong> 

    Para la instalación de dependencias, en la dirección:

        /juego-dados

    se instalaran todas las dependencias ejecutando el comando

        npm install

    En la misma dirección es posible ejecutar el programa escribiendo el comando

        nodemon app

    Ya en el navegador la pagina de inicio es posible visualizarla en la siguiente dirección

        localhost:8080/home

### <strong>Experiencia de usuario:</strong> <a name="id9"></a>

La aplicación tiene un funcionamiento bastante simple:

> Ingreso de jugadores:
    ![Ingreso de los usuarios](https://github.com/Delacrobix/juego-dados/blob/main/images/1.png)

En esta sección se puede seleccionar el numero de jugadores que entraran en el juego, este numero debe estar entre 2 y 12 (incluidos). Una vez seleccionado el numero de jugadores se debe presionar el botón 'generar jugadores'.

> Nombres de los jugadores:
    ![Nombre de los usuarios](https://github.com/Delacrobix/juego-dados/blob/main/images/2.png)

El sistema automáticamente selecciona nombre a los jugadores al azar, es posible cambiarlos si se desea. Con los nombres establecidos se debe presionar el botón 'iniciar juego' para comenzar la partida.

> Juego:
    ![Inicio del juego](https://github.com/Delacrobix/juego-dados/blob/main/images/3.png)

En esta sección se muestra el nombre de los jugadores y un botón con la descripción de 'iniciar juego' el cual asignara una tirada de un dado para cada participante del juego y seleccionara el ganador. En caso de empate el sistema seleccionara un ganador al azar entre los empatados.

> Juego con resultados:
    ![Inicio del juego](https://github.com/Delacrobix/juego-dados/blob/main/images/4.png)

Una vez terminado el juego se ofrece la opción de iniciar un nuevo juego al usuario.
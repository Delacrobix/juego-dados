# juego-dados

### <strong>Tecnologías, instalación de dependencias y ejecución del programa:</strong><a name="id8"></a>

- <strong>Dependencias de NodeJS:</strong> 

    Principales tecnologías usadas en el proyecto:
    - Express.JS
    - MongoDB
    - Node.JS
    - Pug

    Para la instalación de dependencias, en la dirección:

        /juego-dados

    se instalaran todas las dependencias ejecutando el comando

        npm install

    En la misma dirección es posible ejecutar el programa escribiendo el comando

        nodemon app

### <strong>Experiencia de usuario:</strong> <a name="id9"></a>

La aplicación tiene un funcionamiento bastante simple:

> Ingreso de jugadores:
    ![Ingreso de los usuarios](https://github.com/Delacrobix/juego-dados/blob/e28e9f1f16916a26a08d92d9172b84fa303f60a3/images/1.png)

En esta sección se puede seleccionar el numero de jugadores que entraran en el juego, este numero debe estar entre 2 y 12 (incluidos). Una vez seleccionado el numero se debe presionar el botón 'generar jugadores'

> Nombres de los jugadores:
    ![Nombre de los usuarios](https://github.com/Delacrobix/juego-dados/blob/e28e9f1f16916a26a08d92d9172b84fa303f60a3/images/2.png)

El sistema automáticamente selecciona nombre de jugadores al azar pero si se desea cambiar los nombres, es posible hacerlo. Una con los nombres establecidos se debe presionar el botón 'iniciar juego' para comenzar la partida.

> Juego:
    ![Inicio del juego](https://github.com/Delacrobix/juego-dados/blob/e28e9f1f16916a26a08d92d9172b84fa303f60a3/images/3.png)

En esta sección se muestra el nombre de los jugadores y un botón con la descripción de 'iniciar juego' el cual asignara una tirada de un dados para cada participante del juego y seleccionara el ganador. En caso de empate el sistema seleccionara un ganador al azar entre los empatados.

> Juego con resultados:
    ![Inicio del juego](https://github.com/Delacrobix/juego-dados/blob/e28e9f1f16916a26a08d92d9172b84fa303f60a3/images/4.png)

Una vez terminado el juego se ofrece la opción de iniciar un nuevo juego al usuario.
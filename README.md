# juego-dados

### <strong>Instalación de dependencias y ejecución del programa:</strong><a name="id13"></a>

- <strong>Creación de la base de datos: </strong> El script sql que crea la base de datos se encuentra en la direccion

        /contact-book/database.sql

    Se debe ejecutar todo el contenido del archivo 

        database.sql

- <strong>Dependencias maven:</strong> La instalación de las dependencias usadas por java estará gestionada por el archivo

        pom.xlm

    existente en la dirección:

        /5_creacion-crud/contact-book/pom.xml

    Para lograr ejecutar la aplicación en IntelliJ es necesario abrir la carpeta 'contact-book' que se encuentra en la dirección

        /5_creacion-crud/contact-book/

    La aplicación fue hosteada en el puerto 8080 y su dirección raíz es 
        
        localhost:8080

### <strong>Experiencia de usuario:</strong> <a name="id14"></a>

La aplicaron dispone de varios módulos con los cuales el usuario puede interactuar.

> Ingreso de jugadores:
    ![Pantalla inicial, ingreso de contactos](https://github.com/Delacrobix/Sofka-Canteras-2/blob/doc/DOC/images/5/2022-08-07_20h51_11.png)

Aquí el usuario puede ingresar los datos del contacto que desea guardar.

> Error en el ingreso de los datos:
    ![Notificacion de error en el ingreso de un contacto](https://github.com/Delacrobix/Sofka-Canteras-2/blob/doc/DOC/images/5/2022-08-07_20h53_11.png)

Si, por alguna razón el usuario ingresa un dato que el sistema no acepta, se le notificara. En el caso de la imagen anterior, el problema se dio por los espacios entre el numero.

> Notificación de guardado al usuario:
    ![Guardado del contacto en el sistema](https://github.com/Delacrobix/Sofka-Canteras-2/blob/doc/DOC/images/5/2022-08-07_20h53_43.png)

En en caso que toda la información este correcta, el contacto sera guardado en la lista de contactos y podrá ser visualizado en la sección 'lista de contactos'.

> Menu:
    ![Menu de navegacion](https://github.com/Delacrobix/Sofka-Canteras-2/blob/doc/DOC/images/5/2022-08-07_20h51_31.png)

Se encuentra ubicado en la esquina superior izquierda y tiene dos direcciones, la primera 'crear contacto nuevo' dirige a la sección 'crear un contacto', la segunda 'ver listado de contactos' nos lleva a la lista de contactos que el usuario tiene guardado en el sistema.

> Listado de contactos:
    ![Lista de contactos](https://github.com/Delacrobix/Sofka-Canteras-2/blob/doc/DOC/images/5/2022-08-07_20h54_02.png)

En esta sección aparecerán los contactos que el usuario haya guardado en el sistema con un resumen de la información, en caso de que el usuario quiera ver la totalidad de la información debe presionar el botón 'ver detalles' en el contacto respectivo que quiere consultar.

> Detalle del contacto:
    ![Detalle](https://github.com/Delacrobix/Sofka-Canteras-2/blob/doc/DOC/images/5/2022-08-07_20h54_18.png)

Si se presiona el botón 'ver detalles' en la sección lista de contactos el usuario recibirá la información detallada del contacto que quiere consultar.

> Interacción con el sistema:
    ![Botones](https://github.com/Delacrobix/Sofka-Canteras-2/blob/doc/DOC/images/5/2022-08-07_20h54_41.png)

En la sección de detalle, el usuario, aparte de los datos del contacto, tendrá a disposición 3 botones: borrar, editar y regresar. Como es de intuir el botón 'regresar' lleva al usuario a la sección 'lista de contactos', el botón borrar, borra el contacto notificándoselo al usuario y el botón editar carga la sección de editar donde es posible cambiar datos del contacto.

> Borrado:
    ![Botones](https://github.com/Delacrobix/Sofka-Canteras-2/blob/doc/DOC/images/5/2022-08-07_20h55_27.png)

> Sección de editado:
    ![Botones](https://github.com/Delacrobix/Sofka-Canteras-2/blob/doc/DOC/images/5/2022-08-07_20h54_56.png)

> Edición satisfactoria:
    ![edición de contacto](https://github.com/Delacrobix/Sofka-Canteras-2/blob/doc/DOC/images/5/2022-08-07_20h55_05.png)

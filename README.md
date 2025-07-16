Ejercicio grupal 
Contexto

El equipo ha sido asignado para desarrollar una parte de una aplicación de gestión de clientes para una empresa. El objetivo es utilizar arreglos y objetos para almacenar y gestionar la información de los clientes. El sistema debe permitir agregar, editar, eliminar y consultar datos de los clientes, al mismo tiempo que permite realizar operaciones con sus datos de manera eficiente utilizando arreglos y ciclos.

Actividad

En este ejercicio grupal, cada miembro del equipo será responsable de una parte del desarrollo, trabajando en conjunto para implementar el sistema de gestión de clientes. Las tareas incluyen el uso de objetos, arreglos, ciclos y buenas prácticas de programación.

Definir un objeto cliente:

    Crear una estructura de objeto cliente con las siguientes propiedades:

        id (número)

        nombre (string)

        apellido (string)

        email (string)

        telefono (string)

        activo (booleano: true o false)

    Crear un arreglo de objetos cliente:

        Crear un arreglo vacío donde se almacenarán los objetos cliente.

        Definir al menos 3 objetos cliente dentro de este arreglo, cada uno con diferentes datos.

    Acceder a la información de un cliente:

        Usar un ciclo for para iterar sobre el arreglo de clientes y mostrar los datos de cada cliente (nombre, apellido, email, teléfono).

    Contar la cantidad de clientes activos:

        Utilizar un ciclo for o forEach para contar cuántos clientes tienen el valor activo igual a true.

    Agregar un nuevo cliente:

        Crear una función que reciba los datos de un nuevo cliente y lo agregue al arreglo utilizando el método push().

    Eliminar un cliente:

        Crear una función que elimine un cliente por su id utilizando el método splice() para eliminar el objeto del arreglo.

        Asegúrese de que, al eliminar el cliente, el arreglo se actualice correctamente.

    Modificar los datos de un cliente:

        Crear una función que modifique los datos de un cliente existente en el arreglo, por ejemplo, cambiar el teléfono o el estado de activo de false a true.

    Consultar los clientes inactivos:

        Usar el método filter() para crear un nuevo arreglo con los clientes que tienen el campo activo igual a false.

    Álgebra con arreglos y objetos:

        Crear una función que reciba dos arreglos de clientes (por ejemplo, uno con clientes nuevos y otro con clientes existentes) y realice una unión de ambos, agregando los nuevos clientes al arreglo original.

        Crear otra función para filtrar clientes duplicados (con el mismo id), mostrando solo los clientes únicos.

    Ciclos while, for y forEach:

        Usar un ciclo while para simular una operación repetitiva en el sistema, por ejemplo, consultar los datos de un cliente hasta que se ingrese un id válido.

        Usar for o forEach para realizar una consulta masiva de todos los clientes, mostrando los datos solo de aquellos que están activos.

    Combinación de ciclos con if/else:

        Crear una condición dentro de un ciclo que determine si un cliente es activo o inactivo, y mostrar un mensaje diferente dependiendo de su estado.

    Código limpio y buenas prácticas:

        Asegúrese de que el código sea limpio, modular y fácil de entender. Utilicen convenciones claras para nombrar las variables, funciones y objetos.

        Cada miembro del equipo debe documentar su código con comentarios explicativos sobre qué hace cada parte.
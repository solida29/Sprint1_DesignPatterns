# Sprint1_DesignPatterns
Sprint 1-2: Patrones de diseño

https://refactoring.guru/es/design-patterns

## Descripció
Els patrons de disseny són solucions provades a problemes típics i recurrents que ens podem trobar en el desenvolupament d'una aplicació. Davant d'un problema que ens trobem durant el desenvolupament de la nostra aplicació, si podem solucionar-lo amb un patró, l'apliquem en lloc de reinventar la roda.

Aquí et proposem alguns patrons de disseny perquè en triïs un per estudiar-lo en profunditat:
-> Patrons de disseny

La idea sorgeix del fet que, quan hem d'explicar un tema, la forma en què el preparem ens proporciona un coneixement més profund. Aprofita aquesta oportunitat per convertir-te en un expert del patró que triïs i, al mateix temps, ajudar als teus companys i companyes a conèixer-lo a través de la teva explicació.

## Nivell 1
Aquesta entrega consisteix a fer una explicació del patró de disseny escollit i preparar tot el material didàctic que necessitis (readme, prova de concepte, material visual…).

## Objectius
Aprendre i practicar els patrons de disseny.

## Durada: 5 dies

## Lliurament:
- Crea un sol repositori per l'exercici, i envia l'URL perquè siguin revisats.

<hr>

## Patrones de creación (o creacionales)
Los patrones de creación definen cómo se puede crear un objeto. Habitualmente esto incluye aislar los detalles de la creación del objeto, de forma que su código no dependa de los tipos de objeto que hay y, por lo tanto, no deba ser modificado al añadir un nuevo tipo de objeto.

Estos patrones proporcionan mecanismos de creación de objetos que incrementan la flexibilidad y la reutilización del código existente.

## Patron de diseño Factory o Factory Method
También llamado Método fábrica, Constructor virtual
El patrón de diseño Factory (Factory Method) es un patrón de diseño creacional que proporciona una interfaz para crear objetos en una superclase, mientras permite a las subclases alterar el tipo de objetos que se crearán. Está basado en el polimorfismo.

Se utiliza para crear objetos de manera más flexible y desacoplada, lo que mejora la estructura y mantenimiento del código. En esencia, Factory es una "fábrica" de objetos.

El Factory Method se utiliza cuando se quiere ahorrar recursos del sistema mediante la reutilización de objetos existentes en lugar de reconstruirlos cada vez.

### Conceptos de la estructura 
(Ver UML.png)
1. <b>Interfaz de objetos:</b> primero, se define una interfaz de objetos que representa la estructura que compartirán todos los objetos (o productos) que se crearán. Todos los objetos creados tendrán un conjunto de métodos comunes. Sería una superclase.

2. <b>Clases concretas de objetos:</b> son subclases de la Interfaz de objetos que serán los diferentes productos mismos, son distintas implementaciones de la interfaz de producto. Las clases concretas heredan de la interfaz de objetos.

3. <b>Factory (la fábrica):</b> clase abstracta que contiene el "método de creación". Sería otra superclase que definirá métodos abstractos para la fabricación de objetos. Irá "unida" a la Interfaz de objetos: es importante que el tipo de retorno de este método coincida con el. Los métodos abstractos definidos se podrán modificar según las necesidades en las subclases concretas de creación de objetos.

4. <b>Clases concretas para la creación de objetos:</b> proporciona su propia implementación de los métodos definidos por la Factory, son sus subclases. Sobrescriben el Factory Method base, de modo que devuelven un tipo diferente de producto, requerido por el cliente.

5. <b>Cliente (User):</b> es el cliente que necesita los objetos. En lugar de crear objetos directamente utilizando el operador new o llamando a constructores, el cliente utiliza la Factory para obtenerlos. El cliente no necesita conocer las clases concretas ni los detalles de creación. Esto reduce la dependencia y facilita futuras modificaciones.

## Pseudocódigo explicativo del Factory Method
(Ver Factory.js)
- Primero, se define una interfaz llamada "Producto" con un método común "operacion". 
- Luego, se crea dos clases concretas, "ProductoA" y "ProductoB", que extienden la interfaz y proporcionan sus propias implementaciones del método <em>operacion".</em> 
- Después, se crea una clase <em>Factory</em> que contiene un método llamado <em>crearProducto</em> para instanciar las clases concretas según el tipo especificado. 
- Finalmente, el cliente utiliza la fábrica para obtener objetos sin necesidad de conocer las clases concretas.

## Ejemplo aplicado a un programa para una tienda de electrodomésticos
(Ver pseudocódigo electrodomesticosFactory.js)
En este pseudocódigo, primero, se ha creado una interfaz Electrodomestico que declara métodos comunes como encender y apagar, luego están las clases concretas Televisor y Nevera que implementan esta interfaz.

La clase Factory es la fábrica que se utiliza para crear electrodomésticos. El cliente puede utilizar esta fábrica para obtener objetos sin necesidad de conocer las clases concretas, lo que facilita la gestión de diferentes tipos de electrodomésticos en una tienda.

### Pros y contra del Patrón Factory
- Respeta los principios SOLID.
- Flexibilidad: permite crear objetos de manera dinámica según las necesidades del programa.
- Abstracción: Ayuda a ocultar los detalles de implementación, lo que hace que el código sea más fácil de entender y mantener.

- Contra: Puede ser que el código se complique, ya que hay que incorporar una multitud de nuevas subclases para implementar el patrón.

## Conclusión
El patrón Factory es una técnica en la programación orientada a objetos que permite la creación de objetos de manera más flexible y desacoplada. 
En un programa en el que los productos concretos que se crean se desconocen o no se definen con antelación puede ser beneficioso, es un enfoque alternativo para gestionar las subclases.
Además, diseñar siguiendo el enfoque del patrón Factory suele valer para cualquier programa al que se añadan regularmente clases nuevas acordadas, sobre todo si estas clases tienen que pasar por el mismo proceso de creación.
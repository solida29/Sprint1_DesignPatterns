// PSEUDOCODIGO FACTORY METHOD

// Paso 1: interfaz que define los métodos comunes a los objetos
class Producto {
    operacion() {
    }
  }
  
  // Paso 2: clases concretas de los productos que implementan la interfaz
  class ProductoA extends Producto {
    operacion() {
      return "Operación de Producto A";
    }
  }
  
  class ProductoB extends Producto {
    operacion() {
      return "Operación de Producto B";
    }
  }
  
  // Paso 3: creamos la fábrica que se encargará de crear objetos, o creador de objetos.
  class Factory {
    crearProducto(tipo) {
      if (tipo === 'A') {
        return new ProductoA();
      } else if (tipo === 'B') {
        return new ProductoB();
      } else {
        return null;
      }
    }
  }
  
  // Paso 4: ejemplo de uso
  function clienteProducto() {
  const cliente = new Factory();
  const producto = cliente.crearProducto('A');
  console.log(producto.operacion()); // Esto imprimirá "Operación de Producto A"
}
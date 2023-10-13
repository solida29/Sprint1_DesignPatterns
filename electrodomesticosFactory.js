// PSEUDOCODIGO DE LA FABRICA DE ELECTRODOMESTICOS

// Paso 1: Interfaz, clase abstracta de los objetos con los métodos comunes
class Electrodomestico {
    encender() {
      // Método para las clases concretas
    }
    apagar() {
      // Método para las clases concretas
    }
  }
  
  // Paso 2: clases concretas que implementan la interfaz
  class Televisor extends Electrodomestico {
    encender() {
      console.log("Televisor encendido");
    }
    apagar() {
      console.log("Televisor apagado");
    }
  }
  
  class Nevera extends Electrodomestico {
    encender() {
      console.log("Nevera encendida");
    }
    apagar() {
      console.log("Nevera apagada");
    }
  }
  
  // Paso 3: la fábrica (Factory) que se encarga de crear electrodomésticos.
  class Factory {
    crearElectrodomestico(tipo) {
      if (tipo === 'Televisor') {
        return new Televisor();
      } else if (tipo === 'Nevera') {
        return new Nevera();
      } else {
        return null;
      }
    }
  }
  
  // Paso 4: El cliente utiliza la fábrica para obtener electrodomésticos
  const cliente = new Factory();
  const dispositivo = cliente.crearElectrodomestico('Televisor');
  dispositivo.encender();  // Para encender el televisor
  dispositivo.apagar();   // Para apagar el televisor
  
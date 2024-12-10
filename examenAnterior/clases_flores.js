
// Ejemplo 1: Clase Básica para Flores
class Flor {
    constructor(nombre, color, aroma) {
        this.nombre = nombre;
        this.color = color;
        this.aroma = aroma; // Puede ser true o false
    }

    mostrarDetalles() {
        return `La flor ${this.nombre} es de color ${this.color} y ${this.aroma ? "tiene" : "no tiene"} aroma.`;
    }
}

// Crear una instancia
const rosa = new Flor("Rosa", "rojo", true);
console.log(rosa.mostrarDetalles());

const tulipan = new Flor("Tulipán", "amarillo", false);
console.log(tulipan.mostrarDetalles());

// Ejemplo 2: Clase con Métodos Avanzados
class FlorAvanzada {
    constructor(nombre, color, tipo) {
        this.nombre = nombre;
        this.color = color;
        this.tipo = tipo; // Ejemplo: "ornamental", "silvestre"
    }

    cambiarColor(nuevoColor) {
        this.color = nuevoColor;
    }

    esOrnamental() {
        return this.tipo === "ornamental";
    }
}

// Crear una instancia
const girasol = new FlorAvanzada("Girasol", "amarillo", "ornamental");
console.log(girasol.esOrnamental()); // true

girasol.cambiarColor("naranja");
console.log(`El girasol ahora es de color ${girasol.color}.`);

// Ejemplo 3: Herencia de Clases (Flores Especiales)
class FlorEspecial {
    constructor(nombre, color) {
        this.nombre = nombre;
        this.color = color;
    }

    describir() {
        return `Esta es una flor llamada ${this.nombre} de color ${this.color}.`;
    }
}

class FlorExotica extends FlorEspecial {
    constructor(nombre, color, paisDeOrigen) {
        super(nombre, color);
        this.paisDeOrigen = paisDeOrigen;
    }

    describir() {
        return `${super.describir()} Proviene de ${this.paisDeOrigen}.`;
    }
}

// Crear instancias
const loto = new FlorExotica("Loto", "rosa", "India");
console.log(loto.describir());

// Ejemplo 4: Clase con Métodos Estáticos
class FlorEstatica {
    constructor(nombre, color) {
        this.nombre = nombre;
        this.color = color;
    }

    static compararFlores(flor1, flor2) {
        return flor1.color === flor2.color
            ? `Ambas flores tienen el mismo color (${flor1.color}).`
            : `Las flores tienen colores diferentes (${flor1.color} y ${flor2.color}).`;
    }
}

// Crear instancias
const margarita = new FlorEstatica("Margarita", "blanco");
const violeta = new FlorEstatica("Violeta", "morado");

console.log(FlorEstatica.compararFlores(margarita, violeta));

// Ejemplo 5: Clase con Propiedades y Métodos Dinámicos
class FlorDinamica {
    constructor(nombre, color, temporada) {
        this.nombre = nombre;
        this.color = color;
        this.temporada = temporada; // Ejemplo: "primavera", "verano"
    }

    florecer(mes) {
        if (this.temporada.includes(mes.toLowerCase())) {
            return `La ${this.nombre} está floreciendo en ${mes}.`;
        } else {
            return `La ${this.nombre} no florece en ${mes}.`;
        }
    }
}

// Crear una instancia
const jazmin = new FlorDinamica("Jazmín", "blanco", ["primavera", "verano"]);
console.log(jazmin.florecer("verano"));
console.log(jazmin.florecer("invierno"));


// Ejemplo 1: Método para Cambiar el Color de la Flor
class Flor {
    constructor(nombre, color) {
        this.nombre = nombre;
        this.color = color;
    }

    cambiarColor(nuevoColor) {
        this.color = nuevoColor;
        console.log(`El color de la flor ${this.nombre} ha sido cambiado a ${this.color}.`);
    }
}

// Crear una instancia
const rosa = new Flor("Rosa", "rojo");
rosa.cambiarColor("blanco"); // El color de la flor Rosa ha sido cambiado a blanco.



// Ejemplo 2: Método para Verificar si la Flor Tiene Aroma
class FlorConAroma {
    constructor(nombre, color, aroma) {
        this.nombre = nombre;
        this.color = color;
        this.aroma = aroma; // Aroma es un booleano
    }

    tieneAroma() {
        if (this.aroma) {
            console.log(`La flor ${this.nombre} tiene un aroma agradable.`);
        } else {
            console.log(`La flor ${this.nombre} no tiene aroma.`);
        }
    }
}

// Crear una instancia
const lirio = new FlorConAroma("Lirio", "blanco", true);
lirio.tieneAroma(); // La flor Lirio tiene un aroma agradable.



// Ejemplo 3: Método para Comparar el Tamaño de Dos Flores
class FlorConTamaño {
    constructor(nombre, color, tamaño) {
        this.nombre = nombre;
        this.color = color;
        this.tamaño = tamaño; // Tamaño en cm
    }

    compararTamaño(otraFlor) {
        if (this.tamaño > otraFlor.tamaño) {
            console.log(`${this.nombre} es más grande que ${otraFlor.nombre}.`);
        } else if (this.tamaño < otraFlor.tamaño) {
            console.log(`${this.nombre} es más pequeña que ${otraFlor.nombre}.`);
        } else {
            console.log(`${this.nombre} y ${otraFlor.nombre} son del mismo tamaño.`);
        }
    }
}

// Crear instancias
const girasol = new FlorConTamaño("Girasol", "amarillo", 150);
const margarita = new FlorConTamaño("Margarita", "blanco", 50);
girasol.compararTamaño(margarita); // Girasol es más grande que Margarita.



// Ejemplo 4: Método para Describir la Flor Completa
class FlorCompleta {
    constructor(nombre, color, aroma, temporada) {
        this.nombre = nombre;
        this.color = color;
        this.aroma = aroma;
        this.temporada = temporada; // Temporada puede ser "primavera", "verano", etc.
    }

    describir() {
        return `La flor ${this.nombre} es de color ${this.color}, ${this.aroma ? "tiene" : "no tiene"} aroma y florece en ${this.temporada}.`;
    }
}

// Crear una instancia
const tulipan = new FlorCompleta("Tulipán", "rojo", false, "primavera");
console.log(tulipan.describir()); // La flor Tulipán es de color rojo, no tiene aroma y florece en primavera.



// Ejemplo 5: Método Estático para Contar el Número de Flores Creadas
class FlorEstatica {
    static contadorFlores = 0; // Contador estático

    constructor(nombre, color) {
        this.nombre = nombre;
        this.color = color;
        FlorEstatica.contadorFlores++; // Incrementar el contador cada vez que se crea una nueva instancia
    }

    static obtenerTotalFlores() {
        console.log(`El número total de flores creadas es: ${FlorEstatica.contadorFlores}`);
    }
}

// Crear instancias
const rosa = new FlorEstatica("Rosa", "rojo");
const margarita = new FlorEstatica("Margarita", "blanco");
FlorEstatica.obtenerTotalFlores(); // El número total de flores creadas es: 2



// Ejemplo 6: Método para Verificar la Temporada de la Flor
class FlorConTemporada {
    constructor(nombre, color, temporada) {
        this.nombre = nombre;
        this.color = color;
        this.temporada = temporada; // "primavera", "verano", "otoño", "invierno"
    }

    esDeTemporada(mes) {
        const temporadaPorMes = {
            "enero": "invierno", "febrero": "invierno", "marzo": "primavera",
            "abril": "primavera", "mayo": "primavera", "junio": "verano",
            "julio": "verano", "agosto": "verano", "septiembre": "otoño",
            "octubre": "otoño", "noviembre": "otoño", "diciembre": "invierno"
        };

        if (this.temporada === temporadaPorMes[mes.toLowerCase()]) {
            console.log(`${this.nombre} está en temporada en ${mes}.`);
        } else {
            console.log(`${this.nombre} no está en temporada en ${mes}.`);
        }
    }
}

// Crear una instancia
const jazmin = new FlorConTemporada("Jazmín", "blanco", "primavera");
jazmin.esDeTemporada("marzo"); // Jazmín está en temporada en marzo.

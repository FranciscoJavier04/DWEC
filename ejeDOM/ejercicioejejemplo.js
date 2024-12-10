// Ejercicio 1: Cambiar el contenido de un elemento
const parrafo = document.getElementById("miParrafo");
parrafo.textContent = "¡Este texto ha sido cambiado por JavaScript!";

// Ejercicio 2: Cambiar el estilo de un elemento
const boton = document.getElementById("miBoton");
boton.addEventListener("click", () => {
    boton.style.backgroundColor = "blue";
    boton.style.color = "white";
    boton.textContent = "¡Haz clickeado el botón!";
});

// Ejercicio 3: Crear un nuevo elemento
const lista = document.getElementById("miLista");
const nuevoElemento = document.createElement("li");
nuevoElemento.textContent = "Elemento nuevo";
lista.appendChild(nuevoElemento);

// Ejercicio 4: Eliminar un elemento
const parrafoAEliminar = document.getElementById("parrafoEliminar");
if (parrafoAEliminar) {
    parrafoAEliminar.remove();
}

// Ejercicio 5: Alternar una clase en un elemento
const toggleBoton = document.getElementById("toggleClase");
const caja = document.getElementById("caja");
toggleBoton.addEventListener("click", () => {
    caja.classList.toggle("activo");
});

// Ejercicio 6: Escuchar eventos en varios elementos
const botones = document.querySelectorAll(".boton");
botones.forEach((boton) => {
    boton.addEventListener("click", () => {
        alert(`Has hecho clic en el botón: ${boton.textContent}`);
    });
});

// Ejercicio 7: Manipular atributos
const imagen = document.getElementById("miImagen");
const cambiarBoton = document.getElementById("cambiarImagen");
cambiarBoton.addEventListener("click", () => {
    imagen.src = "nueva-imagen.jpg";
});

// Ejercicio 8: Animación básica usando estilos
const cajaMover = document.getElementById("cajaMover");
const moverBoton = document.getElementById("mover");
moverBoton.addEventListener("click", () => {
    let posicion = 0;
    const intervalo = setInterval(() => {
        if (posicion >= 200) {
            clearInterval(intervalo);
        } else {
            posicion += 5;
            cajaMover.style.transform = `translateX(${posicion}px)`;
        }
    }, 50);
});

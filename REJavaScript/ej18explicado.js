// Esta parte aplica para ambos formularios
const REGEXNOMBREAPELLIDOS = /^[a-zA-Z]+(\s[a-zA-Z]+)*$/; // Expresión regular para validar que los apellidos contengan solo letras (y opcionalmente un espacio entre palabras)
const REGEXDOMICILIO = /^[a-zA-Z0-9\s/º]*$/; // Expresión regular para validar que el domicilio contenga letras, números, espacios y los caracteres / o º
var f1 = document.getElementById("form1"); // Obtener referencia al primer formulario (form1)
var fieldsetF1 = f1.querySelector("fieldset"); // Obtener el primer <fieldset> del formulario 1
var f2 = document.getElementById("form2"); // Obtener referencia al segundo formulario (form2)
var fieldsetF2 = f2.querySelector("fieldset"); // Obtener el primer <fieldset> del formulario 2

// Función para resetear ambos formularios
function reset() {
    fieldsetF1.disabled = false; // Habilitar el formulario 1
    fieldsetF2.disabled = false; // Habilitar el formulario 2
    f1.reset(); // Limpiar los campos del formulario 1
    f2.reset(); // Limpiar los campos del formulario 2
}

// Cuando hay un cambio en el formulario 1, se deshabilita el formulario 2
f1.addEventListener("change", function() {
    fieldsetF2.disabled = true; // Deshabilitar todo el formulario 2
});

// Cuando hay un cambio en el formulario 2, se deshabilita el formulario 1
f2.addEventListener("change", function() {
    fieldsetF1.disabled = true; // Deshabilitar todo el formulario 1
});

// Esta parte del código aplica para el primer formulario
var inputApellidosF1 = document.getElementById("inputApellidosF1"); // Obtener el campo de apellidos en el formulario 1
var spanApellidosF1 = document.getElementById("errorApellidosF1"); // Obtener el elemento donde se mostrarán los errores de los apellidos
var inputNombreF1 = document.getElementById("inputNombreF1"); // Obtener el campo de nombre en el formulario 1
var spanNombreF1 = document.getElementById("errorNombreF1"); // Obtener el elemento donde se mostrarán los errores del nombre
var inputDomicilioF1 = document.getElementById("inputDomicilioF1"); // Obtener el campo de domicilio en el formulario 1
var spanDomicilioF1 = document.getElementById("errorDomicilioF1"); // Obtener el elemento donde se mostrarán los errores del domicilio
var selectF1 = f1.querySelector("select"); // Obtener el elemento <select> del formulario 1
var checks1F1 = document.getElementById("checks1F1").querySelectorAll("input"); // Obtener todos los checkboxes del grupo 1 en el formulario 1
var checks2F1 = document.getElementById("checks2F1").querySelectorAll("input"); // Obtener todos los checkboxes del grupo 2 en el formulario 1

// Función para bloquear o desbloquear los checkboxes según la opción seleccionada en el <select>
function lockChecksOnF1() {
    if (selectF1.value == 1) { // Si se selecciona la opción 1 en el <select>
        for (let i = 0; i < checks1F1.length; i++) {
            checks1F1[i].disabled = false; // Habilitar los checkboxes del grupo 1
        }
        for (let i = 0; i < checks2F1.length; i++) {
            checks2F1[i].disabled = true; // Deshabilitar los checkboxes del grupo 2
        }
    } else if (selectF1.value == 2) { // Si se selecciona la opción 2 en el <select>
        for (let i = 0; i < checks1F1.length; i++) {
            checks1F1[i].disabled = true; // Deshabilitar los checkboxes del grupo 1
        }
        for (let i = 0; i < checks2F1.length; i++) {
            checks2F1[i].disabled = false; // Habilitar los checkboxes del grupo 2
        }
    }
}

// Ejecutar la función cuando la página se carga
f1.addEventListener("load", lockChecksOnF1());

// Escuchar los cambios en el <select> para actualizar el estado de los checkboxes
f1.addEventListener("change", (event) => {
    if (event.target == selectF1) { // Si el cambio fue en el <select>
        lockChecksOnF1(); // Actualizar los checkboxes
    }
});

// Validaciones al enviar el formulario 1
f1.addEventListener("submit", function(event) {
    // Verificar el campo de apellidos
    let apellidosStatus = false;
    if (REGEXNOMBREAPELLIDOS.exec(inputApellidosF1.value)) { // Si los apellidos son válidos
        spanApellidosF1.innerText = null; // Limpiar mensaje de error
        apellidosStatus = true; // Marcar como válido
    } else { // Si los apellidos no son válidos
        spanApellidosF1.innerText = "Los apellidos solo pueden estar compuestos por letras"; // Mostrar mensaje de error
        inputApellidosF1.value = null; // Limpiar el campo de apellidos
    }

    // Verificar el campo de nombre
    let nombreStatus = false;
    if (REGEXNOMBREAPELLIDOS.exec(inputNombreF1.value)) { // Si el nombre es válido
        spanNombreF1.innerText = null; // Limpiar mensaje de error
        nombreStatus = true; // Marcar como válido
    } else { // Si el nombre no es válido
        spanNombreF1.innerText = "El nombre solo puede estar compuesto por letras"; // Mostrar mensaje de error
        inputNombreF1.value = null; // Limpiar el campo de nombre
    }

    // Verificar el campo de domicilio
    let domicilioStatus = false;
    if (REGEXDOMICILIO.exec(inputDomicilioF1.value)) { // Si el domicilio es válido
        spanDomicilioF1.innerText = null; // Limpiar mensaje de error
        domicilioStatus = true; // Marcar como válido
    } else { // Si el domicilio no es válido
        spanDomicilioF1.innerText = "El domicilio solo puede estar compuesto por letras, números y opcionalmente / o º"; // Mostrar mensaje de error
        inputDomicilioF1.value = null; // Limpiar el campo de domicilio
    }

    // Verificar que al menos un checkbox esté seleccionado
    let checked = false;
    if (selectF1.value == 1) { // Si se seleccionó la opción 1 en el <select>
        for (let i = 0; i < checks1F1.length; i++) {
            if (checks1F1[i].checked) { // Si algún checkbox está seleccionado
                checked = true; // Marcar como válido
                break; // Salir del ciclo
            }
        }
    } else if (selectF1.value == 2) { // Si se seleccionó la opción 2 en el <select>
        for (let i = 0; i < checks2F1.length; i++) {
            if (checks2F1[i].checked) { // Si algún checkbox está seleccionado
                checked = true; // Marcar como válido
                break; // Salir del ciclo
            }
        }
    }
    if (!checked) { // Si no hay ningún checkbox seleccionado
        alert("Debe seleccionar al menos un módulo"); // Mostrar mensaje de advertencia
    }

    // Si alguna de las validaciones falla, evitar que el formulario se envíe
    if (!apellidosStatus || !nombreStatus || !domicilioStatus || !checked) {
        event.preventDefault(); // Bloquear el envío del formulario
    }
});

// Parte del código que aplica para el segundo formulario (form2)
// El proceso es muy similar al del primer formulario, se repiten las mismas validaciones, lógica y eventos
var inputApellidosF2 = document.getElementById("inputApellidosF2"); 
var spanApellidosF2 = document.getElementById("errorApellidosF2");
var inputNombreF2 = document.getElementById("inputNombreF2");
var spanNombreF2 = document.getElementById("errorNombreF2");
var inputDomicilioF2 = document.getElementById("inputDomicilioF2");
var spanDomicilioF2 = document.getElementById("errorDomicilioF2");
var selectF2 = f2.querySelector("select");
var checks1F2 = document.getElementById("checks1F2").querySelectorAll("input");
var checks2F2 = document.getElementById("checks2F2").querySelectorAll("input");

// La lógica para los checkboxes y las validaciones del formulario 2 es idéntica al formulario 1 y se repite igual.
// Puedes aplicar el mismo tipo de lógica de validaciones para el formulario 2.

// Esta parte aplica para ambos formularios
    const REGEXNOMBREAPELLIDOS = /^[a-zA-Z]+(\s[a-zA-Z]+)*$/
    const REGEXDOMICILIO = /^[a-zA-Z0-9\s/º]*$/;
    var f1 = document.getElementById("form1");
    var fieldsetF1 = f1.querySelector("fieldset");
    var f2 = document.getElementById("form2");
    var fieldsetF2 = f2.querySelector("fieldset");
    
    function reset() {
        fieldsetF1.disabled = false;
        fieldsetF2.disabled = false;
        f1.reset();
        f2.reset();
    }

    f1.addEventListener("change", function() {
        fieldsetF2.disabled = true;
    });

    f2.addEventListener("change", function() {
        fieldsetF1.disabled = true;
    });
//
// Esta parte del código aplica para el 1er formulario
    var inputApellidosF1 = document.getElementById("inputApellidosF1");
    var spanApellidosF1 = document.getElementById("errorApellidosF1");
    var inputNombreF1 = document.getElementById("inputNombreF1");
    var spanNombreF1 = document.getElementById("errorNombreF1");
    var inputDomicilioF1 = document.getElementById("inputDomicilioF1");
    var spanDomicilioF1 = document.getElementById("errorDomicilioF1");
    var selectF1 = f1.querySelector("select");
    var checks1F1 = document.getElementById("checks1F1").querySelectorAll("input"); //querySelectorAll('input[name="checkbox"]')
    var checks2F1 = document.getElementById("checks2F1").querySelectorAll("input");

    function lockChecksOnF1() {
        if (selectF1.value == 1) {
            for (let i=0;i<checks1F1.length;i++) {
                checks1F1[i].disabled = false;
            }
            for (let i=0;i<checks2F1.length;i++) {
                checks2F1[i].disabled = true;
            }
        } else if (selectF1.value == 2) {
            for (let i=0;i<checks1F1.length;i++) {
                checks1F1[i].disabled = true;
            }
            for (let i=0;i<checks2F1.length;i++) {
                checks2F1[i].disabled = false;
            }
        }
    }

    f1.addEventListener("load", lockChecksOnF1());

    f1.addEventListener("change", (event) => {
        if (event.target == selectF1) {
            lockChecksOnF1();
        }
    });

    f1.addEventListener("submit", function(event) {
        // Esta parte verifica el input de los apellidos
            let apellidosStatus = false;
            if (REGEXNOMBREAPELLIDOS.exec(inputApellidosF1.value)) {
                spanApellidosF1.innerText = null;
                apellidosStatus = true;
            } else {
                spanApellidosF1.innerText = "los apellidos solo pueden estar compuestos por letras";
                inputApellidosF1.value = null;
            }
        //
        // Esta parte verifica el input del nombre
            let nombreStatus = false;
            if (REGEXNOMBREAPELLIDOS.exec(inputNombreF1.value)) {
                spanNombreF1.innerText = null;
                nombreStatus = true;
            } else {
                spanNombreF1.innerText = "el nombre solo puede estar compuesto por letras";
                inputNombreF1.value = null;
            }
        //
        // Esta seccion verifica el input del domicilio
            let domicilioStatus = false;
            if (REGEXDOMICILIO.exec(inputDomicilioF1.value)) {
                spanDomicilioF1.innerText = null;
                domicilioStatus = true;
            } else {
                spanDomicilioF1.innerText = "el domicilio solo puede estar compuesto por letras, números y opcionalmente / o º";
                inputDomicilioF1.value = null;
            }
        //
        // Esta sección verifica que al menos haya un checkbox seleccionado
            let checked = false;
            if (selectF1.value == 1) {
                for (let i=0;i<checks1F1.length;i++) {
                    if (checks1F1[i].checked) {
                        checked = true;
                        break;
                    }
                }
            } else if (selectF1.value == 2) {
                for (let i=0;i<checks2F1.length;i++) {
                    if (checks2F1[i].checked) {
                        checked = true;
                        break;
                    }
                }
            }
            if (!checked) {
                alert("Debe seleccionar al menos un modulo");
            }
        //
        // Si alguna verificación no funciona bloquea el submit
            if (!apellidosStatus || !nombreStatus || !domicilioStatus || !checked) {
                event.preventDefault();
            }
        //
    });
//
// Esta parte del código aplica para el 2º formulario
    var inputApellidosF2 = document.getElementById("inputApellidosF2");
    var spanApellidosF2 = document.getElementById("errorApellidosF2");
    var inputNombreF2 = document.getElementById("inputNombreF2");
    var spanNombreF2 = document.getElementById("errorNombreF2");
    console.log(spanNombreF2);
    var inputDomicilioF2 = document.getElementById("inputDomicilioF2");
    var spanDomicilioF2 = document.getElementById("errorDomicilioF2");
    var selectF2 = f2.querySelector("select");
    var checks1F2 = document.getElementById("checks1F2").querySelectorAll("input");
    var checks2F2 = document.getElementById("checks2F2").querySelectorAll("input");

    function lockChecksOnF2() {
        if (selectF2.value == 1) {
            for (let i=0;i<checks1F2.length;i++) {
                checks1F2[i].disabled = false;
            }
            for (let i=0;i<checks2F2.length;i++) {
                checks2F2[i].disabled = true;
            }
        } else if (selectF2.value == 2) {
            for (let i=0;i<checks1F2.length;i++) {
                checks1F2[i].disabled = true;
            }
            for (let i=0;i<checks2F2.length;i++) {
                checks2F2[i].disabled = false;
            }
        }
    }

    f2.addEventListener("load", lockChecksOnF2());

    f2.addEventListener("change", (event) => {
        if (event.target == selectF2) {
            lockChecksOnF2();
        }
    });

    f2.addEventListener("submit", function(event) {
        // Esta parte verfica el input de los apellidos
            let apellidosStatus = false;
            if (REGEXNOMBREAPELLIDOS.exec(inputApellidosF2.value)) {
                spanApellidosF2.innerText = null;
                apellidosStatus = true;
            } else {
                spanApellidosF2.innerText = "los apellidos solo pueden estar compuestos por letras";
                inputApellidosF2.value = null;
            }
        //
        // esta parte verifica el input del nombre
            let nombreStatus = false;
            if (REGEXNOMBREAPELLIDOS.exec(inputNombreF2.value)) {
                spanNombreF2.innerText = null;
                nombreStatus = true;
            } else {
                spanNombreF2.innerText = "el nombre solo puede estar compuesto por letras";
                inputNombreF2.value = null;
            }
        //
        // esta parte verifica el input del domicilio
            let domicilioStatus = false;
            if (REGEXDOMICILIO.exec(inputDomicilioF2.value)) {
                spanDomicilioF2.innerText = null;
                domicilioStatus = true;
            } else {
                spanDomicilioF2.innerText = "el domicilio solo puede estar compuesto por letras, números y opcionalmente / o º";
                inputDomicilioF2.value = null;
            }
        //
        // esta parte verifica que al menos haya un checkbox seleccionado
            let checked = false;
            if (selectF2.value == 1) {
                for (let i=0;i<checks1F2.length;i++) {
                    if (checks1F2[i].checked) {
                        checked = true;
                        break;
                    }
                }
            } else if (selectF2.value == 2) {
                for (let i=0;i<checks2F2.length;i++) {
                    if (checks2F2[i].checked) {
                        checked = true;
                        break;
                    }
                }
            }
            if (!checked) {
                alert("Debe seleccionar al menos un modulo");
            }
        //
        // si alguna verifiación no funciona bloquea el submit
            if (!apellidosStatus || !nombreStatus || !domicilioStatus || !checked) {
                event.preventDefault();
            }
        //
    });
//
function anadirElemento() {
    var lista = document.getElementById("diariosdeportivos");

    var elementoNuevo = document.createElement("li");
    var texto = document.createTextNode(prompt("Introduzca texto en la lista"));
    elementoNuevo.appendChild(texto);

    //añadir el elemento nuevo a la lista
    lista.appendChild(elementoNuevo);

    //segunda forma
    var elementoNuevo = document.createElement("li");
    var texto = document.createTextNode(prompt("Introduzca texto en la lista"));
    elementoNuevo.appendChild(texto);
    //añadir directamente al contenido InnerHtml
    lista.innerHTML+=elementoNuevo;

}
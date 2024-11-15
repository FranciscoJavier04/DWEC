document.getElementById('insertar').addEventListener('click', () => {
    const contenido = document.getElementById('contenido').value;
    const posicion = parseInt(document.getElementById('posicion').value);

    const nuevoElemento = document.createElement('li');
    nuevoElemento.textContent = contenido;

    const lista = document.getElementById('lista');
    const elementos = Array.from(lista.children);

    if (posicion >= 0 && posicion <= elementos.length) {
        lista.insertBefore(nuevoElemento, elementos[posicion] || null);
    }
});

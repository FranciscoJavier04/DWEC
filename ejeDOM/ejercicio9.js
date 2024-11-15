
const nuevoParrafo = document.createElement('p');
nuevoParrafo.textContent = 'Nuevo párrafo en medio';

const parrafos = document.querySelectorAll('p');
parrafos[0].parentNode.insertBefore(nuevoParrafo, parrafos[1]);

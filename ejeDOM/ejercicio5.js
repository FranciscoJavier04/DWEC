const parrafos = document.querySelectorAll('#contenedor p');

document.getElementById('cambiar-todos').addEventListener('click', () => {
    parrafos.forEach(p => p.style.color = 'red');
});

document.getElementById('cambiar-primero').addEventListener('click', () => {
    parrafos[0].style.color = 'red';
});

document.getElementById('cambiar-pares').addEventListener('click', () => {
    parrafos.forEach((p, i) => {
        if (i % 2 === 1) p.style.color = 'red';
    });
});

document.getElementById('cambiar-impares').addEventListener('click', () => {
    parrafos.forEach((p, i) => {
        if (i % 2 === 0) p.style.color = 'red';
    });
});

document.getElementById('añadir-final').addEventListener('click', () => {
    const nuevoParrafo = document.createElement('p');
    nuevoParrafo.textContent = 'Nuevo párrafo';
    document.getElementById('contenedor').appendChild(nuevoParrafo);
});

document.getElementById('estado-original').addEventListener('click', () => {
    parrafos.forEach(p => p.style.color = '');
});

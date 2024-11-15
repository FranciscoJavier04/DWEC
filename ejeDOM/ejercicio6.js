document.getElementById('invertir').addEventListener('click', () => {
    const contenedor = document.getElementById('contenedor');
    const parrafos = Array.from(contenedor.children);
    contenedor.innerHTML = '';
    parrafos.reverse().forEach(p => contenedor.appendChild(p));
});

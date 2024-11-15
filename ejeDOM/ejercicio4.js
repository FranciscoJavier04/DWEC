document.getElementById('enviar').addEventListener('click', function () {
    const nombre = document.getElementById('nombre').value;
    const apellidos = document.getElementById('apellidos').value;
    const mensaje = `Bienvenido, ${nombre} ${apellidos}!`;
    document.getElementById('mensaje').textContent = mensaje;
});

document.getElementById('limpiar').addEventListener('click', function () {
    document.getElementById('nombre').value = '';
    document.getElementById('apellidos').value = '';
    document.getElementById('mensaje').textContent = '';
});

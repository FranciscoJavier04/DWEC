document.getElementById('cambiar-enlace').addEventListener('click', () => {
    const enlace = document.getElementById('enlace');
    enlace.href = 'http://www.as.com';
    enlace.textContent = 'AS';
});

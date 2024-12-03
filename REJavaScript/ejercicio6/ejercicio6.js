function generarNumeros() {
    const numeros = new Set();
    while (numeros.size < 6) {
        const numero = Math.floor(Math.random() * 49) + 1;
        numeros.add(numero);
    }
    return Array.from(numeros);
}


function apuesta() {
    const numerosSeleccionados = generarNumeros();

    let tablaHTML = '<table>';
    let contador = 1;

    for (let i = 0; i < 7; i++) {
        tablaHTML += '<tr>';
        for (let j = 0; j < 7; j++) {
            if (numerosSeleccionados.includes(contador)) {
                tablaHTML += `<td>X</td>`;
            } else {
                tablaHTML += `<td>${contador}</td>`;
            }
            contador++;
        }
        tablaHTML += '</tr>';
    }
    tablaHTML += '</table>';

    document.getElementById('tablaLoteria').innerHTML = tablaHTML;


    console.log('Números seleccionados:', numerosSeleccionados);
}

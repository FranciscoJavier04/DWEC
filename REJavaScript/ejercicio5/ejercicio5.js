function gDesplazamiento() {
    return Math.floor(Math.random() * 25) + 1;
}

function cifrado() {

    const textoOriginal = document.getElementById("textoO").value

    document.getElementById("textoOriginal").textContent = textoOriginal;

    const desplazamiento = gDesplazamiento();

    let textoCifrado = "";

    for (let i = 0; i < textoOriginal.length; i++) {
        let char = textoOriginal[i];

        if (char >= 'A' && char <= 'Z') {
            let nuevoChar = String.fromCharCode(((char.charCodeAt(0) - 65 + desplazamiento) % 26) + 65);
            textoCifrado += nuevoChar;
        }
        else if (char >= 'a' && char <='z') {
            let nuevoChar = String.fromCharCode(((char.charCodeAt(0) - 97 + desplazamiento) % 26) + 97);
            textoCifrado += nuevoChar;
        }
        else {
            textoCifrado += char;
        }
    }
    document.getElementById("textoCifrado").textContent = textoCifrado;
}

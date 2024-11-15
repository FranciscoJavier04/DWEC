document.getElementById("ordenar").addEventListener("click", () => {
    const lista = document.getElementById("lista");
    const elementos = Array.from(lista.children);
    elementos.sort((a, b) => a.textContent.localeCompare(b.textContent));
    lista.innerHTML = "";
    elementos.forEach((elemento) => lista.appendChild(elemento));
});

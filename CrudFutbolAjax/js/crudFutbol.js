const d = document,
    $table = d.querySelector(".crud-table"),
    $form = d.querySelector(".crud-form"),
    $titulo = d.querySelector(".crud-titulo"),
    $template = d.getElementById("crud-template").content,
    $fragment = d.createDocumentFragment();

const ajax = (options) => {
    let { url, method, success, error, data } = options;
    const xhr = new XMLHttpRequest();

    xhr.addEventListener("readystatechange", (e) => {
        if (xhr.readyState !== 4) return;

        if (xhr.status >= 200 && xhr.status < 300) {
            let json = JSON.parse(xhr.responseText);
            success(json);
        } else {
            let message = xhr.statusText || "Ocurrió un error";
            error(`Error ${xhr.status}: ${message}`);
        }
    });

    xhr.open(method || "GET", url);
    xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
    xhr.send(JSON.stringify(data));
};

const getAll = () => {
    ajax({
        url: "http://localhost:5555/equipos",
        success: (respuesta) => {
            respuesta.forEach((el) => {
                $template.querySelector(".equipo").textContent = el.equipo;
                $template.querySelector(".entrenador").textContent = el.entrenador;
                $template.querySelector(".jugador_destacado").textContent = el.jugador_destacado;
                $template.querySelector(".posicion_tabla").textContent = el.posicion_tabla;

                $template.querySelector(".edit").dataset.id = el.id;
                $template.querySelector(".edit").dataset.equipo = el.equipo;
                $template.querySelector(".edit").dataset.entrenador = el.entrenador;
                $template.querySelector(".edit").dataset.jugador_destacado = el.jugador_destacado;
                $template.querySelector(".edit").dataset.posicion_tabla = el.posicion_tabla;

                $template.querySelector(".delete").dataset.id = el.id;

                let $clone = d.importNode($template, true);
                $fragment.appendChild($clone);
            });
            $table.querySelector("tbody").appendChild($fragment);
        },
        error: (err) => {
            $table.insertAdjacentHTML("afterend", `<p><b>${err}</b></p>`);
        },
    });
};

d.addEventListener("DOMContentLoaded", getAll);

d.addEventListener("submit", (e) => {
    if (e.target === $form) {
        e.preventDefault();

        if (!e.target.id.value) {
            ajax({
                url: "http://localhost:5555/equipos",
                method: "POST",
                success: (respuesta) => location.reload(),
                error: (err) => {
                    $form.insertAdjacentHTML("afterend", `<p><b>${err}</b></p>`);
                },
                data: {
                    equipo: e.target.equipo.value,
                    entrenador: e.target.entrenador.value,
                    jugador_destacado: e.target.jugador_destacado.value,
                    posicion_tabla: e.target.posicion_tabla.value,
                },
            });
        } else {
            ajax({
                url: `http://localhost:5555/equipos/${e.target.id.value}`,
                method: "PUT",
                success: (respuesta) => location.reload(),
                error: (err) => $form.insertAdjacentHTML("afterend", `<p><b>${err}</b></p>`),
                data: {
                    equipo: e.target.equipo.value,
                    entrenador: e.target.entrenador.value,
                    jugador_destacado: e.target.jugador_destacado.value,
                    posicion_tabla: e.target.posicion_tabla.value,
                },
            });
        }

        $form.equipo.value = null;
        $form.entrenador.value = null;
        $form.jugador_destacado.value = null;
        $form.posicion_tabla.value = null;
        $form.id.value = null;
    }
});

d.addEventListener("click", (e) => {
    if (e.target.matches(".edit")) {
        $titulo.textContent = "Editar Equipo de Fútbol";
        $form.equipo.value = e.target.dataset.equipo;
        $form.entrenador.value = e.target.dataset.entrenador;
        $form.jugador_destacado.value = e.target.dataset.jugador_destacado;
        $form.posicion_tabla.value = e.target.dataset.posicion_tabla;
        $form.id.value = e.target.dataset.id;
    }

    if (e.target.matches(".delete")) {
        let isDelete = confirm(`¿Estás seguro de eliminar el equipo ${e.target.dataset.id}?`);

        if (isDelete) {
            ajax({
                url: `http://localhost:5555/equipos/${e.target.dataset.id}`,
                method: "DELETE",
                success: (respuesta) => location.reload(),
                error: (err) => alert(err),
            });
        }
    }
});

// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
document.addEventListener("DOMContentLoaded", () => {
    let nombres = [];

    window.agregarAmigo = function () {
        const input = document.getElementById("amigo");
        const nombre = input.value.trim();

        // Validar que solo contenga letras y espacios, sin números ni caracteres especiales
        const nombreValido = /^[A-Za-zÁÉÍÓÚáéíóúÑñ ]+$/;

        if (nombre === "" || !nombreValido.test(nombre)) {
            alert("Por favor, ingresa un nombre válido (solo letras, sin números ni caracteres especiales).");
            return;
        }

        nombres.push(nombre);
        actualizarLista();
        input.value = "";
    };

    function actualizarLista() {
        const lista = document.getElementById("listaAmigos");
        lista.innerHTML = "";
        nombres.forEach(nombre => {
            const li = document.createElement("li");
            li.textContent = nombre;
            lista.appendChild(li);
        });
    }

    window.sortearAmigo = function () {
        if (nombres.length === 0) {
            alert("La lista está vacía. Agrega nombres antes de sortear.");
            return;
        }
        const indiceAleatorio = Math.floor(Math.random() * nombres.length);
        const nombreSorteado = nombres[indiceAleatorio];
        document.getElementById("resultado").innerHTML = `<li>El amigo secreto es: <strong>${nombreSorteado}</strong></li>`;
    };
});


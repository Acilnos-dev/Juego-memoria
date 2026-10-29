const simbolos = ["🍄", "⭐", "💎", "🔥", "🎮", "👾"];
const cartas = simbolos.concat(simbolos);

const tablero = document.querySelector("#tablero");

cartas.forEach(function (simbolo) {
    const carta = document.createElement("button");
    carta.classList.add("carta");

    
    carta.dataset.simbolo = simbolo;
    carta.textContent = "?";

    
    carta.addEventListener("click", function () {
        carta.textContent = carta.dataset.simbolo;
    });

    tablero.appendChild(carta);
});
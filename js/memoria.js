const simbolos = ["🍄", "⭐", "💎", "🔥", "🎮", "👾"];
const cartas = simbolos.concat(simbolos);

const tablero = document.querySelector("#tablero");

cartas.forEach(function (simbolo) {
    const carta = document.createElement("button");
    carta.textContent = simbolo;
    carta.classList.add("carta");
    tablero.appendChild(carta);
});
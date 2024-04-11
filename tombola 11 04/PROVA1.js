// Funzione per generare un numero casuale da 1 a 76
function generaNumeroCasuale() {
    return Math.floor(Math.random() * 76) + 1;
}

// Funzione per evidenziare la cella corrispondente al numero estratto
function evidenziaCella(numero) {
    var celle = document.querySelectorAll(".cella");
    celle[numero - 1].classList.add("evidenziata");
}

// Funzione per gestire il click del bottone di estrazione
function estraiNumero() {
    var numeroEstratto = generaNumeroCasuale();
    evidenziaCella(numeroEstratto);
}

// Crea il tabellone all'avvio dell'applicazione
var tabellone = document.getElementById("tabellone");
for (var i = 1; i <= 76; i++) {
    var cella = document.createElement("div");
    cella.textContent = i;
    cella.classList.add("cella");
    tabellone.appendChild(cella);
}

// Aggiunge un event listener al bottone di estrazione
var bottoneEstrazione = document.getElementById("bottone-estrazione");
bottoneEstrazione.addEventListener("click", estraiNumero);
class User {
    static COSTO_PER_MINUTO = 0.20;

    constructor(nome, cognome, creditoIniziale = 0) {
        this.nome = nome;
        this.cognome = cognome;
        this.credito = creditoIniziale;
        this.numeroChiamate = 0;
    }

    ricarica(amount) {
        this.credito += amount;
    }

    chiamata(minuti) {
        const costoChiamata = minuti * User.COSTO_PER_MINUTO;
        if (this.credito >= costoChiamata) {
            this.credito -= costoChiamata;
            this.numeroChiamate += minuti;
        } else {
            console.log("Credito insufficiente per effettuare la chiamata.");
        }
    }

    chiama404() {
        return this.credito;
    }

    getNumeroChiamata() {
        return this.numeroChiamate;
    }

    azzeraChiamate() {
        this.numeroChiamate = 0;
    }
}

const utente1 = new User("Mario", "Rossi", 10);
const utente2 = new User("Luigi", "Verdi", 5);

document.getElementById('ricaricaUtente1').addEventListener('click', () => {
    utente1.ricarica(10);
    aggiornaUI();
});

document.getElementById('chiamataUtente1').addEventListener('click', () => {
    utente1.chiamata(5);
    aggiornaUI();
});

document.getElementById('azzeraChiamateUtente1').addEventListener('click', () => {
    utente1.azzeraChiamate();
    aggiornaUI();
});

document.getElementById('ricaricaUtente2').addEventListener('click', () => {
    utente2.ricarica(10);
    aggiornaUI();
});

document.getElementById('chiamataUtente2').addEventListener('click', () => {
    utente2.chiamata(5);
    aggiornaUI();
});

document.getElementById('azzeraChiamateUtente2').addEventListener('click', () => {
    utente2.azzeraChiamate();
    aggiornaUI();
});

function aggiornaUI() {
    document.getElementById('creditoUtente1').innerText = utente1.chiama404().toFixed(2) + " €";
    document.getElementById('chiamateUtente1').innerText = utente1.getNumeroChiamata();

    document.getElementById('creditoUtente2').innerText = utente2.chiama404().toFixed(2) + " €";
    document.getElementById('chiamateUtente2').innerText = utente2.getNumeroChiamata();
}

aggiornaUI();
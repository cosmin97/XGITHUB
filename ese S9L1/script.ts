interface Smartphone {
    credito: number;
    numeroChiamate: number;
    ricarica(amount: number): void;
    chiamata(minuti: number): void;
    chiama404(): number;
    getNumeroChiamata(): number;
    azzeraChiamate(): void;
}

class User implements Smartphone {
    static COSTO_PER_MINUTO = 0.20;

    credito: number;
    numeroChiamate: number;
    private nome: string;
    private cognome: string;

    constructor(nome: string, cognome: string, creditoIniziale: number = 0) {
        this.nome = nome;
        this.cognome = cognome;
        this.credito = creditoIniziale;
        this.numeroChiamate = 0;
    }

    ricarica(amount: number): void {
        this.credito += amount;
    }

    chiamata(minuti: number): void {
        const costoChiamata = minuti * User.COSTO_PER_MINUTO;
        if (this.credito >= costoChiamata) {
            this.credito -= costoChiamata;
            this.numeroChiamate += minuti;
        } else {
            console.log("Credito insufficiente per effettuare la chiamata.");
        }
    }

    chiama404(): number {
        return this.credito;
    }

    getNumeroChiamata(): number {
        return this.numeroChiamate;
    }

    azzeraChiamate(): void {
        this.numeroChiamate = 0;
    }
}

const utente1 = new User("Mario", "Rossi", 10);
const utente2 = new User("Luigi", "Verdi", 5);

document.getElementById('ricaricaUtente1')?.addEventListener('click', () => {
    utente1.ricarica(10);
    aggiornaUI();
});

document.getElementById('chiamataUtente1')?.addEventListener('click', () => {
    utente1.chiamata(5);
    aggiornaUI();
});

document.getElementById('azzeraChiamateUtente1')?.addEventListener('click', () => {
    utente1.azzeraChiamate();
    aggiornaUI();
});

document.getElementById('ricaricaUtente2')?.addEventListener('click', () => {
    utente2.ricarica(10);
    aggiornaUI();
});

document.getElementById('chiamataUtente2')?.addEventListener('click', () => {
    utente2.chiamata(5);
    aggiornaUI();
});

document.getElementById('azzeraChiamateUtente2')?.addEventListener('click', () => {
    utente2.azzeraChiamate();
    aggiornaUI();
});

function aggiornaUI() {
    (document.getElementById('creditoUtente1') as HTMLSpanElement).innerText = utente1.chiama404().toFixed(2) + " €";
    (document.getElementById('chiamateUtente1') as HTMLSpanElement).innerText = utente1.getNumeroChiamata().toString();

    (document.getElementById('creditoUtente2') as HTMLSpanElement).innerText = utente2.chiama404().toFixed(2) + " €";
    (document.getElementById('chiamateUtente2') as HTMLSpanElement).innerText = utente2.getNumeroChiamata().toString();
}

aggiornaUI();
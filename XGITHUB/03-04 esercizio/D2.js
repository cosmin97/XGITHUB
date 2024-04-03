/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function findLargestNumber(num1, num2) {
  if (num1 > num2) {
      return num1;
  } else {
      return num2;
  }
}
console.log(findLargestNumber(5, 10)); // Output: 10
console.log(findLargestNumber(20, 8)); // Output: 20
console.log(findLargestNumber(15, 15)); // Output: 15 (se i numeri sono uguali, restituirà il secondo numero)
/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function checkNotEqual(number) {
  if (number !== 5) {
      console.log("not equal");
  }
}
checkNotEqual(3); // Output: not equal
checkNotEqual(5); // Nessun output poiché 5 è uguale a 5
/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function divisibilePer5(numero) {
            if (numero % 5 === 0) {
              console.log(numero + " è divisibile per 5");
          } else {
              console.log(numero + " non è divisibile per 5");
          }
      }

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
  // Funzione per verificare se uno dei due numeri è uguale a 8*/

/* SCRIVI QUI LA TUA RISPOSTA */
function verificaNumero(numero1, numero2) {
  if (numero1 === 8 || numero2 === 8 || numero1 + numero2 === 8 || Math.abs(numero1 - numero2) === 8) {
      return true;
  } else {
      return false;
  }
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
var totalShoppingCart = 60; // Esempio di saldo totale del carrello

var shippingCost = 10;  // Costo fisso della spedizione
function calculateTotalAmount(totalShoppingCart, shippingCost) {
    if (totalShoppingCart > 50) {
        return totalShoppingCart;
    } else {
        return totalShoppingCart + shippingCost;
    }
}
var totalAmountToCharge = calculateTotalAmount(totalShoppingCart, shippingCost);

console.log("L'ammontare totale da addebitare all'utente per il checkout è: $" + totalAmountToCharge.toFixed(2));
/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
var totalShoppingCart = 60; // saldo totale del carrello
var shippingCost = 10;
var blackFridayDiscount = 0.20;

function calculateTotalAmount(totalShoppingCart, shippingCost, blackFridayDiscount) {
    var discountedTotal = totalShoppingCart - (totalShoppingCart * blackFridayDiscount);
    if (discountedTotal > 50) {
        return discountedTotal;
    } else {
        return discountedTotal + shippingCost;
    }
}
/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// Definizione delle tre variabili
var num1 = 15;
var num2 = 7;
var num3 = 22;

// Blocco condizionale per ordinare le variabili
if (num1 >= num2 && num1 >= num3) {
    if (num2 >= num3) {
        console.log(num1, num2, num3);
    } else {
        console.log(num1, num3, num2);
    }
} else if (num2 >= num1 && num2 >= num3) {
    if (num1 >= num3) {
        console.log(num2, num1, num3);
    } else {
        console.log(num2, num3, num1);
    }
} else {
    if (num1 >= num2) {
        console.log(num3, num1, num2);
    } else {
        console.log(num3, num2, num1);
    }
}
/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function isNumber(value) {
  return typeof value === 'number';
}

console.log(isNumber(5));      // Output: true
console.log(isNumber('hello')); // Output: false
console.log(isNumber(true));    // Output: false
/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function checkEvenOrOdd(number) {
  if (number % 2 === 0) {
      return "Il numero è pari";
  } else {
      return "Il numero è dispari";
  }
}
console.log(checkEvenOrOdd(6)); // Output: "Il numero è pari"
console.log(checkEvenOrOdd(7)); // Output: "Il numero è dispari"
/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let val = 7;

if (val < 5) {
    console.log("Meno di 5");
} else if (val < 10) {
    console.log("Meno di 10");
} else {
    console.log("Uguale a 10 o maggiore");
}
/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

/* SCRIVI QUI LA TUA RISPOSTA */
const me2 = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css']
}

me.city = 'Toronto';

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css']
};

delete me.lastName;

console.log(me);
/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css']
};

me.skills.pop();

console.log(me);
/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let numbers = [];

for (let i = 1; i <= 10; i++) {
    numbers.push(i);
}

console.log(numbers);
/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA 

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Sostituzione dell'ultimo elemento con il valore 100
numbers[numbers.length - 1] = 100;

console.log(numbers); 
*/
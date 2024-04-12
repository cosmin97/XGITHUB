/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/
var sum = 10 + 20;
console.log(sum); // Stampa il risultato della somma

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/
var random = Math.floor(Math.random() * 21); // Genera un numero casuale tra 0 e 20
console.log(random); // Stampa il numero casuale

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/
var me = {
  name: "Cosmin",
  surname: "Ispir",
  age: 27 // Modifica con la tua età
};

console.log(me); // Stampa l'oggetto "me"

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/
delete me.age; // Rimuove la proprietà "age" dall'oggetto "me"

console.log(me); // Stampa l'oggetto "me" senza la proprietà "age"

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/
me.skills = ["HTML", "CSS"]; // Aggiunge l'array di skills all'oggetto "me"

console.log(me); // Stampa l'oggetto "me" con l'array di skills aggiunto

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/
me.skills.push("JavaScript"); // Aggiunge "Python" all'array "skills" dell'oggetto "me"

console.log(me); // Stampa l'oggetto "me" con il nuovo elemento aggiunto all'array "skills"

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/
me.skills.pop(); // Rimuove l'ultimo elemento dall'array "skills" dell'oggetto "me"

console.log(me); // Stampa l'oggetto "me" dopo aver rimosso l'ultimo elemento dall'array "skills"

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/
function dice() {
  return Math.floor(Math.random() * 6) + 1; // Genera un numero casuale tra 1 e 6
}

console.log(dice()); // Esegui la funzione e stampa il risultato

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/
function whoIsBigger(num1, num2) {
  if (num1 > num2) {
      return num1;
  } else {
      return num2;
  }
}

console.log(whoIsBigger(10, 5)); // Esegui la funzione con due numeri e stampa il risultato

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/
function splitMe(stringa) {
  return stringa.split(" "); // Divide la stringa in un array usando gli spazi come separatore
}

console.log(splitMe("I love coding")); // Esegui la funzione e stampa il risultato

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/
function deleteOne(str, isFirst) {
  if (isFirst) {
    return str.slice(1); // Rimuove il primo carattere dalla stringa
} else {
    return str.slice(0, -1); // Rimuove l'ultimo carattere dalla stringa
}
}

console.log(deleteOne("hello", true)); // Esegui la funzione con il booleano true
console.log(deleteOne("hello", false)); // Esegui la funzione con il booleano false

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/
function onlyLetters(str) {
  return str.replace(/[0-9]/g, ''); // Sostituisce tutte le cifre numeriche con una stringa vuota
}

console.log(onlyLetters("I have 4 dogs")); // Esegui la funzione e stampa il risultato

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/
function isThisAnEmail(str) {
  // Espressione regolare per validare un indirizzo email
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;    //Regular Espression trovata online
  return emailPattern.test(str); // Testa se la stringa corrisponde al pattern dell'indirizzo email
}

console.log(isThisAnEmail("example@example.com")); // Esegui la funzione e stampa il risultato

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/
function whatDayIsIt() {
  var days = ['Domenica', 'Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato'];
  var today = new Date().getDay();
  return days[today];
}

console.log(whatDayIsIt()); // Esegui la funzione e stampa il risultato

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/
function dice() {
  return Math.floor(Math.random() * 6) + 1; // Genera un numero casuale tra 1 e 6
}

function rollTheDices(num) {
  var values = [];
  var sum = 0;
  
  for (var i = 0; i < num; i++) {
    var roll = dice();
    values.push(roll);
    sum += roll;
  }
  
  return {
    sum: sum,
    values: values
  };
}

console.log(rollTheDices(3)); 

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/
function howManyDays(date) {
  var today = new Date(); // Data corrente
  var timeDifference = today.getTime() - date.getTime(); // Differenza di tempo in millisecondi
  var daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24)); // Converti la differenza di tempo in giorni
  return daysDifference;
}

// Esempio di utilizzo:
var myDate = new Date("2024-01-01"); // La tua data specifica
console.log(howManyDays(myDate)); // Stampa il numero di giorni trascorsi

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/
function isTodayMyBirthday() {
  var today = new Date();
  var birthday = new Date(today.getFullYear(), 0, 12); // Imposta la data del tuo compleanno nell'anno corrente
  var isSameDate = today.getMonth() === birthday.getMonth() && today.getDate() === birthday.getDate();
  return isSameDate;
}

console.log(isTodayMyBirthday()); // Esegui la funzione e stampa il risultato

// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/
function deleteProp(obj, propName) {
  delete obj[propName];
  return obj;
}
const movie = movies[0];
console.log(deleteProp(movie, 'Type')); 

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/
function newestMovie(movies) {
  // Ordina l'array "movies" in base all'anno in ordine decrescente
  movies.sort((a, b) => parseInt(b.Year) - parseInt(a.Year));
  // Restituisci il primo elemento dell'array ordinato (il film più recente)
  return movies[0];
}

console.log(newestMovie(movies)); 

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/
function countMovies(movies) {
  return movies.length; // Restituisce la lunghezza dell'array "movies"
}

console.log(countMovies(movies)); // Esegui la funzione e stampa il risultato

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/
function onlyTheYears(movies) {
  // Utilizza il metodo map() per creare un nuovo array contenente solo gli anni dei film
  return movies.map(movie => movie.Year);
}
console.log(onlyTheYears(movies)); 

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/
function onlyInLastMillennium(movies) {
  // Filtra l'array "movies" per trovare solo i film prodotti nel millennio scorso (dal 1000 al 1999)
  return movies.filter(movie => parseInt(movie.Year) >= 1000 && parseInt(movie.Year) < 2000);
}
console.log(onlyInLastMillennium(movies));

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/
function sumAllTheYears(movies) {
  // Utilizza il metodo reduce() per sommare tutti gli anni dei film
  return movies.reduce((total, movie) => total + parseInt(movie.Year), 0);
}

console.log(sumAllTheYears(movies)); 

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/
function searchByTitle(title, movies) {
  // Utilizza il metodo filter() per trovare i film che contengono la stringa nel titolo
  return movies.filter(movie => movie.Title.toLowerCase().includes(title.toLowerCase()));
}

// Esempio di utilizzo:
console.log(searchByTitle("Lord", movies));

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/
function searchAndDivide(query, movies) {
  const lowerCaseQuery = query.toLowerCase();    // Converti la stringa di ricerca in minuscolo per una corretta corrispondenza senza distinzione tra maiuscole e minuscole
  const match = movies.filter(movie => movie.Title.toLowerCase().includes(lowerCaseQuery)); // Filtra i film che contengono la stringa di ricerca nel titolo
  
  const unmatch = movies.filter(movie => !movie.Title.toLowerCase().includes(lowerCaseQuery)); // Filtra i film che non contengono la stringa di ricerca nel titolo
  
  return { match, unmatch };  // Ritorna un oggetto contenente i due array
}
console.log(searchAndDivide("Lord", movies)); 

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/
function selectContainerElement() {
  return document.getElementById("container");
}

console.log(selectContainerElement()); 

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/
function selectTdElements() {
  return document.getElementsByTagName("td");
}

console.log(selectTdElements());

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/
function printTdText() {
  var tdElements = document.getElementsByTagName("td");
  for (var i = 0; i < tdElements.length; i++) {
      console.log(tdElements[i].textContent);
  }
}

printTdText(); 

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/
function addRedBackgroundToLinks() {
  var linkElements = document.getElementsByTagName("a");
  for (var i = 0; i < linkElements.length; i++) {
      linkElements[i].style.backgroundColor = "red";
  }
}

addRedBackgroundToLinks();

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/
function addNewItemToList(itemText) {
  var newItem = document.createElement("li"); // Crea un nuovo elemento <li>
  var textNode = document.createTextNode(itemText); // Crea un nodo di testo con il testo fornito
  newItem.appendChild(textNode); // Aggiungi il nodo di testo al nuovo elemento <li>

  var list = document.getElementById("myList"); // Seleziona la lista non ordinata con id "myList"
  list.appendChild(newItem); // Aggiungi il nuovo elemento alla lista
}

addNewItemToList("Nuovo elemento"); 
/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/
function clearList() {
  var list = document.getElementById("myList"); // Seleziona la lista non ordinata con id "myList"
  list.innerHTML = ""; // Imposta il contenuto HTML della lista come una stringa vuota
}
clearList(); 

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/
function addClassToRows() {
  var trElements = document.getElementsByTagName("tr"); // Seleziona tutti gli elementi <tr>
  for (var i = 0; i < trElements.length; i++) {
      trElements[i].classList.add("test"); // Aggiungi la classe "test" a ciascun elemento <tr>
  }
}
addClassToRows();

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/

/* Questo array viene usato per gli esercizi. Non modificarlo. */

const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },

  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]

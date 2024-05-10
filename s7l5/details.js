// noi vogliamo recuperare i dettagli di UNA SINGOLA CONSOLE
// GET su "https://striveschool-api.herokuapp.com/api/agenda" -> TUTTE LE CONSOLE PRESENTI IN DB
// GET su "https://striveschool-api.herokuapp.com/api/agenda/_id" -> UNA CONSOLE IN PARTICOLARE

// all'avvio della pagina dettagli noi vogliamo caricare i dati FRESCHI della console in questione
// lo faremo con una GET molto specifica grazie all'_id della console che ci siamo passati nella barra degli indirizzi

const addressBarContent = new URLSearchParams(location.search); // isola i parametri nel contenuto della barra degli indirizzi
console.log(addressBarContent);
const consoleId = addressBarContent.get('consoleId');

const getConsoleData = function () {
  fetch(`https://striveschool-api.herokuapp.com/api/agenda/${consoleId}`)
    // https://striveschool-api.herokuapp.com/api/agenda/663c94ccb1c77f00150684b6
    // una chiamata GET fatta così NON CI TORNA TUTTE LE CONSOLE, ma UNA in particolare!
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Errore nel recupero dei dettagli della console");
      }
    })
    .then((console) => {
      console.log('DETTAGLI RECUPERATI', console);
      // ora manipolo il DOM e riempio la card
      document.getElementById('name').innerText = console.name;
      document.getElementById('description').innerText = console.description;
      document.getElementById('brand').innerText = console.brand;
      document.getElementById('price').innerText = console.price + '€';
    })
    .catch((err) => {
      console.log('ERRORE', err);
    });
};

getConsoleData();

// funzione ELIMINA
const deleteConsole = function () {
  // per ELIMINARE una risorsa da un DB è necessario fare una fetch utilizzando il metodo "DELETE"
  // la chiamata DELETE funziona SOLO con un indirizzo comprendente alla fine l'_id della risorsa
  fetch(`https://striveschool-api.herokuapp.com/api/agenda/${consoleId}`, {
    method: 'DELETE',
    // qua non serve né body né "Content-Type"
  })
    .then((response) => {
      if (response.ok) {
        // abbiamo eliminato con successo la risorsa!
        alert('RISORSA ELIMINATA');
        location.assign('index.html'); // torniamo in home
      } else {
        // l'eliminazione della risorsa NON è andata a buon fine :(
        alert('ERRORE - RISORSA NON ELIMINATA');
      }
    })
    .catch((err) => {
      console.log('ERR', err);
    });
};

// LOGICA DI MODIFICA
// troviamo il bottone modifica nella pagina dettaglio
const editButton = document.getElementById('edit-button');
editButton.addEventListener('click', function () {
  location.assign(`backoffice.html?consoleId=${consoleId}`);
});

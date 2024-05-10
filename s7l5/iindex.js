// riempie lo span "year"
document.getElementById('year').innerText = new Date().getFullYear();

// riempiamo la riga con le console
// Sostituisco "concerts" con "consoles" per riflettere la vendita di console
const generateConsoleCards = function (consolesArray) {
  const row = document.getElementById('consoles-row');
  consolesArray.forEach((console) => {
    const newCol = document.createElement('div');
    newCol.classList.add('col');
    newCol.innerHTML = `
      <div class="card h-100 d-flex flex-column">
        <img src="https://www.example.com/console-image.jpg" class="card-img-top" alt="...">
        <div class="card-body d-flex flex-column justify-content-around">
          <h5 class="card-title">${console.name}</h5>
          <p class="card-text">${console.description}</p>
          <p class="card-text">${console.brand}</p>
          <div class="d-flex justify-content-between">
            <button class="btn btn-primary">${console.price}€</button>
            <a href="details.html?consoleId=${console._id}" class="btn btn-info">INFO</a>
          </div>
        </div>
      </div>
      `;
    row.appendChild(newCol);
  });
};

const getConsoles = function () {
  // recuperiamo la lista di console attualmente nel database
  fetch('https://striveschool-api.herokuapp.com/api/product/')
    .then((response) => {
      if (response.ok) {
        console.log(response);
        return response.json();
      } else {
        throw new Error('Errore nella risposta del server');
      }
    })
    .then((array) => {
      console.log('ARRAY!', array);
      // creiamo le card per la landing page
      generateConsoleCards(array);
    })
    .catch((err) => {
      console.log('ERRORE!', err);
    });
};

getConsoles();

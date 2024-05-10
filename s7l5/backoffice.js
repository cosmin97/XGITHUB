const getConsoles = function () {
    // Recuperare la lista di console attualmente nel database
    fetch('https://striveschool-api.herokuapp.com/api/product/')
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Errore nella risposta del server');
        }
      })
      .then((array) => {
        // Creare le card per la landing page
        generateConsoleCards(array);
      })
      .catch((err) => {
        console.log('ERRORE!', err);
      });
  };
  
  const submitEvent = function (e) {
    e.preventDefault();
  
    const nameInput = document.getElementById('name');
    const descriptionInput = document.getElementById('description');
    const priceInput = document.getElementById('price');
    const brandInput = document.getElementById('brand');
  
    console.log('nameInput:', nameInput);
    console.log('descriptionInput:', descriptionInput);
    console.log('priceInput:', priceInput);
    console.log('brandInput:', brandInput);
  
    if (!nameInput || !descriptionInput || !priceInput || !brandInput) {
      console.log('Uno o più campi non sono stati trovati nel DOM');
      return;
    }
  
    const consoleFromForm = {
      name: nameInput.value,
      description: descriptionInput.value,
      price: priceInput.value,
      brand: brandInput.value,
      imageUrl: 'URL_dell_immagine' // Sostituisci 'URL_dell_immagine' con l'effettivo URL dell'immagine
    };
  
    console.log('CONSOLE DA INVIARE ALLE API', consoleFromForm);
  
    let URL = "https://striveschool-api.herokuapp.com/api/product/";
    let methodToUse = 'POST';
  
    fetch(URL, {
      method: methodToUse,
      body: JSON.stringify(consoleFromForm),
      headers: {
        'Content-type': 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjNkZTllNzgxODQ0MjAwMTUzNzU5MWIiLCJpYXQiOjE3MTUzMzM2MDcsImV4cCI6MTcxNjU0MzIwN30.3j_USJCF1vn8c_Jt9yaFgWTCMRcMCaGb7hQ9-5n9CLU'
      },
    })
      .then((response) => {
        if (response.ok) {
          alert('Console aggiunta/modificata!');
          getConsoles();
        } else {
          throw new Error('Errore nel salvataggio della console');
        }
      })
      .catch((err) => {
        console.log('ERRORE', err)
        alert(err)
      })
  }
  
  document.getElementById('console-form').addEventListener('submit', submitEvent);
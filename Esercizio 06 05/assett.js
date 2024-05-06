
class User {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }

  confrontaEtà(altroUtente) {
    if (this.age > altroUtente.age) {
      return `${this.firstName} è più vecchio di ${altroUtente.firstName}`;
    } else if (this.age < altroUtente.age) {
      return `${this.firstName} è più giovane di ${altroUtente.firstName}`;
    } else {
      return `${this.firstName} ha la stessa età di ${altroUtente.firstName}`;
    }
  }
}

// Esempio di utilizzo:
const utente1 = new User("Marco", "Rossi", 30, "Milano");
const utente2 = new User("Giulia", "Bianchi", 25, "Roma");

console.log(utente1.confrontaEtà(utente2));



class Pet {
  constructor(petName, ownerName, species, breed) {
    this.petName = petName;
    this.ownerName = ownerName;
    this.species = species;
    this.breed = breed;
  }

  stessoProprietario(altroPet) {
    return this.ownerName === altroPet.ownerName;
  }
}

function creaPet() {
  const petName = document.getElementById("petName").value;
  const ownerName = document.getElementById("ownerName").value;
  const species = document.getElementById("species").value;
  const breed = document.getElementById("breed").value;

  const pet = new Pet(petName, ownerName, species, breed);
  aggiungiPetAllaLista(pet);
}

function aggiungiPetAllaLista(pet) {
  const petList = document.getElementById("petList");
  const listItem = document.createElement("li");
  listItem.textContent = `Nome: ${pet.petName}, Proprietario: ${pet.ownerName}, Specie: ${pet.species}, Razza: ${pet.breed}`;
  petList.appendChild(listItem);
}

document.getElementById("creaPetButton").addEventListener("click", creaPet);


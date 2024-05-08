document.addEventListener('DOMContentLoaded', async function () {
    const booksRow = document.getElementById('booksRow');

    try {
        const response = await fetch('https://striveschool-api.herokuapp.com/books');
        const books = await response.json();

        books.forEach(book => {
            const card = document.createElement('div');
            card.classList.add('col-md-3', 'mb-4');

            card.innerHTML = `
                <div class="card">
                    <img src="${book.img}" class="card-img-top" alt="Cover">
                    <div class="card-body">
                        <h5 class="card-title">${book.title}</h5>
                        <p class="card-text">Price: ${book.price} €</p>
                        <button class="btn btn-danger btn-sm" onclick="removeCard(this)">Scarta</button>
                    </div>
                </div>
            `;

            booksRow.appendChild(card);
        });
    } catch (error) {
        console.error('Error fetching books:', error);
    }
});

function removeCard(button) {
    const card = button.closest('.col-md-3');
    card.remove();
}

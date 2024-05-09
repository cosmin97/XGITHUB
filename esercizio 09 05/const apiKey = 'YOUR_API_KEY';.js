const apiKey = 'YOUR_API_KEY';

async function loadImages() {
    const searchInput = document.getElementById('searchInput');
    const query = searchInput.value.trim();
    const url = `https://api.pexels.com/v1/search?query=${query}`;
    await fetchImages(url);
}

async function loadSecondaryImages() {
    const url = 'https://api.pexels.com/v1/search?query=your-secondary-query';
    await fetchImages(url);
}

async function fetchImages(url) {
    const imagesRow = document.getElementById('imagesRow');
    imagesRow.innerHTML = ''; // Clear previous images

    try {
        const response = await fetch(url, {
            headers: {
                Authorization: apiKey
            }
        });
        const { photos } = await response.json();

        photos.forEach(photo => {
            const card = createImageCard(photo);
            imagesRow.appendChild(card);
        });
    } catch (error) {
        console.error('Error fetching images:', error);
    }
}

function createImageCard(photo) {
    const card = document.createElement('div');
    card.classList.add('col-md-4', 'mb-4');

    card.innerHTML = `
        <div class="card">
            <img src="${photo.src.medium}" class="card-img-top" alt="${photo.photographer}">
            <div class="card-body">
                <h5 class="card-title">${photo.photographer}</h5>
                <p class="card-text">ID: ${photo.id}</p>
                <button class="btn btn-danger btn-sm" onclick="hideCard(this)">Hide</button>
            </div>
        </div>
    `;

    return card;
}

function hideCard(button) {
    const card = button.closest('.col-md-4');
    card.remove();
}

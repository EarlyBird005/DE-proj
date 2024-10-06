
function fetchPlaygroundDetails(cardId) {
    fetch(`http://localhost:3000/api/playground/${cardId}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById(`img-${cardId}`).src = data.img;
            document.getElementById(`playground-name-${cardId}`).textContent = data.name;
            document.getElementById(`playground-address-${cardId}`).textContent = data.address;
            document.getElementById(`playground-timing-${cardId}`).textContent = data.timing;
        })
        .catch(error => {
            console.error(`Error fetching playground details for card ${cardId}:`, error);
        });
}

for (let i = 1; i <= 5; i++) {
    fetchPlaygroundDetails(i);
}
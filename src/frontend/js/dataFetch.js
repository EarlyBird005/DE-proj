
function fetchPlaygroundDetails(cardId) {
    fetch(`http://localhost:3000/api/playground/${cardId}`)
        .then(response => response.json())
        .then(data => {
            // document.getElementById(`img-${cardId}`).src = data.img;
            document.getElementById(`pg-name-${cardId}`).textContent = data.name;
            document.getElementById(`pg-address-${cardId}`).textContent = data.address;
            document.getElementById(`pg-timing-${cardId}`).textContent = data.timing;
        })
        .catch(error => {
            console.error(`Error fetching playground details for card ${cardId}:`, error);
        });
}

for (let i = 1; i <= 9; i++) {
    fetchPlaygroundDetails(i);
}
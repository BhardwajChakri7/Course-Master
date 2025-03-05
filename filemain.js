document.addEventListener('DOMContentLoaded', () => {
    fetch('/api/data') // Example API call to fetch data from the server
        .then(response => response.json())
        .then(data => {
            console.log(data); // Handle the data received from the server
        })
        .catch(error => console.error('Error fetching data:', error));
});


document.querySelector('.burger').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('active');
});

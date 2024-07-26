document.addEventListener('DOMContentLoaded', function () {
    const rickAndMortyInput = document.getElementById('rickAndMortyInput');
    const fetchRickAndMortyButton = document.getElementById('fetchRickAndMortyButton');
    const rickAndMortyDetails = document.getElementById('rickAndMortyDetails');

    fetchRickAndMortyButton.addEventListener('click', function () {
        const characterNumber = rickAndMortyInput.value.trim();
        if (characterNumber === '') {
            alert('Por favor, digite o nome ou ID do personagem.');
            return;
        }

        rickAndMortyDetails.innerHTML = '';

        fetch(`https://rickandmortyapi.com/api/character/${characterNumber}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Personagem não encontrado.');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            const { name, id, status, origin, species, image } = data;
            const personagemName = name.charAt(0).toUpperCase() + name.slice(1);
            const personagemId = id;
            const personagemStatus = status; // Status is a string, not an array
            const personagemOrigin = origin.name; // Origin is an object, not an array

            rickAndMortyDetails.innerHTML = `
                <h2>${personagemName} (#${personagemId})</h2>
               <p>Name: ${personagemName}</p>
                <p>Status: ${personagemStatus}</p>
                <p>Origem: ${personagemOrigin}</p>
                <img src="${image}" alt="${personagemName}" />
            `;
        })
        .catch(error => {
            console.error(error);
            rickAndMortyDetails.innerHTML = `<p>${error.message}</p>`;
        });
    });
});

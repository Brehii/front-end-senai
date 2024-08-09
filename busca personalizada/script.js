// Dados simulados
const data = [
    { title: "Introdução ao JavaScript", content: "Aprenda os fundamentos do JavaScript." },
    { title: "CSS para Iniciantes", content: "Comece a estilizar suas páginas com CSS." },
    { title: "HTML5: Novidades", content: "Conheça as novas funcionalidades do HTML5." },
    { title: "Desenvolvimento Web", content: "Dicas e técnicas para se tornar um desenvolvedor web." }
];

function performSearch() {
    const searchBox = document.getElementById('searchBox');
    const query = searchBox.value.toLowerCase();
    const resultsContainer = document.getElementById('results');
    
    // Limpar resultados anteriores
    resultsContainer.innerHTML = '';

    if (query) {
        const results = data.filter(item => 
            item.title.toLowerCase().includes(query) || 
            item.content.toLowerCase().includes(query)
        );

        if (results.length > 0) {
            results.forEach(item => {
                const resultItem = document.createElement('div');
                resultItem.className = 'result-item';
                resultItem.innerHTML = `<h2>${item.title}</h2><p>${item.content}</p>`;
                resultsContainer.appendChild(resultItem);
            });
        } else {
            resultsContainer.innerHTML = '<p>Nenhum resultado encontrado.</p>';
        }
    }
}

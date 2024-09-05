document.addEventListener('DOMContentLoaded', () => {
    const searchBar = document.getElementById('search-bar');
    const searchButton = document.getElementById('search-button');
    const filterButtons = document.querySelectorAll('.filter-button');
    const publicationsList = document.getElementById('publications-list');

    searchButton.addEventListener('click', () => {
        const searchQuery = searchBar.value.toLowerCase();
        const publications = publicationsList.querySelectorAll('.publication-item');
        publications.forEach(pub => {
            const title = pub.querySelector('h3').innerText.toLowerCase();
            if (title.includes(searchQuery)) {
                pub.style.display = 'block';
            } else {
                pub.style.display = 'none';
            }
        });
    });

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');
            const publications = publicationsList.querySelectorAll('.publication-item');
            publications.forEach(pub => {
                const type = pub.getAttribute('data-type');
                const year = pub.getAttribute('data-year');
                if (filter === 'All' || type === filter || year === filter) {
                    pub.style.display = 'block';
                } else {
                    pub.style.display = 'none';
                }
            });
        });
    });
});



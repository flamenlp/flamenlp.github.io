//home 

function toggleRows() {
    const hiddenRows = document.querySelectorAll('.hidden-row');
    const viewMoreBtn = document.querySelector('.view-more');
    
    hiddenRows.forEach(row => {
        if (row.style.display === 'block') {
            row.style.display = 'none';
            viewMoreBtn.textContent = 'view more';
        } else {
            row.style.display = 'block';
            viewMoreBtn.textContent = 'view less';
        }
    });
}    


    document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Active section highlighting
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 150) {
                current = section.getAttribute('id');
            }
        });
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });
});



document.addEventListener('DOMContentLoaded', function() {
    const notificationsBox = document.querySelector('.notifications-box');
    const gallery = document.querySelector('.image-gallery');
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        const galleryBottom = gallery.offsetTop + gallery.offsetHeight;
        const headerHeight = header.offsetHeight;
        
        if (scrollPosition > galleryBottom - headerHeight) {
            notificationsBox.classList.add('fixed');
        } else {
            notificationsBox.classList.remove('fixed');
        }
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const notificationsBox = document.querySelector('.notifications-box');
    const originalTop = notificationsBox.offsetTop; // Store original position
    const fixedPosition = window.innerHeight / 2;

    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        const boxRect = notificationsBox.getBoundingClientRect();
        
        if (boxRect.top <= fixedPosition && scrollPosition < originalTop) {
            // Fix position when scrolling up and box reaches middle
            notificationsBox.classList.add('fixed');
        } else {
            // Return to original flow when scrolling down or above original position
            notificationsBox.classList.remove('fixed');
        }
    });
});



document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.gallery-item');
    let currentItem = 0;
    
    // Force immediate display of first image
    items[0].style.opacity = '1';
    items[0].style.zIndex = '1'; // Make the first item appear above others

    function nextSlide() {
        // Fade out current slide
        items[currentItem].style.opacity = '0';
        items[currentItem].style.zIndex = '-1'; // Push current image behind
        
        // Prepare the next slide
        const nextItem = (currentItem + 1) % items.length;
        items[nextItem].style.opacity = '1';
        items[nextItem].style.zIndex = '1'; // Bring next image to the front
        
        // Trigger smooth fade-in
        currentItem = nextItem;
    }
    
    // Run slideshow with precise timing
    const slideshow = setInterval(nextSlide, 5000);
});



document.addEventListener('DOMContentLoaded', function() {
    // Function to handle gallery transitions
    function rotateGallery(containerClass) {
        const items = document.querySelectorAll(`.${containerClass} .comp-gallery-item`);
        if (items.length === 0) return;

        let currentIndex = 0;

        setInterval(() => {
            items[currentIndex].classList.remove('active');
            currentIndex = (currentIndex + 1) % items.length;
            items[currentIndex].classList.add('active');
        }, 2000); // Change image every 3 seconds
    }

    // Initialize both galleries
    rotateGallery('gallery-container');
    rotateGallery('comp-gallery-container');
});




// research

document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.research-card');
    const descContainer = document.querySelector('.description-container');
    const descriptions = document.querySelectorAll('.description-box');
    
    let activeCard = null;
    
    function updateContainerHeight(targetDesc) {
        const height = targetDesc.offsetHeight;
        descContainer.style.height = `${height}px`;
    }

    cards.forEach(card => {
        card.addEventListener('click', () => {
            const research = card.dataset.research;
            const targetDesc = document.getElementById(`${research}-desc`);
            
            cards.forEach(c => c.classList.remove('active'));
            descriptions.forEach(d => d.classList.remove('active'));
            
            if (activeCard === card) {
                descContainer.style.height = '0';
                activeCard = null;
            } else {
                card.classList.add('active');
                targetDesc.classList.add('active');
                targetDesc.style.display = 'block';
                updateContainerHeight(targetDesc);
                activeCard = card;
            }
        });
    });
});



// publications


// Function to populate year dropdown
function populateYearDropdown() {
    const yearSelect = document.getElementById('yearFilter');
    const currentYear = new Date().getFullYear();
    const startYear = 2020; // You can set this to your earliest publication year
    
    yearSelect.innerHTML = '<option value="all">All Years</option>';
    
    for (let year = currentYear; year >= startYear; year--) {
        const option = document.createElement('option');
        option.value = year;
        option.textContent = year;
        yearSelect.appendChild(option);
    }
}
let currentYear = 'all';
let currentCategory = 'all';

// Search functionality
document.getElementById('searchInput').addEventListener('keyup', function() {
    let input = this.value.toLowerCase();
    let publications = document.querySelectorAll('.publication-item');
    
    publications.forEach(pub => {
        let text = pub.textContent.toLowerCase();
        pub.style.display = text.includes(input) ? '' : 'none';
    });
});

// Year filter
document.getElementById('yearFilter').addEventListener('change', function() {
    currentYear = this.value;
    applyFilters();
});

// Category filter
function filterCategory(category) {
    const buttons = document.querySelectorAll('.category-buttons button');
    const publications = document.querySelectorAll('.publication-item');
    
    // Update button styles
    buttons.forEach(button => {
        button.style.background = 'white';
        button.style.color = 'var(--primary-color)';
    });
    event.target.style.background = 'var(--primary-color)';
    event.target.style.color = 'white';
    
    // Filter publications
    publications.forEach(pub => {
        const pubCategory = pub.getAttribute('data-category');
        if (category === 'all' || pubCategory === category) {
            pub.style.display = 'block';
        } else {
            pub.style.display = 'none';
        }
    });
}


function applyFilters() {
    const publications = document.querySelectorAll('.publication-item');
    
    publications.forEach(pub => {
        let text = pub.textContent;
        let yearMatch = text.match(/\d{4}/);
        let pubYear = yearMatch ? yearMatch[0] : '';
        let category = pub.getAttribute('data-category');
        
        let yearMatches = currentYear === 'all' || pubYear === currentYear;
        let categoryMatches = currentCategory === 'all' || 
            (currentCategory === 'jounal' && category === 'journal') ||
            (currentCategory === 'conference' && category === 'conference');
        
        pub.style.display = (yearMatches && categoryMatches) ? '' : 'none';
    });
}

















function filterCategory(category) {
    const buttons = document.querySelectorAll('.category-buttons button');
    currentCategory = category;
    
    // Update button styles
    buttons.forEach(button => {
        button.style.background = 'white';
        button.style.color = 'var(--primary-color)';
    });
    event.target.style.background = 'var(--primary-color)';
    event.target.style.color = 'white';
    
    applyFilters();
}

function applyFilters() {
    const publications = document.querySelectorAll('.publication-item');
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    
    publications.forEach(pub => {
        let text = pub.textContent.toLowerCase();
        let yearMatch = text.match(/\d{4}/);
        let pubYear = yearMatch ? yearMatch[0] : '';
        let category = pub.getAttribute('data-category');
        
        let yearMatches = currentYear === 'all' || pubYear === currentYear;
        let categoryMatches = currentCategory === 'all' || category === currentCategory;
        let searchMatches = text.includes(searchInput);
        
        pub.style.display = (yearMatches && categoryMatches && searchMatches) ? '' : 'none';
    });
}

// Initialize filters
function initializeFilters() {
    populateYearDropdown();
    currentYear = 'all';
    currentCategory = 'all';
    
    // Add event listeners
    document.getElementById('yearFilter').addEventListener('change', function() {
        currentYear = this.value;
        applyFilters();
    });
    
    document.getElementById('searchInput').addEventListener('keyup', function() {
        applyFilters();
    });
}

// Call initialization when document is ready
document.addEventListener('DOMContentLoaded', initializeFilters);


















// publications

// Add this to your existing script section
const scrollBtn = document.getElementById("scrollToTop");

// Show button when user scrolls down 20px
window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
};

// Scroll to top when button clicked
scrollBtn.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});



// Contact

function toggleMap() {
    const mapContainer = document.getElementById('map-container');
    mapContainer.classList.toggle('map-visible');
}



        function togglePopup() {
            const popup = document.getElementById('contactForm');
            popup.classList.toggle('active');
        }

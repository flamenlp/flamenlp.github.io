document.addEventListener('DOMContentLoaded', function() {
    const peopleNavbarLinks = document.querySelectorAll('.people-navbar a');

    peopleNavbarLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            window.scrollTo({
                top: targetSection.offsetTop - 60, // Adjust based on the height of your header
                behavior: 'smooth'
            });
        });
    });
});

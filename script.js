document.addEventListener('DOMContentLoaded', () => {
    // Jednoduchá interakce: Po kliknutí na tlačítko "Poslat zprávu" otevře emailového klienta
    const sendEmailBtn = document.getElementById('sendEmailBtn');
    if (sendEmailBtn) {
        sendEmailBtn.addEventListener('click', () => {
            // Změňte 'vas.email@example.com' na svůj skutečný email
            window.location.href = 'mailto:kmc20170531@gmail.com?subject=Dotaz ohledně webové vizitky';
        });
    }

    // Scroll to section when nav link is clicked (plynulé scrollování)
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

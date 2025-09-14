// Menu mobile toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }
    
    // Fechar menu ao clicar em um link
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
    
    // Animação de contadores na seção "about"
    const statsSection = document.querySelector('.about-stats');
    const statNumbers = document.querySelectorAll('.stat-number');
    let counted = false;
    
    function animateCounter(element, target) {
        let current = 0;
        const increment = target / 100;
        const interval = setInterval(() => {
            current += increment;
            if (current >= target) {
                clearInterval(interval);
                element.textContent = target;
            } else {
                element.textContent = Math.round(current);
            }
        }, 20);
    }
    
    function checkScroll() {
        if (!statsSection || counted) return;
        
        const sectionPosition = statsSection.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (sectionPosition < screenPosition) {
            counted = true;
            statNumbers.forEach(stat => {
                const target = parseInt(stat.textContent);
                animateCounter(stat, target);
            });
        }
    }
    
    if (statsSection && statNumbers.length > 0) {
        window.addEventListener('scroll', checkScroll);
        // Verificar ao carregar a página (caso a seção já esteja visível)
        checkScroll();
    }
});

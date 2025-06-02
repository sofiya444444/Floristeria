// Kontrol Musik
document.addEventListener('DOMContentLoaded', function() {
    const musicToggle = document.getElementById('musicToggle');
    const bgMusic = document.getElementById('bgMusic');
    
    // Cek preferensi pengguna untuk autoplay
    let musicPlaying = false;
    
    // Buat tooltip
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    tooltip.textContent = 'Toggle Background Music';
    musicToggle.parentNode.appendChild(tooltip);
    
    
    
    // Animasi saat scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.product-card, .about-text, .about-image, .order-instructions, .contact-info');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Set initial state
    document.querySelectorAll('.product-card, .about-text, .about-image, .order-instructions, .contact-info').forEach(el => {
        el.style.opacity = '0';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Jalankan sekali saat load
    
    // Smooth scrolling untuk anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Active nav link saat scroll
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('header nav a');
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= (sectionTop - 150)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
});

// Tambahkan class active untuk styling nav link
const style = document.createElement('style');
style.textContent = `
    header nav a.active {
        color: #e67e9f !important;
    }
    header nav a.active::after {
        width: 100% !important;
    }
`;
document.head.appendChild(style);
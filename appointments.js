document.addEventListener('DOMContentLoaded', function() {
    const appointmentCards = document.querySelectorAll('.appointment-card');
    
    appointmentCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.6s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
        
        card.addEventListener('click', function() {
            const title = this.querySelector('h3').textContent;
            const type = this.querySelector('.appointment-type').textContent;
            const time = this.querySelector('.appointment-time').textContent;
            const duration = this.querySelector('.appointment-duration').textContent;
            
            const message = `Appointment Details:\n\n` +
                          `Provider: ${title}\n` +
                          `Type: ${type}\n` +
                          `Time: ${time}\n` +
                          `Duration: ${duration}`;
            
            alert(message);
        });
        
        card.addEventListener('mouseenter', function() {
            this.querySelector('.card-header').style.background = 
                'linear-gradient(135deg, #7cc7e8 0%, #6bb8e0 100%)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.querySelector('.card-header').style.background = 
                'linear-gradient(135deg, #a8d8ea 0%, #8cc8e8 100%)';
        });
    });
    
    const animateOnScroll = () => {
        appointmentCards.forEach(card => {
            const rect = card.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
            
            if (isVisible) {
                card.classList.add('visible');
            }
        });
    };
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll();
    
    console.log('Appointment Examples loaded successfully!');
});
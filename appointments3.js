document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.c-card');
    
    // Initialize intersection observer for scaling animation only
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const wCard = entry.target.querySelector('.w-card');
            const progress = entry.intersectionRatio;
            
            // Calculate scale based on intersection ratio
            // Scale from 1 to 0.9 as the card goes from 40% to 100% intersection
            let scale = 1;
            if (progress > 0.4) {
                const scaleProgress = (progress - 0.4) / 0.6;
                scale = 1 - (scaleProgress * 0.1); // Scale from 1 to 0.9 (less aggressive)
            }
            
            // Apply the scale transform to the inner card only
            wCard.style.transform = `scale(${scale})`;
        });
    }, observerOptions);
    
    // Observe each card
    cards.forEach(card => {
        observer.observe(card);
        
        // Add click interaction
        card.addEventListener('click', function() {
            const cardNumber = this.querySelector('.card-number').textContent;
            const doctorName = this.querySelector('h2').textContent;
            const date = this.querySelector('.appointment-date').textContent;
            const time = this.querySelector('.appointment-time').textContent;
            const type = this.querySelector('.appointment-type').textContent;
            const location = this.querySelector('.appointment-location').textContent;
            const duration = this.querySelector('.duration').textContent;
            const status = this.querySelector('.status').textContent;
            
            const message = `APPOINTMENT #${cardNumber}\n\n` +
                          `Provider: ${doctorName}\n` +
                          `Date: ${date}\n` +
                          `Time: ${time}\n` +
                          `Type: ${type}\n` +
                          `Location: ${location}\n` +
                          `Duration: ${duration}\n` +
                          `Status: ${status}`;
            
            alert(message);
        });
        
        // Add hover effects to inner card only
        const wCard = card.querySelector('.w-card');
        card.addEventListener('mouseenter', function() {
            wCard.style.boxShadow = '0 15px 50px rgba(0, 0, 0, 0.3)';
            wCard.style.transform = wCard.style.transform + ' translateY(-3px)';
        });
        
        card.addEventListener('mouseleave', function() {
            wCard.style.boxShadow = '0 10px 40px rgba(0, 0, 0, 0.2)';
            // Remove the translateY but keep the scale
            const currentScale = wCard.style.transform.match(/scale\([^)]*\)/);
            wCard.style.transform = currentScale ? currentScale[0] : 'scale(1)';
        });
    });
    
    console.log('Sticky Stacking Cards loaded successfully!');
});
document.addEventListener('DOMContentLoaded', function() {
    const appointmentCards = document.querySelectorAll('.appointment-card-minimal');
    
    // Initialize cards in collapsed state
    appointmentCards.forEach((card, index) => {
        card.classList.add('collapsed');
        card.style.opacity = '0';
        card.style.transform = 'translateY(10px)';
        
        // Add doctor name preview and expand indicator to header
        const header = card.querySelector('.card-header-minimal');
        const doctorName = card.querySelector('h3').textContent;
        
        const doctorPreview = document.createElement('span');
        doctorPreview.className = 'doctor-name-preview';
        doctorPreview.textContent = doctorName;
        
        const expandIndicator = document.createElement('span');
        expandIndicator.className = 'expand-indicator';
        expandIndicator.textContent = '▼';
        
        header.appendChild(doctorPreview);
        header.appendChild(expandIndicator);
        
        // Animate in
        setTimeout(() => {
            card.style.transition = 'all 0.4s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
        
        // Click handler for expand/collapse
        card.addEventListener('click', function() {
            if (this.classList.contains('collapsed')) {
                // Collapse all other cards first
                appointmentCards.forEach(otherCard => {
                    if (otherCard !== this && otherCard.classList.contains('expanded')) {
                        otherCard.classList.remove('expanded');
                        otherCard.classList.add('collapsed');
                    }
                });
                
                // Expand this card
                this.classList.remove('collapsed');
                this.classList.add('expanded');
            } else {
                // Collapse this card
                this.classList.remove('expanded');
                this.classList.add('collapsed');
            }
        });
        
        // Hover effects only for collapsed cards
        card.addEventListener('mouseenter', function() {
            if (this.classList.contains('collapsed')) {
                this.style.transform = 'translateY(-1px)';
                this.style.boxShadow = '0 3px 8px rgba(0, 0, 0, 0.12)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            if (this.classList.contains('collapsed')) {
                this.style.transform = 'translateY(0)';
                this.style.boxShadow = '0 2px 6px rgba(0, 0, 0, 0.08)';
            }
        });
    });
    
    console.log('Stacked Appointment Cards loaded successfully!');
});
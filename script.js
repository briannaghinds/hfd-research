document.addEventListener('DOMContentLoaded', function() {
    const tabLinks = document.querySelectorAll('.tab-link');
    
    tabLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Hide all sections
        const sections = document.querySelectorAll('.section');
        sections.forEach(section => {
          section.classList.remove('active');
        });
        
        // Remove active class from all tabs
        tabLinks.forEach(tab => {
          tab.classList.remove('active');
        });
        
        // Add active class to clicked tab
        this.classList.add('active');
        
        // Show the target section
        const targetSection = document.getElementById(this.getAttribute('data-target'));
        targetSection.classList.add('active');
      });
    });
  });
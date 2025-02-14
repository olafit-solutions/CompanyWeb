document.addEventListener('DOMContentLoaded', () => {
    // Handle welcome screen
    setTimeout(() => {
        const welcomeScreen = document.querySelector('.welcome-screen');
        const mainContent = document.querySelector('.main-content');
        
        welcomeScreen.style.opacity = '0';
        welcomeScreen.style.transition = 'opacity 1s ease-out';
        
        setTimeout(() => {
            welcomeScreen.style.display = 'none';
            mainContent.classList.remove('hidden');
            mainContent.style.opacity = '1';
            mainContent.style.transition = 'opacity 1s ease-in';
        }, 1000);
    }, 3000); // Welcome screen shows for 3 seconds

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
                // Close mobile menu if open
                document.querySelector('.nav-links').classList.remove('active');
            }
        });
    });

    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Handle course enrollment
    const modal = document.getElementById('enrollmentModal');
    const enrollButtons = document.querySelectorAll('.enroll-button');
    const closeModal = document.querySelector('.close-modal');
    const enrollmentForm = document.getElementById('enrollmentForm');

    enrollButtons.forEach(button => {
        button.addEventListener('click', () => {
            const courseCard = button.closest('.course-card');
            const courseName = courseCard.querySelector('h3').textContent;
            const coursePrice = courseCard.querySelector('.price').textContent;
            
            document.getElementById('selectedCourse').textContent = courseName;
            document.getElementById('coursePrice').textContent = coursePrice;
            modal.style.display = 'block';
        });
    });

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    enrollmentForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Here you would typically handle the form submission
        // For now, we'll just show an alert
        alert('Thank you for enrolling! We will contact you shortly with payment details.');
        modal.style.display = 'none';
        enrollmentForm.reset();
    });
}); 
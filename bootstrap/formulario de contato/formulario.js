document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        clearFeedbacks();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        
        let valid = true;

        if (name === '') {
            showFeedback('nameFeedback');
            valid = false;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
        if (email === '' || !emailPattern.test(email)) {
            showFeedback('emailFeedback');
            valid = false;
        }

        if (message === '') {
            showFeedback('messageFeedback');
            valid = false;
        }

        if (valid) {
            alert('Formulário enviado com sucesso!');
            form.reset();
        }
    });

    function showFeedback(id) {
        const feedback = document.getElementById(id);
        feedback.style.display = 'block';
    }

    function clearFeedbacks() {
        document.querySelectorAll('.form-feedback').forEach(el => {
            el.style.display = 'none';
        });
    }
});
document.addEventListener('DOMContentLoaded', () => {
    const btnCta = document.querySelectorAll('a[href="#cta"]');
    const formSection = document.getElementById('formulario-inscricao');

    btnCta.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            // Mostra o formulário
            if (formSection) {
                formSection.style.display = 'block';
                // Move a página até ele
                formSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Opcional: Feedback ao enviar o formulário
    const form = document.getElementById('lista-espera');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Obrigado! Entraremos em contato em breve.');
            form.reset();
        });
    }
});
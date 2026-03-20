// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector(anchor.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
});

// Destaque no menu ao scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.section');
    const links = document.querySelectorAll('.nav-links a');

    let current = '';
    sections.forEach(section => {
        const top = section.offsetTop - 100;
        if (pageYOffset >= top) current = section.id;
    });

    links.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) link.classList.add('active');
    });
});

// Formulário com validação e feedback
const form = document.getElementById('contact-form');
const feedback = document.getElementById('form-feedback');

if (form) {
    form.addEventListener('submit', e => {
        e.preventDefault();

        const nome = document.getElementById('nome').value.trim();
        const email = document.getElementById('email').value.trim();
        const tel = document.getElementById('telefone').value.trim();
        const msg = document.getElementById('mensagem').value.trim();

        if (!nome || !email.includes('@') || !tel || !msg) {
            feedback.textContent = 'Preencha todos os campos corretamente.';
            feedback.style.color = '#ff4d4d';
            return;
        }

        feedback.textContent = 'Enviando...';
        feedback.style.color = '#fff';

        // Simulação de envio (troque por fetch real com Formspree)
        setTimeout(() => {
            feedback.textContent = 'Mensagem enviada! Entraremos em contato em breve.';
            feedback.style.color = '#25D366';
            form.reset();
        }, 1500);
    });
}

// Lightbox para galeria
document.querySelectorAll('.gallery-item img').forEach(img => {
    img.addEventListener('click', () => {
        const lightbox = document.getElementById('lightbox');
        document.getElementById('lightbox-img').src = img.src;
        document.getElementById('lightbox-caption').textContent = img.alt;
        lightbox.style.display = 'flex';
    });
});

document.querySelector('.lightbox .close')?.addEventListener('click', () => {
    document.getElementById('lightbox').style.display = 'none';
});
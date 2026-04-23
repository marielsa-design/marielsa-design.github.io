const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 1500,
    reset: false
});

sr.reveal('.section-title', { delay: 100 });
sr.reveal('.sobre-mi-img', { origin: 'left', delay: 200 });
sr.reveal('.sobre-mi-texto', { origin: 'right', delay: 300 });
sr.reveal('.skills-data', { interval: 150 });
sr.reveal('.badge-card', { interval: 100 });
sr.reveal('.timeline-card', { interval: 150 });
sr.reveal('.proyectos-card', { interval: 200 });
sr.reveal('.contacto-card', { interval: 150 });
sr.reveal('.contacto-form', { origin: 'right', delay: 200 });
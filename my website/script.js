document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('property-modal');
    const closeBtn = document.querySelector('.close-btn');
    const detailsBtns = document.querySelectorAll('.details-btn');

    // Abrir Modal con detalles de propiedad
    detailsBtns.forEach(button => {
        button.addEventListener('click', () => {
            modal.style.display = 'block';
            // Aquí se podría cargar dinámicamente los detalles de la propiedad
        });
    });

    // Cerrar Modal
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Cerrar Modal al hacer clic fuera de él
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Scroll Suave a las secciones
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
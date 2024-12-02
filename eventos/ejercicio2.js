document.addEventListener('DOMContentLoaded', () => {
    // Mostrar/Ocultar contenido
    const toggleLinks = document.querySelectorAll('.toggle-link');
    toggleLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const paragraphId = link.dataset.id;
            const paragraph = document.getElementById(paragraphId);
            const extraContent = paragraph.querySelector('.extra');
            
            if (extraContent.style.display === 'none' || extraContent.style.display === '') {
                extraContent.style.display = 'inline';
                link.textContent = `Ocultar contenido ${paragraphId}`;
            } else {
                extraContent.style.display = 'none';
                link.textContent = `Mostrar contenido ${paragraphId}`;
            }
        });
    });

    // Control de tamaño de letra
    const defaultFontSize = 16; // Tamaño de letra por defecto
    const controls = document.querySelectorAll('.controls');
    controls.forEach(controlGroup => {
        const buttons = controlGroup.querySelectorAll('button');
        buttons.forEach(button => {
            button.addEventListener('click', () => {
                const paragraphId = button.dataset.id;
                const paragraph = document.getElementById(paragraphId);

                if (button.classList.contains('btn-increase')) {
                    const currentSize = parseInt(window.getComputedStyle(paragraph).fontSize);
                    paragraph.style.fontSize = `${currentSize + 2}px`;
                } else if (button.classList.contains('btn-decrease')) {
                    const currentSize = parseInt(window.getComputedStyle(paragraph).fontSize);
                    paragraph.style.fontSize = `${currentSize - 2}px`;
                } else if (button.classList.contains('btn-reset')) {
                    paragraph.style.fontSize = `${defaultFontSize}px`;
                }
            });
        });
    });
});

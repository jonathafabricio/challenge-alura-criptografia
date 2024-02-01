const buttons = document.querySelectorAll('.btn-anim');

buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.classList.add('hover');
    });

    button.addEventListener('mouseleave', () => {
        button.classList.remove('hover');
    });
});
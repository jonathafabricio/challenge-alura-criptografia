document.addEventListener('DOMContentLoaded', function () {
    const textArea = document.querySelector('.input__textarea');
    const placeholderText = "Digite aqui seu texto";
    let i = 0;

    function typeWriter() {
        if (i < placeholderText.length) {
            textArea.setAttribute('placeholder', textArea.getAttribute('placeholder') + placeholderText.charAt(i));
            i++;
            setTimeout(typeWriter, 100);
        } else {

            setTimeout(() => {
                textArea.setAttribute('placeholder', '');
                i = 0;
                typeWriter();
            }, 2000);
        }
    }

    typeWriter();
});

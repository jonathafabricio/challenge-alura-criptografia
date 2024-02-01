document.addEventListener('DOMContentLoaded', function () {
    const textarea = document.querySelector('.input__textarea');
    const encryptButton = document.querySelector('.input__button a:nth-child(1)');
    const decryptButton = document.querySelector('.input__button a:nth-child(2)');
    const outputTitle = document.querySelector('.output__titulo');
    const outputDescription = document.querySelector('.output__descricao');
    const copyButton = document.querySelector('.output__button button');
    const modal = document.getElementById('myModal');
    const closeModal = document.getElementsByClassName('close')[0];

    textarea.addEventListener('input', updateButtonState);

    encryptButton.addEventListener('click', () => {
        if (textareaIsEmpty()) {
            showModal();
        } else {
            const inputText = textarea.value.trim().toLowerCase();
            const encryptedText = encrypt(inputText);
            displayResult(encryptedText);
        }
    });

    decryptButton.addEventListener('click', () => {
        if (textareaIsEmpty()) {
            showModal();
        } else {
            const inputText = textarea.value.trim().toLowerCase();
            const decryptedText = decrypt(inputText);
            displayResult(decryptedText);
        }
    });

    copyButton.addEventListener('click', () => {
        const resultText = outputTitle.textContent;
        copyToClipboard(resultText);
        copyButton.textContent = 'Copiado!';

        setTimeout(() => {
            copyButton.textContent = 'Copiar Texto';
        }, 2000);
    });

    closeModal.onclick = function() {
        modal.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }

    function showModal() {
        modal.style.display = 'block';
    }

    function encrypt(text) {
        return text
            .replace(/e/g, 'enter')
            .replace(/i/g, 'imes')
            .replace(/a/g, 'ai')
            .replace(/o/g, 'ober')
            .replace(/u/g, 'ufat');
    }

    function decrypt(text) {
        return text
            .replace(/enter/g, 'e')
            .replace(/imes/g, 'i')
            .replace(/ai/g, 'a')
            .replace(/ober/g, 'o')
            .replace(/ufat/g, 'u');
    }

    function displayResult(text) {
        outputTitle.textContent = text;
        outputDescription.textContent = `Texto ${encryptButton.classList.contains('active') ? 'criptografado' : 'descriptografado'}`;
    }

    function copyToClipboard(text) {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
    }

    function textareaIsEmpty() {
        return textarea.value.trim().length === 0;
    }

    function updateButtonState() {
        const text = textarea.value.trim();
        encryptButton.classList.toggle('disabled', text.length === 0);
        decryptButton.classList.toggle('disabled', text.length === 0);
    }

    updateButtonState();
});

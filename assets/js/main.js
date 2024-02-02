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
            showModal('Por favor, digite algo.');
        } else if (!isValidInput(textarea.value)) {
            showModal('Por favor, insira apenas letras minúsculas, e/ou remova os caracteres especiais.');
        } else {
            const inputText = textarea.value.trim();
            const encryptedText = encrypt(inputText);
            displayResult(encryptedText);
        }
    });

    decryptButton.addEventListener('click', () => {
        if (textareaIsEmpty()) {
            showModal('Por favor, digite algo.');
        } else if (!isValidInput(textarea.value)) {
            showModal('Por favor, insira apenas letras minúsculas, e/ou remova os caracteres especiais.');
        } else {
            const inputText = textarea.value.trim();
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

    function showModal(message) {
        modal.style.display = 'block';
        document.getElementById('modalMessage').textContent = message;
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
        const isValid = isValidInput(text);
        encryptButton.classList.toggle('disabled', text.length === 0 || !isValid);
        decryptButton.classList.toggle('disabled', text.length === 0 || !isValid);
    }

    function isValidInput(text) {
        const regex = /^[a-z\s]*$/;
        return regex.test(text);
    }

    updateButtonState();
});

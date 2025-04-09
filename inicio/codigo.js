// Seleciona os elementos
const contactLink = document.querySelector('a[href="#contact"]');
const contactPopup = document.getElementById('contact-popup');
const closeContactButton = document.getElementById('close-contact');

// Abre a aba de contato ao clicar no link
contactLink.addEventListener('click', (event) => {
    event.preventDefault(); // Evita o comportamento padrão do link
    contactPopup.classList.add('visible');
});

// Fecha a aba de contato ao clicar no botão "Fechar"
closeContactButton.addEventListener('click', () => {
    contactPopup.classList.remove('visible');
});
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

const books = [
    {
        cover: 'imagens/The Storm Fall.png',
        title: 'The Storm Fall',
        sinopse: "E viu-se no céu um grande sinal: uma tempestade caiu sobre a Terra, e com ela vieram os ecos do princípio e do fim. Seis jovens foram levados além do tempo, forçados a enfrentar forças que desafiam a própria criação. Para impedir a ascensão de algo que não deveria existir, precisam reunir os Fragmentos da Joia do Éden, um artefato cujos pedaços se espalharam pelo tempo. Mas cada batalha travada, cada inimigo derrotado, é apenas um prenúncio do que realmente se aproxima. Os anjos observam. Os demônios se preparam. O mundo se move rumo a um destino inevitável. A tempestade caiu. E aquilo que dorme… está despertando.",
        link: '',
        video: 'background.webm'
    },
    {
        cover: 'imagens/The Mystic.png',
        title: 'The Mystic',
        sinopse: "No princípio, não havia tempo. Apenas sussurros entre as árvores e olhos ocultos no escuro. Ali, no lugar onde a Criação não ousa entrar, algo antigo desperta. Após o desaparecimento de seu pai, o detetive Jim McKenzie, o jovem Aidan mergulha em uma espiral de loucura, medo e revelações proibidas. Sozinho, em uma cidade cercada pela floresta mais assombrada do mundo, ele começa a descobrir segredos que jamais deveriam ser encontrados. Ecos de rituais falhos, criaturas que tomam formas humanas, olhos que observam nas sombras — tudo parece apontar para uma fenda na realidade: O Místico. Enquanto isso, Jim enfrenta um mal ancestral que se alimenta da sanidade dos homens e ressurge dos escombros da fé. Preso entre visões e pesadelos, ele luta contra o tempo, contra o silêncio e contra si mesmo.",
        link: '',
        video: 'tm.webm'
    }
    // Adicione mais livros conforme necessário
];

const selection = document.getElementById('book-selection');
const carousel = document.getElementById('book-carousel');
const bg = document.getElementById('carousel-bg');
let cover = document.getElementById('carousel-book-cover');
const title = document.getElementById('carousel-title');
const sinopse = document.getElementById('carousel-sinopse');
const link = document.getElementById('carousel-link');
const prev = document.getElementById('carousel-prev');
const next = document.getElementById('carousel-next');
const close = document.getElementById('carousel-close');
const fade = document.getElementById('carousel-fade');

let current = 0;

function slideTo(index, direction = 1) {
    // Ativa o fade preto
    fade.classList.add('active');

    setTimeout(() => {
        // ...código de troca de slide (igual ao seu)
        const oldCover = cover;
        const newCover = cover.cloneNode();
        const book = books[index];

        newCover.src = book.cover;
        newCover.className = 'carousel-slide ' + (direction === 1 ? 'slide-in-right' : 'slide-in-left');
        oldCover.parentNode.insertBefore(newCover, oldCover);

        void newCover.offsetWidth;

        oldCover.classList.add(direction === 1 ? 'slide-out-left' : 'slide-out-right');
        newCover.classList.remove('slide-in-right', 'slide-in-left');
        newCover.classList.add('slide-in');

        // Atualiza info
        bg.src = book.video;
        title.textContent = book.title;
        sinopse.textContent = book.sinopse;
        link.href = book.link;
        carousel.classList.remove('hidden');

        setTimeout(() => {
            oldCover.parentNode.removeChild(oldCover);
            cover = newCover;
            current = index;
            // Desativa o fade preto
            fade.classList.remove('active');
        }, 500);
    }, 200); // tempo do fade-in antes de trocar
}

function openCarousel(index) {
    selection.classList.add('hidden');
    slideTo(index, 1);
}

function closeCarousel() {
    carousel.classList.add('hidden');
    selection.classList.remove('hidden');
}

// Troca para o próximo livro
next.onclick = () => slideTo((current + 1) % books.length, 1);
// Troca para o anterior
prev.onclick = () => slideTo((current - 1 + books.length) % books.length, -1);
// Abrir carrossel
selection.querySelectorAll('.book-cover').forEach((img, idx) => {
    img.addEventListener('click', () => openCarousel(idx));
});
// Fechar carrossel
close.onclick = closeCarousel;



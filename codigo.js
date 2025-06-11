document.addEventListener('DOMContentLoaded', function() {}
)
const books = [
    {
        cover: 'imagens/The Storm Fall.png',
        title: 'The Storm Fall',
        sinopse: "E viu-se no céu um grande sinal: uma tempestade caiu sobre a Terra, e com ela vieram os ecos do princípio e do fim. Seis jovens foram levados além do tempo, forçados a enfrentar forças que desafiam a própria criação. Para impedir a ascensão de algo que não deveria existir, precisam reunir os Fragmentos da Joia do Éden, um artefato cujos pedaços se espalharam pelo tempo. Mas cada batalha travada, cada inimigo derrotado, é apenas um prenúncio do que realmente se aproxima. Os anjos observam. Os demônios se preparam. O mundo se move rumo a um destino inevitável. A tempestade caiu. E aquilo que dorme… está despertando.",
        personagens: [
            { nome: 'Gustavo', imagem: 'imagens/eu.png', descricao: 'Gustavo conhece muito bem a dor da perda. A morte o acompanhou durante toda a sua vida, junto com o sofrimento e culpa. Por isso ele não se importa nenhum um pouco em se sacrificar para poder manter o bem daqueles que o cercam. Ficar sozinho de novo pode ser o maior medo de alguém que tanto já perdeu.' },
            { nome: 'Carol', imagem: 'imagens/carol.png', descricao: 'Carol tenta ser melhor toda vez, não voltar a cometer os mesmo erros, por mais que ela escorregue no meio do caminho. Seus traumas e passado jamais a deixarão, assim como suas ações. Mas ela ainda está disposta a lutar para melhorar. Ou só para não perder quem ama novamente.' },
            {nome: 'Dayllon', imagem: 'imagens/dayllon.png', descricao: 'Dayllon tem muitos traumas em seu passado, e sabe que não pode salvar todo mundo. Mas isso não o impede de continuar tentando, nem que ele tenha que se sacrificar para que isso aconteça. Pelo menos ele tem a esperança de que isso aconteça.' },
            { nome: 'Laura', imagem: 'imagens/laura.png', descricao: 'E apesar de tudo, no fim, Laura tem um bom coração. Ela só tem medo de cometer ou ver os outros cometendo os mesmos erros que ela novamente. Por isso acaba sendo rígida, como forma de não deixar as coisas saírem do controle.' },
            { nome: 'Hudson', imagem: 'imagens/H.png', descricao: 'Ele aprendeu a usá-lo muito rápido, o que mostra uma inteligência alta, pois não havia quem o ensinasse. Ele quase sempre será o primeiro a descobrir algo importante, o que o torna uma peça fundamental na vitória de todos. ' },
            { nome: 'Ana', imagem: 'imagens/ana.png', descricao: 'Ana já teve que lidar com muita pressão, e por boa parte de sua vida, carregou uma certa tristeza que nunca ia embora. Ela chegou muito perto de perder sua fé, mas algo a fez ter vontade de lutar e não desistir. E agora, mais do que nunca, Ana tem que ser forte para lidar com os problemas que estão por vir.' }
        ],
        curiosidades: [
            'O livro surgiu a partir de uma música.',
            '.'
        ],
        links: [
            { tipo: 'Comprar', url: 'https://www.amazon.com.br/Storm-Fall-Writers-Story-Portuguese/dp/6501414393/ref=tmm_pap_swatch_0?tag=operagx-continueon-br-20', texto: 'Livro Físico - Amazon' },
            { tipo: 'Comprar', url: 'https://saint-cat.lojaintegrada.com.br/the-storm-fall', texto: 'Livro Físico - Loja Integrada' },
            { tipo: 'Comprar', url: 'https://www.amazon.com.br/Storm-Fall-Writers-Story-Livro-ebook/dp/B0F4Q9Y4RR/ref=rvi_d_sccl_1/147-3430119-5355749?pd_rd_w=KDJX4&content-id=amzn1.sym.5a5fdb9d-0c9f-4ef8-98d5-3da45c0cade0&pf_rd_p=5a5fdb9d-0c9f-4ef8-98d5-3da45c0cade0&pf_rd_r=KKN5YCP97Y8RBDR09SXZ&pd_rd_wg=c6BiO&pd_rd_r=5d21e391-9c12-4772-b60d-cc5032208836&pd_rd_i=B0F4Q9Y4RR&psc=1&tag=operagx-continueon-br-20', texto: 'E-Book - Amazon' },
            { tipo: 'Comprar', url: 'https://hotmart.com/pt-br/marketplace/produtos/the-storm-fall/G99091689K?sck=HOTMART_SITE&src=', texto: 'E-Book - Hotmart' },
            { tipo: 'Amostra', url: 'downloads/The Storm Fall (Prólogo).pdf', texto: 'Leia uma amostra' }
        ],
        video: 'videos/background.webm'
    },
    {
        cover: 'imagens/The Mystic.png',
        title: 'The Mystic',
        sinopse: "No princípio, não havia tempo. Apenas sussurros entre as árvores e olhos ocultos no escuro. Ali, no lugar onde a Criação não ousa entrar, algo antigo desperta. Após o desaparecimento de seu pai, o detetive Jim McKenzie, o jovem Aidan mergulha em uma espiral de loucura, medo e revelações proibidas. Sozinho, em uma cidade cercada pela floresta mais assombrada do mundo, ele começa a descobrir segredos que jamais deveriam ser encontrados. Ecos de rituais falhos, criaturas que tomam formas humanas, olhos que observam nas sombras — tudo parece apontar para uma fenda na realidade: O Místico. Enquanto isso, Jim enfrenta um mal ancestral que se alimenta da sanidade dos homens e ressurge dos escombros da fé. Preso entre visões e pesadelos, ele luta contra o tempo, contra o silêncio e contra si mesmo.",
        link: '',
        video: 'videos/tm.webm'
    }
    // Adicione mais livros conforme necessário
];

const selection = document.getElementById('book-selection');
const carousel = document.getElementById('book-carousel');
const bg = document.getElementById('carousel-bg');
let cover = document.getElementById('carousel-book-cover');
const title = document.getElementById('carousel-title');
const sinopse = document.getElementById('carousel-sinopse');
const prev = document.getElementById('carousel-prev');
const next = document.getElementById('carousel-next');
const close = document.getElementById('carousel-close');
const fade = document.getElementById('carousel-fade');
const info = document.querySelector('.carousel-info');

let current = 0;
let isSliding = false;

function slideTo(index, direction = 1) {
    if (isSliding) return;
    isSliding = true;

    // Ativa o fade preto
    fade.classList.add('active');

    setTimeout(() => {
        // Fade-out do texto
        info.classList.remove('visible');

        setTimeout(() => {
            // Troca o slide/capa normalmente
            const oldCover = cover;
            const newCover = cover.cloneNode();
            const book = books[index];

            newCover.src = book.cover;
            newCover.className = 'carousel-slide ' + (direction === 1 ? 'slide-in-right' : 'slide-in-left');
            oldCover.parentNode.insertBefore(newCover, oldCover);

            newCover.onclick = () => {
                showBookTransition(book.title, () => {
                    openBookDetailsPage(book);
                });
            };
            newCover.style.cursor = "pointer";

            void newCover.offsetWidth;

            oldCover.classList.add(direction === 1 ? 'slide-out-left' : 'slide-out-right');
            newCover.classList.remove('slide-in-right', 'slide-in-left');
            newCover.classList.add('slide-in');

            // Troca o fundo e o texto
            bg.src = book.video;
            title.textContent = book.title;
            sinopse.textContent = book.sinopse;

            // Fade-in do texto novo
            setTimeout(() => {
                info.classList.add('visible');
            }, 50);

            carousel.classList.remove('hidden');

            setTimeout(() => {
                oldCover.parentNode.removeChild(oldCover);
                cover = newCover;
                current = index;
                fade.classList.remove('active');
                isSliding = false;
            }, 1500); // igual ao tempo do transition!
        }, 400); // tempo do fade-out do texto
    }, 200); // tempo do fade-in antes de trocar
}

function openCarousel(index) {
    selection.classList.add('hidden');
    slideTo(index, 1);
    carousel.classList.remove('hidden');
}

function closeCarousel() {
    carousel.classList.add('hidden');
    selection.classList.remove('hidden');
}

// Navegação
next.onclick = () => slideTo((current + 1) % books.length, 1);
prev.onclick = () => slideTo((current - 1 + books.length) % books.length, -1);
document.querySelectorAll('.book-cover').forEach((img, idx) => {
    img.addEventListener('click', () => openCarousel(idx));
});
close.onclick = closeCarousel;

// Scroll com mouse
carousel.addEventListener('wheel', function(e) {
    if (e.deltaY > 0) {
        slideTo((current + 1) % books.length, 1);
    } else if (e.deltaY < 0) {
        slideTo((current - 1 + books.length) % books.length, -1);
    }
    e.preventDefault();
}, { passive: false });

// Transição preta com título
function showBookTransition(title, callback) {
    const overlay = document.getElementById('book-transition');
    const overlayTitle = document.getElementById('book-transition-title');
    overlayTitle.textContent = title; '<h1>The Storm Fall</h1>';
    overlay.classList.remove('hidden');
    setTimeout(() => {
        overlay.classList.add('active');
        setTimeout(() => {
            overlay.classList.remove('active');
            setTimeout(() => {
                overlay.classList.add('hidden');
                if (callback) callback();
            }, 700); // tempo do fade-out
        }, 1000); // tempo que a tela preta fica visível
    }, 10);
}

function openBookDetailsPage(book) {
    document.getElementById('details-title').textContent = book.title; 
    document.getElementById('details-sinopse').textContent = book.sinopse;

    // Curiosidades
    const curiosidadesUl = document.getElementById('details-curiosidades');
    curiosidadesUl.innerHTML = '';
    if (book.curiosidades && book.curiosidades.length) {
        book.curiosidades.forEach(c => {
            curiosidadesUl.innerHTML += `<li>${c}</li>`;
        });
    } else {
        curiosidadesUl.innerHTML = '<li>Nenhuma curiosidade cadastrada.</li>';
    }

    // Links
    const linksDiv = document.getElementById('details-links');
    linksDiv.innerHTML = '';
    if (book.links && book.links.length) {
        book.links.forEach(l => {
            linksDiv.innerHTML += `<a href="${l.url}" target="_blank" class="details-link">${l.texto}</a> `;
        });
    } else {
        linksDiv.innerHTML = '<p>Nenhum link disponível.</p>';
    }

    // Atualiza personagens
    carregarPersonagensDoLivro(book);

    // Exibe a página de detalhes
    const detailsPage = document.getElementById('book-details-page');
    detailsPage.classList.remove('hidden');
    setTimeout(() => detailsPage.classList.add('active'), 10);

    carousel.classList.add('hidden');
    selection.classList.add('hidden');
}
document.getElementById('close-details-page').onclick = () => {
    const detailsPage = document.getElementById('book-details-page');
    detailsPage.classList.remove('active');
    setTimeout(() => detailsPage.classList.add('hidden'), 700);

    carousel.classList.remove('hidden');
    selection.classList.remove('hidden');
};

let personagemAtual = 0;
let personagens = [];
let personagemAnimando = false;

function mostrarPersonagem() {
    if (!personagens.length) return;
    const p = personagens[personagemAtual];
    document.getElementById('personagem-img').src = p.imagem;
    document.getElementById('personagem-img').alt = p.nome;
    document.getElementById('personagem-nome').textContent = p.nome;
    document.getElementById('personagem-desc').textContent = p.descricao;
    document.querySelector('.personagens-area').style.background =
        p.bg ? p.bg : 'linear-gradient(120deg, #00aeff 0%, #181818 100%)';
}

function animarPersonagem(direcao) {
    if (personagemAnimando) return;
    personagemAnimando = true;
    const destaque = document.getElementById('personagem-destaque');
    destaque.classList.remove('anim-in-left', 'anim-in-right', 'anim-out-left', 'anim-out-right');
    destaque.classList.add(direcao === 'esq' ? 'anim-out-left' : 'anim-out-right');
    setTimeout(() => {
        mostrarPersonagem();
        destaque.classList.remove('anim-out-left', 'anim-out-right');
        destaque.classList.add(direcao === 'esq' ? 'anim-in-right' : 'anim-in-left');
        setTimeout(() => {
            destaque.classList.remove('anim-in-left', 'anim-in-right');
            personagemAnimando = false;
        }, 500);
    }, 400);
}

document.getElementById('personagem-prev').onclick = () => {
    if (personagemAnimando) return;
    personagemAtual = (personagemAtual - 1 + personagens.length) % personagens.length;
    animarPersonagem('esq');
};
document.getElementById('personagem-next').onclick = () => {
    if (personagemAnimando) return;
    personagemAtual = (personagemAtual + 1) % personagens.length;
    animarPersonagem('dir');
};

function carregarPersonagensDoLivro(livro) {
    personagens = livro.personagens || [];
    personagemAtual = 0;
    mostrarPersonagem();
}

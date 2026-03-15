/* HERO SLIDER */
const slidesHannah = document.getElementById("slidesHannah");
const totalHero = 8; 
let index = 0;

// Carregar Imagens do Hero
for (let i = 1; i <= totalHero; i++) {
    const img = document.createElement("img");
    img.src = `hero/foto${i}.jpg`;
    slidesHannah.appendChild(img);
}

function atualizarSlide() {
    slidesHannah.style.transform = `translateX(-${index * 100}%)`;
}

function mudarSlide(dir) {
    index = (index + dir + totalHero) % totalHero;
    atualizarSlide();
    resetAuto();
}

let auto = setInterval(() => mudarSlide(1), 7000);

function resetAuto() {
    clearInterval(auto);
    auto = setInterval(() => mudarSlide(1), 7000);
}

/* --- RESULTADOS SLIDER --- */
const slidesResultados = document.getElementById("slidesResultados");
const totalR = 12; // Certifique-se que este número bate com a qtde de fotos
let indexR = 0;

// 1. Carregar Imagens
for (let i = 1; i <= totalR; i++) {
    const img = document.createElement("img");
    img.src = `resultados/foto${i}.jpg`;
    slidesResultados.appendChild(img);
}

function atualizarResultado() {
    slidesResultados.style.transform = `translateX(-${indexR * 100}%)`;
}

function mudarResultado(dir) {
    indexR = (indexR + dir + totalR) % totalR;
    atualizarResultado();
    resetAutoR(); // Reinicia o contador quando o usuário clica
}

// 2. INICIAR AUTOMÁTICO (Isso faz rodar sozinho a cada 5s)
let autoR = setInterval(() => {
    indexR = (indexR + 1) % totalR;
    atualizarResultado();
}, 5000);

// 3. Função para resetar o tempo ao clicar manual
function resetAutoR() {
    clearInterval(autoR);
    autoR = setInterval(() => {
        indexR = (indexR + 1) % totalR;
        atualizarResultado();
    }, 5000);
}

/* --- LÓGICA DO MENU HAMBÚRGUER --- */
const menuToggle = document.getElementById('menuToggle');
const menuOverlay = document.getElementById('menuOverlay');
const menuLinks = document.querySelectorAll('.menu-items a');

// Função para abrir/fechar o menu
function toggleMenu() {
    menuToggle.classList.toggle('active');
    menuOverlay.classList.toggle('active');
    
    // Trava o scroll da página quando o menu está aberto para melhor UX
    if (menuOverlay.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
}

// Evento de clique no ícone hambúrguer
menuToggle.addEventListener('click', toggleMenu);

// Fecha o menu automaticamente ao clicar em um link de seção
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        menuOverlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
});
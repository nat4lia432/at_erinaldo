// Barra de Navegação
const menuToggle = document.querySelector('.menu-toggle');
menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
});

// Carregar o conteúdo salvo para cada caixa
window.addEventListener('load', () => {
    const caixas = [
        { id: 'caixaI', storageKey: 'box9' },
        { id: 'caixaJ', storageKey: 'box10' },
        { id: 'caixaK', storageKey: 'box11' },
        { id: 'caixaL', storageKey: 'box12' },
        { id: 'caixaM', storageKey: 'box13' },
        { id: 'caixaN', storageKey: 'box14' }
    ];

    caixas.forEach(caixa => {
        const conteudoSalvo = localStorage.getItem(caixa.storageKey);
        if (conteudoSalvo) {
            document.getElementById(caixa.id).innerHTML = conteudoSalvo;
        }
    });
});
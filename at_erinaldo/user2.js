// Carregar o conteúdo salvo para cada caixa
window.addEventListener('load', () => {
    const caixas = [
        { id: 'caixaB', storageKey: 'conteudo1ParaUsuarios', textId: 'texto1', fotoContainerId: 'fotoContainer1', pdfContainerId: 'pdfContainer1' },
        { id: 'caixaC', storageKey: 'conteudo2ParaUsuarios', textId: 'texto2', fotoContainerId: 'fotoContainer2', pdfContainerId: 'pdfContainer2' },
        { id: 'caixaD', storageKey: 'conteudo3ParaUsuarios', textId: 'texto3', fotoContainerId: 'fotoContainer3', pdfContainerId: 'pdfContainer3' },
        { id: 'caixaE', storageKey: 'conteudo4ParaUsuarios', textId: 'texto4', fotoContainerId: 'fotoContainer4', pdfContainerId: 'pdfContainer4' },
        { id: 'caixaF', storageKey: 'conteudo5ParaUsuarios', textId: 'texto5', fotoContainerId: 'fotoContainer5', pdfContainerId: 'pdfContainer5' },
        { id: 'caixaG', storageKey: 'conteudo6ParaUsuarios', textId: 'texto6', fotoContainerId: 'fotoContainer6', pdfContainerId: 'pdfContainer6' }
    ];

    caixas.forEach(caixa => {
        const conteudoSalvo = localStorage.getItem(caixa.storageKey);
        if (conteudoSalvo) {
            document.getElementById(caixa.textId).innerText = conteudoSalvo;
            document.getElementById(caixa.id).style.display = "block"; // Exibir a caixa de conteúdo
        }

        const foto = localStorage.getItem(`foto${caixa.textId.slice(-1)}ParaUsuarios`);
        if (foto) {
            const imgContainer = document.getElementById(caixa.fotoContainerId);
            if (imgContainer) {
                const img = document.createElement('img');
                img.src = foto;
                img.alt = "Foto";
                img.classList.add('resized');
                imgContainer.appendChild(img);
            }
        }

        const pdf = localStorage.getItem(`pdf${caixa.textId.slice(-1)}ParaUsuarios`);
        if (pdf) {
            const pdfContainer = document.getElementById(caixa.pdfContainerId);
            if (pdfContainer) {
                const embed = document.createElement('embed');
                embed.src = pdf;
                embed.type = "application/pdf";
                embed.classList.add('embed-pdf');
                pdfContainer.appendChild(embed);
            }
        }
    });
});

// Funções para alternar a visibilidade do conteúdo
function int() {
    toggleContent('caixaB');
}

function gic() {
    toggleContent('caixaC');
}

function mask() {
    toggleContent('caixaD');
}

function lei() {
    toggleContent('caixaE');
}

function car() {
    toggleContent('caixaF');
}

function taca() {
    toggleContent('caixaG');
}

function toggleContent(id) {
    var conteudo = document.getElementById(id);
    conteudo.style.display = conteudo.style.display === "none" ? "block" : "none";
}
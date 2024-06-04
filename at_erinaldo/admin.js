document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
        });
    }

    initializeBoxes();

    document.getElementById('contentType').addEventListener('change', function() {
        const selectedType = this.value;
        document.querySelectorAll('.contentInput').forEach(inputDiv => {
            inputDiv.style.display = 'none';
        });
        document.getElementById(selectedType + 'Input').style.display = 'block';
    });

    loadSavedContent();
});

// Initialize boxes
function initializeBoxes() {
    const adminContainer = document.getElementById('adminContainer');
    const boxNames = [
        'Página Inicial',
        'Intergil',
        'The Mask',
        'Gincana',
        'Leiturarte',
        'Taça',
        'Carnaval',
        'Cardápio',
        'Monitores de Eventos',
        'Monitores Gerais',
        'Monitores da Biblioteca',
        'Monitores da Banda',
        'Monitores da Quadra',
        'Funcionários',
        'Horário',
        'Avisos' // Nova caixa
    ];

    for (let i = 0; i < boxNames.length; i++) {
        const adminBox = document.createElement('div');
        adminBox.className = 'box';
        adminBox.id = 'adminBox' + (i + 1);

        const title = document.createElement('h3');
        title.textContent = boxNames[i];
        adminBox.appendChild(title);

        const content = document.createElement('div');
        content.className = 'box-content';
        adminBox.appendChild(content);

        adminContainer.appendChild(adminBox);
    }
}

// Add content to the selected box
function addContent() {
    const boxNumber = document.getElementById('boxNumber').value;
    const contentType = document.getElementById('contentType').value;

    const adminBox = document.getElementById('adminBox' + boxNumber);
    const contentBox = adminBox.querySelector('.box-content');

    if (!adminBox) {
        alert("Box not found!");
        return;
    }

    if (contentType === 'text') {
        const content = document.createElement('p');
        content.textContent = document.getElementById('textContent').value;
        contentBox.innerHTML = '';
        contentBox.appendChild(content);
        localStorage.setItem('box' + boxNumber, contentBox.innerHTML);
    } else if (contentType === 'image' || contentType === 'pdf') {
        const fileInput = document.getElementById(contentType + 'Content');
        const file = fileInput.files[0];

        if (!file) {
            alert("Please select a file.");
            return;
        }

        const reader = new FileReader();
        reader.onload = function(event) {
            const content = document.createElement(contentType === 'image' ? 'img' : 'a');

            if (contentType === 'image') {
                content.src = event.target.result;
                content.style.maxWidth = '100%';
            } else if (contentType === 'pdf') {
                content.href = event.target.result;
                content.textContent = 'Download PDF';
                content.target = '_blank';
            }

            contentBox.innerHTML = '';
            contentBox.appendChild(content);

            localStorage.setItem('box' + boxNumber, contentBox.innerHTML);
        };
        reader.readAsDataURL(file);
    }
}

function loadSavedContent() {
    for (let i = 1; i <= 16; i++) { // Atualizado para 16
        const savedContent = localStorage.getItem('box' + i);
        if (savedContent) {
            const contentBox = document.getElementById('adminBox' + i).querySelector('.box-content');
            contentBox.innerHTML = savedContent;
        }
    }
}
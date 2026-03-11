const dictionaryData = [
    { term: "Agile", category: "Metodologias", description: "Metodologia de desenvolvimento de software que enfatiza a colaboração, flexibilidade e entrega incremental...", hasSaibaMais: true, isExpandedDefault: true, views: 1450 },
    { term: "API", category: "Programação", views: 2340 },
    { term: "Arquitetura Monolítica", category: "Arquitetura", views: 890 },
    { term: "Backend", category: "Programação", views: 1820 },
    { term: "CRUD", category: "Banco de Dados", views: 1100 },
    { term: "CI/CD", category: "DevOps", views: 1650 },
    { term: "Container", category: "DevOps", views: 980 },
    { term: "Design Pattern", category: "Design Patterns", views: 1200 },
    { term: "Docker", category: "DevOps", views: 2100 },
    { term: "Factory Pattern", category: "Design Patterns", views: 650 },
    { term: "Frontend", category: "Programação", views: 1750 },
    { term: "Git", category: "DevOps", views: 3100 },
    { term: "GraphQL", category: "Programação", views: 940 },
    { term: "Injeção de Dependência", category: "Programação", views: 820 },
    { term: "Integration Test", category: "Testes", views: 430 },
    { term: "Scrum", category: "Metodologias", views: 1950 }
];

//SELETORES GLOBAIS
const termsContainer = document.getElementById('terms-container');
const termsCountElement = document.getElementById('terms-count');
const searchInput = document.getElementById('search-input');
const alphabetFiltersContainer = document.getElementById('alphabet-filters');
const categoryFiltersContainer = document.getElementById('category-filters');
const azSidebar = document.getElementById('az-sidebar');

let activeCategoryFilter = "Todos";
let activeAlphabetFilter = "Todas";

//NAVEGAÇÃO ENTRE TELAS E EXIBIÇÃO DO A-Z
const navItems = document.querySelectorAll('.nav-item');
const viewSections = document.querySelectorAll('.view-section');

navItems.forEach(item => {
    item.addEventListener('click', () => {
        // Marca o botão clicado como ativo
        navItems.forEach(nav => nav.classList.remove('active'));
        item.classList.add('active');

        // Pega qual tela deve abrir
        const targetId = item.getAttribute('data-target');
        
        // Esconde as outras telas e mostra a selecionada
        viewSections.forEach(view => view.classList.remove('active'));
        const viewElement = document.getElementById(targetId);
        if (viewElement) viewElement.classList.add('active');

        // LÓGICA DO MENU ESQUERDO NA TELA PRINCIPAL
        if (targetId === 'view-main') {
            const mode = item.getAttribute('data-mode');
            
            if (mode === 'az') {
                // Abre o filtro do alfabeto na esquerda
                azSidebar.classList.add('show'); 
            } else if (mode === 'categories') {
                // Esconde o filtro do alfabeto
                azSidebar.classList.remove('show');
                
                // Reseta os filtros de letra para não esconder termos à toa
                activeAlphabetFilter = "Todas";
                alphabetFiltersContainer.querySelector('.active').classList.remove('active');
                alphabetFiltersContainer.querySelector('[data-filter="Todas"]').classList.add('active');
                applyFilters();
            }
        }

        // Se clicou em estatísticas, atualiza os dados
        if (targetId === 'view-stats') renderStatistics();
    });
});

//FUNÇÕES DO DICIONÁRIO
function generateAlphabetFilters() {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    alphabet.forEach(letter => {
        const button = document.createElement('button');
        button.className = 'filter-pill';
        button.setAttribute('data-filter', letter);
        button.textContent = letter;
        alphabetFiltersContainer.appendChild(button);
    });
}

function renderTerms(termsToRender) {
    termsContainer.innerHTML = '';
    const count = termsToRender.length;
    termsCountElement.textContent = `${count} termo${count === 1 ? '' : 's'} encontrado${count === 1 ? '' : 's'}`;

    if (count === 0) {
        termsContainer.innerHTML = '<p style="color: #64748b;">Nenhum termo encontrado com esses filtros.</p>';
        return;
    }

    termsToRender.forEach(item => {
        const div = document.createElement('div');
        const isExpanded = item.isExpandedDefault || false;
        div.className = `term-card ${isExpanded ? 'expanded shadow-card' : ''}`;

        let cardHTML = `
            <h2>${item.term}</h2>
            <span class="category-tag">${item.category}</span>
        `;

        if (isExpanded && item.description) {
            cardHTML += `
                <div class="divider"></div>
                <p class="description">${item.description}</p>
                ${item.hasSaibaMais ? '<a href="#" class="saiba-mais-link" style="color:var(--primary-color); font-size:0.9rem; font-weight:600; text-decoration:none;">Saiba mais <i class="fas fa-external-link-alt"></i></a>' : ''}
            `;
        }

        div.innerHTML = cardHTML;
        termsContainer.appendChild(div);
    });
}

function applyFilters() {
    const searchText = searchInput.value.toLowerCase();
    
    const filteredTerms = dictionaryData.filter(item => {
        const matchesSearch = item.term.toLowerCase().includes(searchText) || (item.description && item.description.toLowerCase().includes(searchText));
        const matchesCategory = activeCategoryFilter === "Todos" || item.category === activeCategoryFilter;
        const matchesAlphabet = activeAlphabetFilter === "Todas" || item.term.toUpperCase().startsWith(activeAlphabetFilter);

        return matchesSearch && matchesCategory && matchesAlphabet;
    });

    renderTerms(filteredTerms);
}

// Botão Limpar Filtros
document.getElementById('clear-btn').addEventListener('click', () => {
    searchInput.value = '';
    
    activeCategoryFilter = "Todos";
    document.querySelectorAll('#category-filters .filter-pill').forEach(btn => btn.classList.remove('active'));
    document.querySelector('#category-filters [data-filter="Todos"]').classList.add('active');

    activeAlphabetFilter = "Todas";
    document.querySelectorAll('#alphabet-filters .filter-pill').forEach(btn => btn.classList.remove('active'));
    document.querySelector('#alphabet-filters [data-filter="Todas"]').classList.add('active');

    applyFilters();
});

// Eventos de clique nas "Pílulas" de filtro
categoryFiltersContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('filter-pill')) {
        categoryFiltersContainer.querySelector('.active').classList.remove('active');
        e.target.classList.add('active');
        activeCategoryFilter = e.target.getAttribute('data-filter');
        applyFilters();
    }
});

alphabetFiltersContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('filter-pill')) {
        alphabetFiltersContainer.querySelector('.active').classList.remove('active');
        e.target.classList.add('active');
        activeAlphabetFilter = e.target.getAttribute('data-filter');
        applyFilters();
    }
});
searchInput.addEventListener('input', applyFilters);

//ESTATÍSTICAS E LOGIN
function renderStatistics() {
    const statsContainer = document.getElementById('stats-container');
    statsContainer.innerHTML = '';

    const sortedData = [...dictionaryData].sort((a, b) => b.views - a.views).slice(0, 5);
    const maxViews = sortedData[0].views;

    sortedData.forEach(item => {
        const percentage = (item.views / maxViews) * 100;
        const statItem = document.createElement('div');
        statItem.className = 'stat-item';
        statItem.innerHTML = `
            <div class="stat-term">${item.term}</div>
            <div class="stat-bar-container"><div class="stat-bar" style="width: ${percentage}%"></div></div>
            <div class="stat-views">${item.views} acessos</div>
        `;
        statsContainer.appendChild(statItem);
    });
}

document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert("Simulação de Login com Sucesso!");
});

//INICIALIZAÇÃO DO SISTEMA
generateAlphabetFilters();
renderTerms(dictionaryData);
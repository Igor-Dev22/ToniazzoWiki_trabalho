// Dados iniciais ricos em Engenharia de Software
const defaultData = [
    { id: "1", term: "Agile", desc: "Metodologia de desenvolvimento que foca em entregas rápidas, iterativas e colaboração contínua entre equipas. Prioriza a adaptação à mudança.", link: "https://pt.wikipedia.org/wiki/Desenvolvimento_%C3%A1gil_de_software", views: 1450, isFav: false, timestamp: 1600000001000 },
    { id: "2", term: "API (Application Programming Interface)", desc: "Conjunto de regras e protocolos que permite que diferentes sistemas e aplicações comuniquem entre si de forma padronizada.", link: "https://aws.amazon.com/pt/what-is/api/", views: 2340, isFav: true, timestamp: 1600000002000 },
    { id: "3", term: "Arquitetura Monolítica", desc: "Modelo tradicional onde todo o software (interface, lógica e acesso a dados) é construído e implantado como uma base de código única e indivisível.", link: "https://aws.amazon.com/pt/microservices/", views: 890, isFav: false, timestamp: 1600000003000 },
    { id: "4", term: "Backend", desc: "A camada do sistema que corre no servidor. É responsável pela lógica de negócio, comunicação com bases de dados e segurança invisível ao utilizador final.", link: "https://pt.wikipedia.org/wiki/Front-end_e_back-end", views: 1820, isFav: false, timestamp: 1600000004000 },
    { id: "5", term: "Bug", desc: "Um erro, falha ou defeito num programa informático que o impede de funcionar da forma esperada, produzindo resultados incorretos ou inesperados.", link: "https://pt.wikipedia.org/wiki/Bug_(tecnologia)", views: 3200, isFav: false, timestamp: 1600000005000 },
    { id: "6", term: "Clean Code", desc: "Filosofia de desenvolvimento de software que defende a escrita de código simples, legível e fácil de manter por qualquer programador, não apenas por quem o escreveu.", link: "", views: 1560, isFav: true, timestamp: 1600000006000 },
    { id: "7", term: "CI/CD", desc: "Continuous Integration e Continuous Deployment. Prática de automatizar a integração de código, testes e a entrega final em ambiente de produção.", link: "https://www.redhat.com/pt-br/topics/devops/what-is-ci-cd", views: 1650, isFav: false, timestamp: 1600000007000 },
    { id: "8", term: "CRUD", desc: "Acrónimo para as 4 operações básicas em bases de dados: Create (Criar), Read (Ler), Update (Atualizar) e Delete (Apagar).", link: "https://pt.wikipedia.org/wiki/CRUD", views: 1100, isFav: false, timestamp: 1600000008000 },
    { id: "9", term: "DevOps", desc: "Cultura e conjunto de práticas que unifica o desenvolvimento de software (Dev) e as operações de TI (Ops), encurtando o ciclo de vida de desenvolvimento.", link: "https://aws.amazon.com/pt/devops/what-is-devops/", views: 2800, isFav: false, timestamp: 1600000009000 },
    { id: "10", term: "Docker", desc: "Plataforma que utiliza a tecnologia de contentores (containers) para empacotar e isolar aplicações, garantindo que funcionem em qualquer ambiente.", link: "https://www.docker.com/", views: 2100, isFav: true, timestamp: 1600000010000 },
    { id: "11", term: "Frontend", desc: "A parte visual e interativa da aplicação com a qual o utilizador interage diretamente (normalmente construída com HTML, CSS e JavaScript).", link: "", views: 1950, isFav: false, timestamp: 1600000011000 },
    { id: "12", term: "Git", desc: "Sistema de controlo de versões distribuído. Permite rastrear o histórico de alterações no código fonte e facilita o trabalho colaborativo em equipa.", link: "https://git-scm.com/", views: 3100, isFav: true, timestamp: 1600000012000 },
    { id: "13", term: "Microsserviços", desc: "Arquitetura onde a aplicação é dividida num conjunto de serviços pequenos e independentes, que comunicam entre si através de APIs.", link: "https://aws.amazon.com/pt/microservices/", views: 1750, isFav: false, timestamp: 1600000013000 },
    { id: "14", term: "POO (Programação Orientada a Objetos)", desc: "Paradigma de programação baseado no conceito de 'objetos', que podem conter dados (atributos) e código (métodos). Pilares: Encapsulamento, Herança e Polimorfismo.", link: "https://pt.wikipedia.org/wiki/Programa%C3%A7%C3%A3o_orientada_a_objetos", views: 2450, isFav: false, timestamp: 1600000014000 },
    { id: "15", term: "Pull Request (PR)", desc: "Pedido feito por um programador para que as suas alterações de código sejam revistas e fundidas (merged) no ramo principal do projeto.", link: "", views: 1340, isFav: false, timestamp: 1600000015000 },
    { id: "16", term: "QA (Quality Assurance)", desc: "Garantia de Qualidade. Processo de prevenção de erros e defeitos no software, garantindo que o produto final cumpre os requisitos estabelecidos.", link: "", views: 980, isFav: false, timestamp: 1600000016000 },
    { id: "17", term: "Refatorização (Refactoring)", desc: "Processo de restruturação do código informático existente para melhorar a sua legibilidade, estrutura e desempenho, sem alterar o seu comportamento externo.", link: "https://pt.wikipedia.org/wiki/Refatora%C3%A7%C3%A3o", views: 1120, isFav: false, timestamp: 1600000017000 },
    { id: "18", term: "Scrum", desc: "Framework ágil estruturado em ciclos curtos de trabalho chamados 'Sprints', com papéis definidos (Scrum Master, Product Owner, Developers) e reuniões diárias.", link: "https://www.scrum.org/", views: 1950, isFav: false, timestamp: 1600000018000 },
    { id: "19", term: "TDD (Test-Driven Development)", desc: "Desenvolvimento Orientado a Testes. Prática onde os testes automatizados são escritos *antes* da implementação do código real.", link: "https://pt.wikipedia.org/wiki/Test_Driven_Development", views: 1420, isFav: false, timestamp: 1600000019000 },
    { id: "20", term: "UML (Unified Modeling Language)", desc: "Linguagem visual padronizada utilizada para desenhar e modelar a arquitetura, desenho e implementação de sistemas de software complexos.", link: "https://pt.wikipedia.org/wiki/UML", views: 850, isFav: false, timestamp: 1600000020000 }
];

// Alterado para _v2 para forçar o carregamento dos novos termos do defaultData
let dictionaryData = JSON.parse(localStorage.getItem('toniazzoWikiData_v2'));
if (!dictionaryData || dictionaryData.length === 0) {
    dictionaryData = defaultData;
    saveData();
}

// Variáveis de Estado
let activeLetter = "Todas";
let viewMode = "dictionary"; 
let currentTermId = null; 

// Elementos DOM principais
const container = document.getElementById('terms-container');
const searchInput = document.getElementById('search-input');
const alphabetContainer = document.getElementById('alphabet-filters');
const sortSelect = document.getElementById('sort-select');
const emptyState = document.getElementById('empty-state');
const termsCount = document.getElementById('terms-count');

// Elementos de Layout
const sidebar = document.getElementById('sidebar');
const body = document.body;
const darkModeToggle = document.getElementById('dark-mode-toggle');

// Elementos Modais
const viewModal = document.getElementById('modal-overlay');
const formModal = document.getElementById('form-modal-overlay');

// --- INICIALIZAÇÃO DE TEMA (DARK MODE) ---
const savedTheme = localStorage.getItem('toniazzoTheme') || 'light';
body.setAttribute('data-theme', savedTheme);
updateDarkModeIcon(savedTheme);

darkModeToggle.onclick = () => {
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('toniazzoTheme', newTheme);
    updateDarkModeIcon(newTheme);
    showToast(`Modo ${newTheme === 'dark' ? 'Escuro' : 'Claro'} ativado!`, 'success');
};

function updateDarkModeIcon(theme) {
    darkModeToggle.innerHTML = theme === 'light' ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';
}

// --- UTILITÁRIOS ---
function saveData() {
    localStorage.setItem('toniazzoWikiData_v2', JSON.stringify(dictionaryData));
}

function showToast(message, type = 'success') {
    const toastContainer = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    
    const icon = type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle';
    toast.innerHTML = `<i class="fas ${icon}"></i> <span>${message}</span>`;
    
    toastContainer.appendChild(toast);
    
    setTimeout(() => {
        toast.classList.add('fade-out');
        toast.addEventListener('animationend', () => toast.remove());
    }, 3000);
}

// --- NAVEGAÇÃO E MENUS ---
document.getElementById('sidebar-toggle').onclick = () => {
    sidebar.classList.toggle('collapsed');
    const icon = document.getElementById('toggle-icon');
    icon.className = sidebar.classList.contains('collapsed') ? 'fas fa-chevron-right' : 'fas fa-chevron-left';
};

document.getElementById('nav-dictionary').onclick = function() {
    document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
    this.classList.add('active');
    viewMode = "dictionary";
    applyFilters();
};

document.getElementById('nav-favorites').onclick = function() {
    document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
    this.classList.add('active');
    viewMode = "favorites";
    applyFilters();
};

// --- FILTROS E ALFABETO ---
document.getElementById('btn-todas').onclick = (e) => setActiveLetter(e.target, "Todas");

'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').forEach(l => {
    const btn = document.createElement('button');
    btn.className = 'filter-pill';
    btn.textContent = l;
    btn.onclick = (e) => setActiveLetter(e.target, l);
    alphabetContainer.appendChild(btn);
});

function setActiveLetter(btnElement, letter) {
    document.querySelectorAll('.filter-pill').forEach(b => b.classList.remove('active'));
    if(btnElement) btnElement.classList.add('active');
    activeLetter = letter;
    applyFilters();
}

searchInput.addEventListener('input', applyFilters);
sortSelect.addEventListener('change', applyFilters);

document.getElementById('clear-btn').onclick = () => {
    searchInput.value = '';
    sortSelect.value = 'az';
    setActiveLetter(document.getElementById('btn-todas'), "Todas");
};

// --- RENDERIZAÇÃO E LÓGICA DE LISTAGEM ---
function applyFilters() {
    const search = searchInput.value.toLowerCase();
    const sortValue = sortSelect.value;
    
    let filtered = dictionaryData.filter(item => {
        const matchesSearch = item.term.toLowerCase().includes(search) || item.desc.toLowerCase().includes(search);
        const matchesLetter = activeLetter === "Todas" || item.term.toUpperCase().startsWith(activeLetter);
        const matchesViewMode = viewMode === "dictionary" || (viewMode === "favorites" && item.isFav);
        
        return matchesSearch && matchesLetter && matchesViewMode;
    });

    // Ordenação Inteligente
    if (sortValue === 'az') {
        filtered.sort((a, b) => a.term.localeCompare(b.term));
    } else if (sortValue === 'recent') {
        filtered.sort((a, b) => b.timestamp - a.timestamp); 
    } else if (sortValue === 'views') {
        filtered.sort((a, b) => b.views - a.views); 
    }

    render(filtered);
}

function render(data) {
    container.innerHTML = '';
    termsCount.textContent = `${data.length} termos encontrados`;
    
    if (data.length === 0) {
        emptyState.style.display = 'block';
    } else {
        emptyState.style.display = 'none';
        
        data.forEach(item => {
            const card = document.createElement('div');
            card.className = 'term-card shadow-card';
            card.tabIndex = 0; 
            
            const favIcon = item.isFav ? 'fas fa-star active' : 'far fa-star';
            
            card.innerHTML = `
                <h2>
                    ${item.term} 
                    <button class="fav-btn ${item.isFav ? 'active' : ''}" data-id="${item.id}" title="Favoritar" aria-label="Favoritar">
                        <i class="${favIcon}"></i>
                    </button>
                </h2>
                <p class="preview">${item.desc}</p>
                <span class="hint">Clique para expandir <i class="fas fa-arrow-right" style="font-size:0.8em"></i></span>
            `;
            
            const openView = (e) => {
                if(e.target.closest('.fav-btn')) return; 
                openTermView(item);
            };
            
            card.onclick = openView;
            card.onkeydown = (e) => { if(e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openView(e); } };
            
            const btnFav = card.querySelector('.fav-btn');
            btnFav.onclick = (e) => {
                item.isFav = !item.isFav;
                saveData();
                applyFilters(); 
                const msg = item.isFav ? 'Adicionado aos favoritos' : 'Removido dos favoritos';
                showToast(msg, 'success');
            };

            container.appendChild(card);
        });
    }
}

// --- VISUALIZAÇÃO DE TERMO ---
function openTermView(item) {
    currentTermId = item.id;
    
    item.views += 1;
    saveData();

    const linkHtml = item.link ? 
        `<a href="${item.link}" target="_blank" style="color:var(--primary-color); text-decoration:none; display:inline-flex; align-items:center; gap:5px; margin-top:20px; font-weight:600;"><i class="fas fa-external-link-alt"></i> Ver documentação externa</a>` : '';

    document.getElementById('modal-body').innerHTML = `
        <h1 style="color:var(--primary-color); margin-bottom:15px; padding-right: 80px;">${item.term}</h1>
        <p style="line-height:1.6; font-size:1.1rem; color:var(--text-main)">${item.desc}</p>
        ${linkHtml}
        <div style="margin-top:25px; padding-top:15px; border-top:1px solid var(--border-color); text-align:right">
            <small style="color:var(--text-muted)"><i class="fas fa-eye"></i> Visualizações: ${item.views}</small>
        </div>
    `;
    
    viewModal.style.display = 'flex';
    viewModal.querySelector('.close-button').focus(); 
}

// --- CRUD: CRIAR, ATUALIZAR E DELETAR ---
document.getElementById('btn-add-term').onclick = () => openFormModal();
document.getElementById('btn-empty-add').onclick = () => {
    document.getElementById('term-name').value = searchInput.value; 
    openFormModal();
};

function openFormModal(editItem = null) {
    const formTitle = document.getElementById('form-modal-title');
    const form = document.getElementById('term-form');
    
    if (editItem) {
        formTitle.textContent = "Editar Termo";
        document.getElementById('term-id').value = editItem.id;
        document.getElementById('term-name').value = editItem.term;
        document.getElementById('term-desc').value = editItem.desc;
        document.getElementById('term-link').value = editItem.link;
    } else {
        formTitle.textContent = "Adicionar Novo Termo";
        form.reset();
        document.getElementById('term-id').value = "";
    }
    
    viewModal.style.display = 'none'; 
    formModal.style.display = 'flex';
    document.getElementById('term-name').focus();
}

document.getElementById('term-form').onsubmit = (e) => {
    e.preventDefault(); 
    
    const id = document.getElementById('term-id').value;
    const name = document.getElementById('term-name').value;
    const desc = document.getElementById('term-desc').value;
    const link = document.getElementById('term-link').value;
    
    if (id) {
        const index = dictionaryData.findIndex(t => t.id === id);
        if (index !== -1) {
            dictionaryData[index].term = name;
            dictionaryData[index].desc = desc;
            dictionaryData[index].link = link;
            showToast('Termo atualizado com sucesso!');
        }
    } else {
        dictionaryData.push({
            id: Date.now().toString(), 
            term: name,
            desc: desc,
            link: link,
            views: 0,
            isFav: false,
            timestamp: Date.now()
        });
        showToast('Novo termo adicionado com sucesso!');
        
        if(viewMode === 'dictionary'){
            searchInput.value = '';
            sortSelect.value = 'recent'; 
            setActiveLetter(document.getElementById('btn-todas'), "Todas");
        }
    }
    
    saveData();
    formModal.style.display = 'none';
    applyFilters();
};

document.getElementById('btn-edit-term').onclick = () => {
    const item = dictionaryData.find(t => t.id === currentTermId);
    if(item) openFormModal(item);
};

document.getElementById('btn-delete-term').onclick = () => {
    if (confirm('Tem a certeza que deseja excluir este termo? Esta ação não pode ser desfeita.')) {
        dictionaryData = dictionaryData.filter(t => t.id !== currentTermId);
        saveData();
        viewModal.style.display = 'none';
        applyFilters();
        showToast('Termo excluído permanentemente.', 'error');
    }
};

// --- CONTROLES DE FECHAMENTO (Modais) ---
document.querySelector('.close-button').onclick = () => viewModal.style.display = 'none';
document.querySelector('.close-form-button').onclick = () => formModal.style.display = 'none';

window.onclick = (e) => { 
    if(e.target == viewModal) viewModal.style.display = 'none'; 
    if(e.target == formModal) formModal.style.display = 'none'; 
};

window.onkeydown = (e) => {
    if (e.key === 'Escape') {
        viewModal.style.display = 'none';
        formModal.style.display = 'none';
    }
};

// Start
applyFilters();
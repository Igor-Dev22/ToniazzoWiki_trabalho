// DADOS INICIAIS (sem alteração em relação ao projeto original)
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

// PADRÃO SINGLETON — DictionaryRepository
class DictionaryRepository {
    constructor() {
        if (DictionaryRepository._instance) {
            return DictionaryRepository._instance;
        }
        this._storageKey = 'toniazzoWikiData_v2';
        DictionaryRepository._instance = this;
    }

    static getInstance() {
        if (!DictionaryRepository._instance) {
            DictionaryRepository._instance = new DictionaryRepository();
        }
        return DictionaryRepository._instance;
    }

    load() {
        const stored = JSON.parse(localStorage.getItem(this._storageKey));
        if (!stored || stored.length === 0) {
            this.save(defaultData);
            return defaultData;
        }
        return stored;
    }

    save(data) {
        localStorage.setItem(this._storageKey, JSON.stringify(data));
    }
}

// PADRÃO STRATEGY — ordenação intercambiável
class SortStrategy {
    sort(terms) {
        throw new Error('O método sort() deve ser implementado pela subclasse.');
    }
}

class AZSortStrategy extends SortStrategy {
    sort(terms) {
        return [...terms].sort((a, b) => a.term.localeCompare(b.term));
    }
}

class RecentSortStrategy extends SortStrategy {
    sort(terms) {
        return [...terms].sort((a, b) => b.timestamp - a.timestamp);
    }
}

class ViewsSortStrategy extends SortStrategy {
    sort(terms) {
        return [...terms].sort((a, b) => b.views - a.views);
    }
}

const sortStrategies = {
    az: new AZSortStrategy(),
    recent: new RecentSortStrategy(),
    views: new ViewsSortStrategy()
};

// ESTADO DA APLICAÇÃO
const repository = DictionaryRepository.getInstance();
let dictionaryData = repository.load();
let currentTermId = null;

// Elementos principais
const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const searchEmpty = document.getElementById('search-empty');
const recentSidebar = document.getElementById('recent-sidebar');
const recentGroups = document.getElementById('recent-groups');

// Elementos de navegação entre telas
const viewSearch = document.getElementById('view-search');
const viewFavorites = document.getElementById('view-favorites');
const favoritesList = document.getElementById('favorites-list');
const favoritesEmpty = document.getElementById('favorites-empty');
const termsCounter = document.getElementById('terms-counter');

// Elementos Modais
const viewModal = document.getElementById('modal-overlay');
const formModal = document.getElementById('form-modal-overlay');

//UTILITÁRIOS
function saveData() {
    repository.save(dictionaryData);
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

function findTermByName(name) {
    const normalized = name.trim().toLowerCase();
    if (!normalized) return null;
    return dictionaryData.find(item => item.term.toLowerCase() === normalized)
        || dictionaryData.find(item => item.term.toLowerCase().includes(normalized));
}

//NAVEGAÇÃO ENTRE TELAS
function showSearchScreen() {
    viewFavorites.classList.remove('active');
    viewSearch.classList.add('active');
    renderRecentSidebar();
}

function showFavoritesScreen() {
    viewSearch.classList.remove('active');
    viewFavorites.classList.add('active');
    renderFavoritesList();
}

document.getElementById('nav-favorites').onclick = showFavoritesScreen;
document.getElementById('btn-back-from-favorites').onclick = showSearchScreen;

//LATERAL "TODOS OS TERMOS
function renderRecentSidebar() {
    const sorted = sortStrategies.az.sort(dictionaryData);

    const groups = {};
    sorted.forEach(item => {
        const letter = item.term.charAt(0).toUpperCase();
        if (!groups[letter]) groups[letter] = [];
        groups[letter].push(item);
    });

    recentGroups.innerHTML = '';
    Object.keys(groups).sort().forEach(letter => {
        const groupEl = document.createElement('div');

        const letterEl = document.createElement('div');
        letterEl.className = 'recent-group-letter';
        letterEl.textContent = letter;
        groupEl.appendChild(letterEl);

        const ul = document.createElement('ul');
        ul.className = 'recent-group-items';
        groups[letter].forEach(item => {
            const li = document.createElement('li');
            const btn = document.createElement('button');
            btn.type = 'button';
            btn.textContent = item.term;
            btn.onclick = () => openTermView(item);
            li.appendChild(btn);
            ul.appendChild(li);
        });
        groupEl.appendChild(ul);

        recentGroups.appendChild(groupEl);
    });

    renderTermsCounter();
}

function renderTermsCounter() {
    const total = dictionaryData.length;
    termsCounter.textContent = `${total} termo${total === 1 ? '' : 's'} cadastrado${total === 1 ? '' : 's'}`;
}

//LISTA DE FAVORITOS
function renderFavoritesList() {
    const favorites = dictionaryData.filter(item => item.isFav);
    const sorted = sortStrategies.az.sort(favorites);

    favoritesList.innerHTML = '';

    if (sorted.length === 0) {
        favoritesEmpty.classList.add('visible');
        return;
    }
    favoritesEmpty.classList.remove('visible');

    sorted.forEach(item => {
        const li = document.createElement('li');
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.innerHTML = `
            <span><i class="fas fa-star fav-star"></i> ${item.term}</span>
        `;
        btn.onclick = () => openTermView(item);
        li.appendChild(btn);
        favoritesList.appendChild(li);
    });
}

//BUSCA: leva direto ao modal de detalhes do termo
searchForm.onsubmit = (e) => {
    e.preventDefault();
    const query = searchInput.value;
    const found = findTermByName(query);

    if (found) {
        searchEmpty.classList.remove('visible');
        openTermView(found);
    } else {
        searchEmpty.classList.add('visible');
    }
};

searchInput.addEventListener('input', () => {
    if (searchEmpty.classList.contains('visible')) {
        searchEmpty.classList.remove('visible');
    }
});

//VISUALIZAÇÃO DE TERMO
function openTermView(item) {
    currentTermId = item.id;

    item.views += 1;
    saveData();

    const isFav = item.isFav;
    const hasLink = !!item.link;

    document.getElementById('modal-body').innerHTML = `
        <span class="term-tag">Termo</span>
        <h1 class="term-modal-title">${item.term}</h1>
        <p class="term-modal-desc">${item.desc}</p>
        <div class="term-actions-row">
            <button id="btn-toggle-fav" class="term-action-btn ${isFav ? 'is-fav' : ''}">
                <i class="${isFav ? 'fas' : 'far'} fa-star"></i> Favoritar
            </button>
            <button id="btn-open-link" class="term-action-btn" ${hasLink ? '' : 'disabled'}>
                <i class="fas fa-external-link-alt"></i> Fonte
            </button>
        </div>
        <div class="term-modal-footer">
            <span class="term-views"><i class="fas fa-eye"></i> ${item.views} visualizações</span>
            <div class="term-footer-icons">
                <button id="btn-edit-term" title="Editar"><i class="fas fa-edit"></i></button>
                <button id="btn-delete-term" class="danger" title="Excluir"><i class="fas fa-trash"></i></button>
            </div>
        </div>
    `;

    document.getElementById('btn-toggle-fav').onclick = () => {
        item.isFav = !item.isFav;
        saveData();
        const msg = item.isFav ? 'Adicionado aos favoritos' : 'Removido dos favoritos';
        showToast(msg, 'success');
        openTermView(item);
    };

    if (hasLink) {
        document.getElementById('btn-open-link').onclick = () => window.open(item.link, '_blank');
    }

    document.getElementById('btn-edit-term').onclick = () => openFormModal(item);
    document.getElementById('btn-delete-term').onclick = () => handleDeleteTerm();

    viewModal.style.display = 'flex';
    viewModal.querySelector('.close-button').focus();
}

//CRUD: CRIAR, ATUALIZAR E DELETAR
document.getElementById('btn-add-term').onclick = () => openFormModal();

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

function refreshCurrentScreen() {
    if (viewFavorites.classList.contains('active')) {
        renderFavoritesList();
    } else {
        renderRecentSidebar();
    }
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
    }

    saveData();
    formModal.style.display = 'none';
    refreshCurrentScreen();
};

function handleDeleteTerm() {
    if (confirm('Tem a certeza que deseja excluir este termo? Esta ação não pode ser desfeita.')) {
        dictionaryData = dictionaryData.filter(t => t.id !== currentTermId);
        saveData();
        viewModal.style.display = 'none';
        showToast('Termo excluído permanentemente.', 'error');
        refreshCurrentScreen();
    }
}

//CONTROLES DE FECHAMENTO (Modais)
function closeViewModal() {
    viewModal.style.display = 'none';
    refreshCurrentScreen();
}

document.querySelector('.close-button').onclick = closeViewModal;
document.querySelector('.close-form-button').onclick = () => formModal.style.display = 'none';

window.onclick = (e) => {
    if (e.target == viewModal) closeViewModal();
    if (e.target == formModal) formModal.style.display = 'none';
};

window.onkeydown = (e) => {
    if (e.key === 'Escape') {
        if (viewModal.style.display === 'flex') closeViewModal();
        formModal.style.display = 'none';
    }
};

// Lateral de termos visível
renderRecentSidebar();

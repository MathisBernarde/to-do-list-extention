
const STORAGE_TASKS = 'todo-list-tasks';
const STORAGE_FOLDERS = 'todo-list-folders';
const STORAGE_THEME = 'todo-list-theme';
const STORAGE_LANG = 'todo-list-lang';
const DEFAULT_FOLDER_ID = '__default__';
const FOLDER_ALL = '__all__';

// DOM
const form = document.getElementById('task-form');
const input = document.getElementById('task-input');
const listEl = document.getElementById('task-list');
const folderSelect = document.getElementById('task-folder');
const foldersListEl = document.getElementById('folders-list');
const addFolderBtn = document.getElementById('add-folder-btn');
const addFolderForm = document.getElementById('add-folder-form');
const newFolderNameInput = document.getElementById('new-folder-name');
const addFolderConfirm = document.getElementById('add-folder-confirm');
const addFolderCancel = document.getElementById('add-folder-cancel');
const clearDoneBtn = document.getElementById('clear-done-btn');
const themeToggle = document.getElementById('theme-toggle');
const iconSun = document.getElementById('icon-sun');
const iconMoon = document.getElementById('icon-moon');
const searchInput = document.getElementById('search-input');
const sortSelect = document.getElementById('sort-select');
const progressBarFill = document.getElementById('progress-bar-fill');
const donutFill = document.getElementById('donut-fill');
const summaryStats = document.getElementById('summary-stats');
const barsChart = document.getElementById('bars-chart');
const btnExport = document.getElementById('btn-export');
const btnImport = document.getElementById('btn-import');
const importFile = document.getElementById('import-file');
const langSelect = document.getElementById('lang-select');
const emptyTrashBtn = document.getElementById('empty-trash-btn');
const summaryStatsExtra = document.getElementById('summary-stats-extra');

// Translations Object for Manual Switching
const translations = {
    fr: {
        appTitle: 'Liste de tâches',
        folders: 'Dossiers',
        newFolder: '+ Nouveau dossier',
        folderNamePlaceholder: 'Nom du dossier',
        create: 'Créer',
        cancel: 'Annuler',
        taskPlaceholder: 'Nouvelle tâche...',
        subtaskPlaceholder: 'Sous-tâche...',
        dueOptional: 'Date d\'échéance (optionnel)',
        add: 'Ajouter',
        clearDone: 'Effacer les tâches terminées',
        exportData: 'Export',
        importData: 'Import',
        searchPlaceholder: 'Rechercher...',
        priorityCritical: 'Critique',
        priorityHigh: 'Haute',
        priorityMedium: 'Moyenne',
        priorityNormal: 'Normale',
        priorityLow: 'Basse',
        priorityNone: 'Aucune priorité',
        noFolder: 'Sans dossier',
        noFolderShort: 'Aucun',
        addToFolder: 'Ajouter au dossier',
        changeFolder: 'Changer de dossier',
        editPriority: 'Modifier priorité',
        priorityCriticalLabel: 'Critique',
        priorityHighLabel: 'Haute',
        priorityMediumLabel: 'Moyenne',
        priorityNormalLabel: 'Normale',
        priorityLowLabel: 'Basse',
        priorityNoneLabel: 'Aucune',
        dueLabel: 'Éch: ',
        overdueLabel: 'En retard: ',
        addDue: '+ Date',
        editDue: 'Modifier date',
        edit: '✎',
        delete: '×',
        reorder: 'Réorganiser',
        addSubtasks: '+ Sous-tâches',
        addSubtasksInput: '+ Ajouter une sous-tâche',
        renameFolder: 'Renommer',
        deleteFolder: 'Supprimer',
        summaryRest: 'tâches restantes',
        summaryDone: 'terminées',
        summaryTotal: 'total',
        filterAll: 'Toutes',
        filterActive: 'En cours',
        filterDone: 'Terminées',
        filterTrash: 'Corbeille',
        sortNewest: 'Plus récentes',
        sortOldest: 'Plus anciennes',
        sortAlpha: 'A → Z',
        sortAlphaDesc: 'Z → A',
        sortOrder: 'Ordre personnalisé',
        sortPriority: 'Priorité',
        sortDue: 'Date d\'échéance (Proche → Loin)',
        sortDueDesc: 'Date d\'échéance (Loin → Proche)',
        sortFolderAlpha: 'Dossier (A → Z)',
        sortFolderAlphaDesc: 'Dossier (Z → A)',
        emptyDefault: 'Aucune tâche dans ce dossier. Ajoutez-en une !',
        emptyActive: 'Aucune tâche en cours.',
        emptyDone: 'Aucune tâche terminée.',
        emptyTrash: 'Corbeille vide.',
        emptySearch: 'Aucun résultat trouvé.',
        importConfirm: 'L\'importation fusionnera les données avec les existantes. Continuer ?',
        titleTheme: 'Changer le thème',
        titleToggleDesc: 'Ajouter/Modifier Note',
        restore: 'Restaurer',
        deletePermanent: 'Supprimer définitivement',
        emptyTrash: 'Vider la corbeille',
        statsOverdue: 'En retard',
        statsUpcoming: 'À venir',
        statNone: 'Aucune',
        toggleSubDesc: 'Ajouter note',
        addNote: '+ Note',
        editNote: 'Note',
    },
    en: {
        appTitle: 'To-Do List',
        folders: 'Folders',
        newFolder: '+ New Folder',
        folderNamePlaceholder: 'Folder Name',
        create: 'Create',
        cancel: 'Cancel',
        taskPlaceholder: 'New task...',
        subtaskPlaceholder: 'Subtask...',
        dueOptional: 'Due Date (Optional)',
        add: 'Add',
        clearDone: 'Clear Completed Tasks',
        exportData: 'Export',
        importData: 'Import',
        searchPlaceholder: 'Search...',
        priorityCritical: 'Critical',
        priorityHigh: 'High',
        priorityMedium: 'Medium',
        priorityNormal: 'Normal',
        priorityLow: 'Low',
        priorityNone: 'No priority',
        noFolder: 'No Folder',
        noFolderShort: 'None',
        addToFolder: 'Add to Folder',
        changeFolder: 'Change Folder',
        editPriority: 'Edit Priority',
        priorityCriticalLabel: 'Critical',
        priorityHighLabel: 'High',
        priorityMediumLabel: 'Medium',
        priorityNormalLabel: 'Normal',
        priorityLowLabel: 'Low',
        priorityNoneLabel: 'None',
        dueLabel: 'Due: ',
        overdueLabel: 'Overdue: ',
        addDue: '+ Date',
        editDue: 'Edit Date',
        edit: '✎',
        delete: '×',
        reorder: 'Reorder',
        addSubtasks: '+ Subtasks',
        addSubtasksInput: '+ Add a subtask',
        renameFolder: 'Rename',
        deleteFolder: 'Delete',
        summaryRest: 'tasks left',
        summaryDone: 'completed',
        summaryTotal: 'total',
        filterAll: 'All',
        filterActive: 'Active',
        filterDone: 'Done',
        filterTrash: 'Trash',
        sortNewest: 'Newest',
        sortOldest: 'Oldest',
        sortAlpha: 'A → Z',
        sortAlphaDesc: 'Z → A',
        sortOrder: 'Custom Order',
        sortPriority: 'Priority',
        sortDue: 'Due Date (Closest)',
        sortDueDesc: 'Due Date (Furthest)',
        sortFolderAlpha: 'Folder (A → Z)',
        sortFolderAlphaDesc: 'Folder (Z → A)',
        emptyDefault: 'No tasks in this folder. Add one!',
        emptyActive: 'No active tasks.',
        emptyDone: 'No completed tasks.',
        emptyTrash: 'Trash is empty.',
        emptySearch: 'No results found.',
        importConfirm: 'Importing will merge data with existing tasks. Continue?',
        titleTheme: 'Toggle Theme',
        titleToggleDesc: 'Add/Edit Note',
        restore: 'Restore',
        deletePermanent: 'Delete Permanently',
        emptyTrash: 'Empty Trash',
        statsOverdue: 'Overdue',
        statsUpcoming: 'Upcoming',
        statNone: 'None',
        toggleSubDesc: 'Add Note',
        addNote: '+ Note',
        editNote: 'Note',
    }
};

let currentLang = localStorage.getItem(STORAGE_LANG) || 'fr';

let tasks = loadJSON(STORAGE_TASKS, []);
let folders = loadJSON(STORAGE_FOLDERS, []);
if (!folders.some(f => f.id === DEFAULT_FOLDER_ID)) {
    folders.unshift({ id: DEFAULT_FOLDER_ID, name: t("noFolder") });
}
let currentFolderId = FOLDER_ALL;
let statusFilter = 'all';
let sortMode = 'newest';
let dragSourceIndex = null;

// Fuse Instance
let fuse;
const fuseOptions = {
    keys: ['text', 'subtasks.text'],
    threshold: 0.4,
    ignoreLocation: true
};

function initFuse() {
    fuse = new Fuse(tasks, fuseOptions);
}

function updateFuse() {
    if (fuse) {
        fuse.setCollection(tasks);
    } else {
        initFuse();
    }
}

// Translation Helper
function t(key) {
    return (translations[currentLang] && translations[currentLang][key]) || key;
}

function applyTranslations() {
    if (langSelect) langSelect.value = currentLang;

    document.title = t('appTitle');
    const appTitleEl = document.getElementById('app-title');
    if (appTitleEl) appTitleEl.textContent = t('appTitle');
    const themeBtn = document.getElementById('theme-toggle');
    if (themeBtn) themeBtn.title = t('titleTheme');

    document.getElementById('folders-title').textContent = t('folders');
    document.getElementById('new-folder-name').placeholder = t('folderNamePlaceholder');
    document.getElementById('add-folder-confirm').textContent = t('create');
    document.getElementById('add-folder-cancel').textContent = t('cancel');
    document.getElementById('add-folder-btn').textContent = t('newFolder');
    document.getElementById('task-input').placeholder = t('taskPlaceholder');
    document.getElementById('task-due').title = t('dueOptional');
    document.getElementById('task-submit-btn').textContent = t('add');
    document.getElementById('clear-done-btn').textContent = t('clearDone');
    document.getElementById('empty-trash-btn').textContent = t('emptyTrash');
    document.getElementById('btn-export').textContent = t('exportData');
    document.getElementById('btn-import').textContent = t('importData');
    document.getElementById('search-input').placeholder = t('searchPlaceholder');

    const taskPriority = document.getElementById('task-priority');
    if (taskPriority) {
        const val = taskPriority.value;
        taskPriority.innerHTML = `<option value="critical" style="color:var(--danger)">${t('priorityCritical')}</option>
                              <option value="high" style="color:#f97316">${t('priorityHigh')}</option>
                              <option value="medium" style="color:#eab308">${t('priorityMedium')}</option>
                              <option value="normal" style="color:#3b82f6">${t('priorityNormal')}</option>
                              <option value="low" style="color:#22c55e">${t('priorityLow')}</option>
                              <option value="none" style="color:var(--text-secondary)">${t('priorityNone')}</option>`;
        taskPriority.value = val;
    }

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (key) el.textContent = t(key);
    });

    document.querySelectorAll('#sort-select option[data-i18n]').forEach(opt => {
        const key = opt.getAttribute('data-i18n');
        if (key) opt.textContent = t(key);
    });

    renderFolders();
    renderSummary();
}

function setLang(lang) {
    currentLang = lang;
    localStorage.setItem(STORAGE_LANG, lang);
    applyTranslations();
    render();
}

function migrateTask(tObj, i) {
    if (!tObj.id) tObj.id = 't_' + Date.now() + '_' + Math.random().toString(36).slice(2, 8);
    if (tObj.createdAt == null) tObj.createdAt = Date.now();
    if (tObj.order == null) tObj.order = i;
    if (!tObj.priority) tObj.priority = 'normal';
    if (tObj.priority === undefined) tObj.priority = 'none';

    if (!tObj.subtasks) tObj.subtasks = [];
    if (tObj.deleted == null) tObj.deleted = false;
    if (!tObj.description) tObj.description = '';
    if (tObj.subtasks) {
        tObj.subtasks.forEach(st => {
            if (!st.description) st.description = '';
        });
    }
    return tObj;
}
tasks = tasks.map(migrateTask);
initFuse();

function loadJSON(key, fallback) {
    try {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : fallback;
    } catch (e) {
        return fallback;
    }
}

function saveTasks() {
    localStorage.setItem(STORAGE_TASKS, JSON.stringify(tasks));
    updateFuse();
}
function saveFolders() {
    localStorage.setItem(STORAGE_FOLDERS, JSON.stringify(folders));
}

function getTheme() {
    return localStorage.getItem(STORAGE_THEME) || 'dark';
}
function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme === 'dark' ? 'dark' : 'light');
    localStorage.setItem(STORAGE_THEME, theme);
    iconSun.style.display = theme === 'dark' ? 'none' : 'block';
    iconMoon.style.display = theme === 'dark' ? 'block' : 'none';
}
function applyTheme() {
    setTheme(getTheme());
}

function getTasksForCurrentFolder() {
    let filtered = [...tasks];
    if (statusFilter !== 'trash') {
        filtered = filtered.filter(t => !t.deleted);
    } else {
        return tasks.filter(t => t.deleted);
    }

    if (currentFolderId === FOLDER_ALL || currentFolderId == null) return filtered;
    if (currentFolderId === DEFAULT_FOLDER_ID || currentFolderId === '') return filtered.filter(t => !t.folderId || t.folderId === DEFAULT_FOLDER_ID);
    return filtered.filter(t => t.folderId === currentFolderId);
}

function getDisplayedTasks() {
    let list;
    const q = (searchInput && searchInput.value.trim()) || '';

    if (statusFilter === 'trash') {
        list = tasks.filter(t => t.deleted);
        if (q && fuse) {
            const results = fuse.search(q);
            const resultIds = new Set(results.map(r => r.item.id));
            list = list.filter(t => resultIds.has(t.id));
        }
    } else {
        if (q && fuse) {
            const results = fuse.search(q);
            list = results.map(result => result.item).filter(t => !t.deleted);

            if (currentFolderId !== FOLDER_ALL) {
                if (currentFolderId === DEFAULT_FOLDER_ID) {
                    list = list.filter(t => !t.folderId || t.folderId === DEFAULT_FOLDER_ID);
                } else {
                    list = list.filter(t => t.folderId === currentFolderId);
                }
            }
        } else {
            list = getTasksForCurrentFolder();
        }

        if (statusFilter === 'active') list = list.filter(t => !t.done);
        if (statusFilter === 'done') list = list.filter(t => t.done);
    }

    // Sorting
    if (!q && statusFilter !== 'trash') {
        const pWeight = { 'critical': 6, 'high': 5, 'medium': 4, 'normal': 3, 'low': 2, 'none': 1 };

        if (sortMode === 'newest') list = [...list].sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));
        else if (sortMode === 'oldest') list = [...list].sort((a, b) => (a.createdAt || 0) - (b.createdAt || 0));
        else if (sortMode === 'alpha') list = [...list].sort((a, b) => (a.text || '').localeCompare(b.text || ''));
        else if (sortMode === 'alpha-desc') list = [...list].sort((a, b) => (b.text || '').localeCompare(a.text || ''));
        else if (sortMode === 'order') list = [...list].sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
        else if (sortMode === 'priority') list = [...list].sort((a, b) => (pWeight[b.priority || 'none'] || 1) - (pWeight[a.priority || 'none'] || 1));
        else if (sortMode === 'due-date') {
            list = [...list].sort((a, b) => {
                if (!a.dueDate && !b.dueDate) return 0;
                if (!a.dueDate) return 1;
                if (!b.dueDate) return -1;
                return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime();
            });
        }
        else if (sortMode === 'due-date-desc') {
            list = [...list].sort((a, b) => {
                if (!a.dueDate && !b.dueDate) return 0;
                if (!a.dueDate) return 1;
                if (!b.dueDate) return -1;
                return new Date(b.dueDate).getTime() - new Date(a.dueDate).getTime();
            });
        }
        else if (sortMode === 'folder-alpha') {
            list = [...list].sort((a, b) => {
                const fan = (a.folderId ? (folders.find(f => f.id === a.folderId)?.name) : '') || '';
                const fbn = (b.folderId ? (folders.find(f => f.id === b.folderId)?.name) : '') || '';
                return fan.localeCompare(fbn);
            });
        }
        else if (sortMode === 'folder-alpha-desc') {
            list = [...list].sort((a, b) => {
                const fan = (a.folderId ? (folders.find(f => f.id === a.folderId)?.name) : '') || '';
                const fbn = (b.folderId ? (folders.find(f => f.id === b.folderId)?.name) : '') || '';
                return fbn.localeCompare(fan);
            });
        }
    }

    return list;
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text == null ? '' : text;
    return div.innerHTML;
}

function formatDue(dueDate) {
    if (!dueDate) return '';
    const d = new Date(dueDate);
    if (isNaN(d.getTime())) return '';
    return d.toLocaleDateString(currentLang === 'fr' ? 'fr-FR' : 'en-US', { day: 'numeric', month: 'short', year: 'numeric' });
}
function isOverdue(dueDate) {
    if (!dueDate) return false;
    const d = new Date(dueDate);
    d.setHours(23, 59, 59, 999);
    return !isNaN(d.getTime()) && d < new Date();
}

function renderSummary() {
    const list = getTasksForCurrentFolder();
    const total = list.length;
    const done = list.filter(t => t.done).length;
    const rest = total - done;
    const pct = total ? Math.round((done / total) * 100) : 0;
    progressBarFill.style.width = pct + '%';
    donutFill.setAttribute('stroke-dasharray', 100);
    donutFill.setAttribute('stroke-dashoffset', 100 - pct);

    summaryStats.innerHTML = `<strong>${rest}</strong> ${t('summaryRest')} · <strong>${done}</strong> ${t('summaryDone')} · <strong>${total}</strong> ${t('summaryTotal')}`;

    // Extra Stats
    if (summaryStatsExtra) {
        if (statusFilter === 'trash') {
            summaryStatsExtra.innerHTML = '';
        } else {
            const now = new Date();
            now.setHours(0, 0, 0, 0);
            const overdue = list.filter(t => !t.done && t.dueDate && new Date(t.dueDate) < now).length;
            const upcoming = list.filter(t => !t.done && t.dueDate && new Date(t.dueDate) >= now).length;

            let extras = [];
            if (overdue > 0) extras.push(`<span style="color:var(--danger)">${t('statsOverdue')}: ${overdue}</span>`);
            if (upcoming > 0) extras.push(`<span style="color:var(--text-secondary)">${t('statsUpcoming')}: ${upcoming}</span>`);

            summaryStatsExtra.innerHTML = extras.join(' · ');
        }
    }

    const folderIds = [DEFAULT_FOLDER_ID, ...folders.filter(f => f.id !== DEFAULT_FOLDER_ID).map(f => f.id)];
    const maxDone = Math.max(1, ...folderIds.map(fid => {
        return list.filter(t => (t.folderId || DEFAULT_FOLDER_ID) === fid).filter(t => t.done).length;
    }));
    barsChart.innerHTML = folderIds.map(fid => {
        const name = fid === DEFAULT_FOLDER_ID ? t('noFolder') : (folders.find(f => f.id === fid)?.name || fid);
        const count = list.filter(t => (t.folderId || DEFAULT_FOLDER_ID) === fid).filter(t => t.done).length;
        const h = maxDone ? (count / maxDone) * 100 : 0;
        return `<div class="bar-wrap"><div class="bar ${count ? 'filled' : ''}" style="height: ${h}%"></div><span class="bar-label">${escapeHtml(name)}</span></div>`;
    }).join('');
}

function renderFolders() {
    folderSelect.innerHTML = '<option value="">' + t('noFolder') + '</option>';
    folders.forEach(f => {
        if (f.id === DEFAULT_FOLDER_ID) return;
        const opt = document.createElement('option');
        opt.value = f.id;
        opt.textContent = f.name;
        folderSelect.appendChild(opt);
    });

    foldersListEl.innerHTML = '';
    const chips = [
        { id: FOLDER_ALL, name: t('filterAll') },
        { id: DEFAULT_FOLDER_ID, name: t('noFolder') },
        ...folders.filter(f => f.id !== DEFAULT_FOLDER_ID)
    ];
    chips.forEach(f => {
        const isActive = currentFolderId === f.id;
        const chip = document.createElement('button');
        chip.type = 'button';
        chip.className = 'folder-chip' + (isActive ? ' active' : '');
        chip.dataset.folderId = f.id;
        if (f.id !== DEFAULT_FOLDER_ID && f.id !== FOLDER_ALL) {
            chip.innerHTML = `<span class="folder-name">${escapeHtml(f.name)}</span> <button type="button" class="folder-edit" data-folder-id="${escapeHtml(f.id)}" title="${escapeHtml(t('renameFolder'))}">✎</button> <button type="button" class="folder-delete" data-folder-id="${escapeHtml(f.id)}" title="${escapeHtml(t('deleteFolder'))}">×</button>`;
        } else {
            chip.innerHTML = escapeHtml(f.name);
        }
        foldersListEl.appendChild(chip);
    });

    foldersListEl.querySelectorAll('.folder-chip').forEach(chip => {
        chip.addEventListener('click', (e) => {
            if (e.target.closest('.folder-edit') || e.target.closest('.folder-delete')) return;

            if (!chip.classList.contains('editing')) {
                currentFolderId = chip.dataset.folderId || FOLDER_ALL;
                render();
            }
        });

        const editBtn = chip.querySelector('.folder-edit');
        if (editBtn) {
            editBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                editFolder(e.currentTarget.dataset.folderId, chip);
            });
        }

        const deleteBtn = chip.querySelector('.folder-delete');
        if (deleteBtn) {
            deleteBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                deleteFolder(e.currentTarget.dataset.folderId);
            });
        }
    });
}

function editFolder(folderId, chipEl) {
    if (folderId === DEFAULT_FOLDER_ID || folderId === FOLDER_ALL) return;
    const folder = folders.find(f => f.id === folderId);
    if (!folder) return;
    const nameEl = chipEl.querySelector('.folder-name');
    if (!nameEl) return;
    const oldName = folder.name;
    chipEl.classList.add('editing');
    const inp = document.createElement('input');
    inp.type = 'text';
    inp.className = 'edit-input';
    inp.value = oldName;
    inp.maxLength = 30;
    nameEl.replaceWith(inp);
    inp.focus();
    inp.select();

    let isSaving = false;
    const finishEdit = () => {
        if (isSaving) return;
        isSaving = true;
        const newName = inp.value.trim();
        if (newName && newName !== oldName) {
            folder.name = newName;
            saveFolders();
        }
        chipEl.classList.remove('editing');
        const newNameEl = document.createElement('span');
        newNameEl.className = 'folder-name';
        newNameEl.textContent = folder.name;
        if (inp.parentNode) inp.replaceWith(newNameEl);
        render();
    };

    inp.addEventListener('blur', finishEdit);
    inp.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            finishEdit();
        } else if (e.key === 'Escape') {
            e.preventDefault();
            isSaving = true;
            chipEl.classList.remove('editing');
            const newNameEl = document.createElement('span');
            newNameEl.className = 'folder-name';
            newNameEl.textContent = oldName;
            if (inp.parentNode) inp.replaceWith(newNameEl);
            render();
        }
    });
}

function deleteFolder(folderId) {
    if (folderId === DEFAULT_FOLDER_ID || folderId === FOLDER_ALL) return;
    tasks.forEach(t => { if (t.folderId === folderId) t.folderId = undefined; });
    folders = folders.filter(f => f.id !== folderId);
    if (currentFolderId === folderId) currentFolderId = FOLDER_ALL;
    saveTasks();
    saveFolders();
    render();
}

function getTaskById(id) {
    return tasks.find(t => t.id === id);
}

function renderTasks() {
    const displayed = getDisplayedTasks();
    listEl.innerHTML = '';

    if (statusFilter === 'trash') {
        clearDoneBtn.style.display = 'none';
        if (emptyTrashBtn) emptyTrashBtn.style.display = 'inline-block';
    } else {
        clearDoneBtn.style.display = 'inline-block';
        if (emptyTrashBtn) emptyTrashBtn.style.display = 'none';
    }

    if (displayed.length === 0) {
        let msg = t('emptyDefault');
        if (statusFilter === 'done') msg = t('emptyDone');
        else if (statusFilter === 'active') msg = t('emptyActive');
        else if (statusFilter === 'trash') msg = t('emptyTrash');
        if (searchInput && searchInput.value.trim()) msg = t('emptySearch');
        listEl.innerHTML = '<li class="empty-msg"><span class="icon">📋</span><br>' + msg + '</li>';
        return;
    }

    displayed.forEach((task, pos) => {
        const globalIndex = tasks.findIndex(t => t.id === task.id);
        if (globalIndex === -1) return;

        const li = document.createElement('li');
        li.className = 'task' + (task.done ? ' done' : '') + (task.deleted ? ' deleted' : '');
        li.dataset.taskId = task.id;
        li.draggable = !task.deleted;

        if (task.deleted) {
            li.innerHTML = `
        <div class="task-body">
             <div class="task-text">${escapeHtml(task.text)}</div>
             <div class="task-meta"><small>${t('delete')}: ${new Date(task.deletedAt || Date.now()).toLocaleDateString()}</small></div>
        </div>
        <div class="task-actions task-actions-trash">
             <button type="button" class="btn-icon-restore" data-id="${task.id}" title="${t('restore')}">↺</button>
             <button type="button" class="delete-permanent" data-id="${task.id}" title="${t('deletePermanent')}">×</button>
        </div>
      `;
            listEl.appendChild(li);

            li.querySelector('.btn-icon-restore').addEventListener('click', () => restoreTask(task.id));
            li.querySelector('.delete-permanent').addEventListener('click', () => permanentDeleteTask(task.id));
            return;
        }

        const folderName = task.folderId ? (folders.find(f => f.id === task.folderId)?.name || '') : '';
        const dueStr = formatDue(task.dueDate);
        const overdue = isOverdue(task.dueDate);
        const priority = task.priority || 'none';

        let metaHtml = '';

        // Folder Badge
        const folderLabel = folderName || t('noFolderShort');
        metaHtml += `<button type="button" class="task-folder-badge" data-task-id="${escapeHtml(task.id)}" title="${escapeHtml(t('changeFolder'))}">📁 ${escapeHtml(folderLabel)}</button>`;

        // Priority
        const priorityLabels = {
            'critical': t('priorityCriticalLabel'),
            'high': t('priorityHighLabel'),
            'medium': t('priorityMediumLabel'),
            'normal': t('priorityNormalLabel'),
            'low': t('priorityLowLabel'),
            'none': t('priorityNoneLabel')
        };

        metaHtml += `<span class="task-priority-wrap"><span class="task-priority ${priority}" data-task-id="${escapeHtml(task.id)}" title="${escapeHtml(t('editPriority'))} (${escapeHtml(priorityLabels[priority])})"></span></span>`;

        if (dueStr) {
            const dueLabel = overdue ? t('overdueLabel') : t('dueLabel');
            metaHtml += `<button type="button" class="badge-due ${overdue ? 'overdue' : 'ok'}" data-task-id="${escapeHtml(task.id)}" title="${escapeHtml(t('editDue'))}">${escapeHtml(dueLabel)}${escapeHtml(dueStr)}</button>`;
        } else {
            metaHtml += `<button type="button" class="badge-due add-due" data-task-id="${escapeHtml(task.id)}" title="${escapeHtml(t('editDue'))}">${escapeHtml(t('addDue'))}</button>`;
        }

        // Subtasks
        let subtasksHtml = '';
        if (task.subtasks && task.subtasks.length > 0) {
            subtasksHtml = '<div class="subtasks">';
            task.subtasks.forEach((st, si) => {
                subtasksHtml += `<div class="subtask ${st.done ? 'done' : ''}">
          <input type="checkbox" data-task-id="${escapeHtml(task.id)}" data-sub-index="${si}" ${st.done ? 'checked' : ''} />
          <div class="subtask-body">
              <span class="subtask-text"><span class="subtask-text-content">${escapeHtml(st.text)}</span> <button type="button" class="btn-edit subtask-edit" data-task-id="${escapeHtml(task.id)}" data-sub-index="${si}" title="${escapeHtml(t('edit'))}">✎</button> <button type="button" class="btn-add-note subtask-desc-toggle" data-task-id="${escapeHtml(task.id)}" data-sub-index="${si}" title="${escapeHtml(t('toggleSubDesc'))}">${st.description ? t('editNote') : t('addNote')}</button></span>
              <div class="subtask-description-wrap ${st.description ? 'open' : ''}" id="st-desc-${task.id}-${si}">
                  <input type="text" class="subtask-desc-input" placeholder="${t('subtaskPlaceholder')}" value="${escapeHtml(st.description)}" data-task-id="${escapeHtml(task.id)}" data-sub-index="${si}">
              </div>
          </div>
          <button type="button" class="subtask-delete" data-task-id="${escapeHtml(task.id)}" data-sub-index="${si}">${t('delete')}</button>
        </div>`;
            });
            subtasksHtml += `<div class="add-subtask-row">
        <input type="text" placeholder="${escapeHtml(t('subtaskPlaceholder'))}" data-task-id="${escapeHtml(task.id)}" class="subtask-input" />
        <button type="button" class="btn btn-sm btn-ghost add-subtask-btn" data-task-id="${escapeHtml(task.id)}">${t('add')}</button>
      </div>`;
            subtasksHtml += '</div>';
        } else {
            subtasksHtml = `<button type="button" class="task-toggle-sub add-sub-btn" data-task-id="${escapeHtml(task.id)}">${t('addSubtasks')}</button>`;
        }

        const descriptionHtml = `
      <div class="task-description-wrap" id="desc-wrap-${task.id}">
        <textarea class="task-description-input" data-task-id="${task.id}" placeholder="Note...">${escapeHtml(task.description)}</textarea>
      </div>
    `;

        li.innerHTML = `
      <span class="task-drag" title="${escapeHtml(t('reorder'))}" aria-label="${escapeHtml(t('reorder'))}"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h16M4 16h16" /></svg></span>
      <input type="checkbox" ${task.done ? 'checked' : ''} data-index="${globalIndex}" />
      <div class="task-body">
        <div class="task-text">
            <span class="task-text-content">${escapeHtml(task.text)}</span> 
            <button type="button" class="btn-edit task-edit" data-task-id="${escapeHtml(task.id)}" title="${escapeHtml(t('edit'))}">✎</button>
            <button type="button" class="btn-add-note btn-toggle-desc" data-task-id="${escapeHtml(task.id)}" title="${escapeHtml(t('titleToggleDesc'))}">${task.description ? t('editNote') : t('addNote')}</button>
        </div>
        ${descriptionHtml}
        <div class="task-meta">${metaHtml}</div>
        ${subtasksHtml}
      </div>
      <div class="task-actions">
        <button type="button" class="task-delete" data-index="${globalIndex}">${t('delete')}</button>
      </div>
    `;
        listEl.appendChild(li);

        li.addEventListener('dragstart', onDragStart);
        li.addEventListener('dragover', onDragOver);
        li.addEventListener('dragleave', onDragLeave);
        li.addEventListener('drop', onDrop);
        li.addEventListener('dragend', onDragEnd);
    });

    listEl.querySelectorAll('input[type="checkbox"]').forEach(cb => {
        if (cb.dataset.index != null) cb.addEventListener('change', toggleDone);
        if (cb.dataset.subIndex != null) cb.addEventListener('change', toggleSubtask);
    });
    listEl.querySelectorAll('.task-delete').forEach(btn => btn.addEventListener('click', deleteTask));
    listEl.querySelectorAll('.task-edit').forEach(btn => btn.addEventListener('click', (e) => editTask(e.target.dataset.taskId)));
    listEl.querySelectorAll('.task-folder-badge').forEach(btn => btn.addEventListener('click', (e) => showChangeFolder(e.target.dataset.taskId)));
    listEl.querySelectorAll('.task-priority[data-task-id]').forEach(el => el.addEventListener('click', (e) => showChangePriority(e.target.dataset.taskId)));
    listEl.querySelectorAll('.badge-due').forEach(el => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            if (el.dataset.taskId) showEditDue(el.dataset.taskId, el);
        });
    });
    listEl.querySelectorAll('.subtask-delete').forEach(btn => btn.addEventListener('click', deleteSubtask));
    listEl.querySelectorAll('.subtask-edit').forEach(btn => btn.addEventListener('click', (e) => editSubtask(e.target.dataset.taskId, parseInt(e.target.dataset.subIndex, 10))));
    listEl.querySelectorAll('.add-sub-btn').forEach(btn => btn.addEventListener('click', showSubtaskInput));
    listEl.querySelectorAll('.add-subtask-btn').forEach(btn => btn.addEventListener('click', addSubtask));
    listEl.querySelectorAll('.subtask-input').forEach(inp => {
        inp.addEventListener('blur', (e) => {
            if (!inp.value.trim()) {
                setTimeout(() => {
                    if (!inp.value.trim()) render();
                }, 200);
            }
        });
        inp.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                document.querySelector('.add-subtask-btn[data-task-id="' + inp.dataset.taskId + '"]').click();
            }
        });
    });

    // Subtask Descriptions
    listEl.querySelectorAll('.subtask-desc-toggle').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const tid = btn.dataset.taskId;
            const si = btn.dataset.subIndex;
            const wrap = document.getElementById(`st-desc-${tid}-${si}`);
            wrap.classList.toggle('open');
            if (wrap.classList.contains('open')) {
                const inp = wrap.querySelector('input');
                if (inp) inp.focus();
            }
        });
    });
    listEl.querySelectorAll('.subtask-desc-input').forEach(inp => {
        inp.addEventListener('change', (e) => {
            const tid = inp.dataset.taskId;
            const si = inp.dataset.subIndex;
            const task = getTaskById(tid);
            if (task && task.subtasks[si]) {
                task.subtasks[si].description = inp.value.trim();
                saveTasks();
                const btn = listEl.querySelector(`.subtask-desc-toggle[data-task-id="${tid}"][data-sub-index="${si}"]`);
                if (btn) btn.textContent = task.subtasks[si].description ? t('editNote') : t('addNote');
            }
        });
    });

    // Task Description Toggles
    listEl.querySelectorAll('.btn-toggle-desc').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const id = btn.dataset.taskId;
            const wrap = document.getElementById(`desc-wrap-${id}`);
            if (wrap) {
                wrap.classList.toggle('open');
                if (wrap.classList.contains('open')) {
                    const txt = wrap.querySelector('textarea');
                    if (txt) txt.focus();
                }
            }
        });
    });
    listEl.querySelectorAll('.task-description-input').forEach(txt => {
        txt.addEventListener('change', (e) => {
            const id = txt.dataset.taskId;
            const val = txt.value.trim();
            const task = getTaskById(id);
            if (task) {
                task.description = val;
                saveTasks();
                const btn = listEl.querySelector(`.btn-toggle-desc[data-task-id="${id}"]`);
                if (btn) btn.textContent = task.description ? t('editNote') : t('addNote');
            }
        });
    });
}

function onDragStart(e) {
    const li = e.target.closest('.task');
    if (!li) return;
    const taskId = li.dataset.taskId;
    const displayed = getDisplayedTasks();
    const idx = displayed.findIndex(t => t.id === taskId);
    if (idx === -1) return;
    dragSourceIndex = idx;
    li.classList.add('dragging');
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', taskId);
}
function onDragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    const li = e.target.closest('.task');
    if (li && !li.classList.contains('dragging')) li.classList.add('drag-over');
}
function onDragLeave(e) {
    const li = e.target.closest('.task');
    if (li) li.classList.remove('drag-over');
}
function onDrop(e) {
    e.preventDefault();
    const li = e.target.closest('.task');
    if (li) li.classList.remove('drag-over');
    const taskId = e.dataTransfer.getData('text/plain');
    if (!taskId || dragSourceIndex == null) return;
    const displayed = getDisplayedTasks();
    const targetLi = e.target.closest('.task');
    const targetId = targetLi ? targetLi.dataset.taskId : null;
    const targetIndex = targetId ? displayed.findIndex(t => t.id === targetId) : -1;
    if (targetIndex === -1) return;
    const reordered = [...displayed];
    const [moved] = reordered.splice(dragSourceIndex, 1);
    reordered.splice(targetIndex, 0, moved);
    const allInFolder = getTasksForCurrentFolder().map(t => t.id);
    const orderMap = {};
    reordered.forEach((t, i) => { orderMap[t.id] = i; });
    tasks.forEach(t => {
        if (allInFolder.includes(t.id)) t.order = orderMap[t.id] ?? t.order;
    });
    sortMode = 'order';
    sortSelect.value = 'order';
    saveTasks();
    render();
}
function onDragEnd(e) {
    const li = e.target.closest('.task');
    if (li) li.classList.remove('dragging');
    listEl.querySelectorAll('.task').forEach(el => el.classList.remove('drag-over'));
    dragSourceIndex = null;
}

function showSubtaskInput(e) {
    const taskId = e.target.dataset.taskId;
    const task = getTaskById(taskId);
    if (!task) return;
    if (!task.subtasks) task.subtasks = [];
    const btn = e.target;
    const wrap = document.createElement('div');
    wrap.className = 'add-subtask-row';
    wrap.innerHTML = `<input type="text" placeholder="${escapeHtml(t('subtaskPlaceholder'))}" data-task-id="${escapeHtml(taskId)}" class="subtask-input" />
    <button type="button" class="btn btn-sm btn-ghost add-subtask-btn" data-task-id="${escapeHtml(taskId)}">${t('add')}</button>`;
    btn.replaceWith(wrap);

    const inp = wrap.querySelector('input');
    inp.focus();
    wrap.querySelector('.add-subtask-btn').addEventListener('click', addSubtask);
    inp.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') wrap.querySelector('.add-subtask-btn').click();
    });

    inp.addEventListener('blur', (e) => {
        if (!inp.value.trim()) {
            setTimeout(() => {
                if (!inp.value.trim()) {
                    render();
                }
            }, 200);
        }
    });
}

function addSubtask(e) {
    const taskId = e.target.dataset.taskId;
    const task = getTaskById(taskId);
    if (!task) return;
    const row = e.target.closest('.add-subtask-row');
    const inp = row && row.querySelector('.subtask-input');
    const text = inp && inp.value.trim();
    if (!text) return;
    if (!task.subtasks) task.subtasks = [];
    task.subtasks.push({ text, done: false, description: '' });
    saveTasks();
    render();
}

function toggleSubtask(e) {
    const taskId = e.target.dataset.taskId;
    const subIndex = parseInt(e.target.dataset.subIndex, 10);
    const task = getTaskById(taskId);
    if (!task || !task.subtasks || subIndex < 0 || subIndex >= task.subtasks.length) return;
    task.subtasks[subIndex].done = !task.subtasks[subIndex].done;
    saveTasks();
    render();
}

function editTask(taskId) {
    const task = getTaskById(taskId);
    if (!task) return;
    const taskEl = listEl.querySelector(`li.task[data-task-id="${taskId}"]`);
    if (!taskEl) return;
    const textEl = taskEl.querySelector('.task-text-content');
    if (!textEl) return;
    const oldText = task.text;
    const btn = taskEl.querySelector('.task-edit');
    const inp = document.createElement('input');
    inp.type = 'text';
    inp.className = 'edit-input';
    inp.value = oldText;
    textEl.replaceWith(inp);
    btn.style.display = 'none';
    inp.focus();
    inp.select();

    let isSaving = false;
    const finishEdit = () => {
        if (isSaving) return;
        isSaving = true;
        const newText = inp.value.trim();
        if (newText && newText !== oldText) {
            task.text = newText;
            saveTasks();
        }
        const newTextEl = document.createElement('span');
        newTextEl.className = 'task-text-content';
        newTextEl.textContent = task.text;
        if (inp.parentNode) inp.replaceWith(newTextEl);
        btn.style.display = '';
        render();
    };

    inp.addEventListener('blur', finishEdit);
    inp.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            finishEdit();
        } else if (e.key === 'Escape') {
            e.preventDefault();
            isSaving = true;
            const newTextEl = document.createElement('span');
            newTextEl.className = 'task-text-content';
            newTextEl.textContent = oldText;
            if (inp.parentNode) inp.replaceWith(newTextEl);
            btn.style.display = '';
        }
    });
}

function showChangeFolder(taskId) {
    const task = getTaskById(taskId);
    if (!task) return;
    const taskEl = listEl.querySelector(`li.task[data-task-id="${taskId}"]`);
    if (!taskEl) return;
    const badge = taskEl.querySelector('.task-folder-badge');
    if (!badge) return;
    const oldFolderId = task.folderId || '';
    const select = document.createElement('select');
    select.className = 'task-folder-select';
    select.innerHTML = '<option value="">' + t('noFolder') + '</option>';
    folders.forEach(f => {
        if (f.id === DEFAULT_FOLDER_ID) return;
        const opt = document.createElement('option');
        opt.value = f.id;
        opt.textContent = f.name;
        if (task.folderId === f.id) opt.selected = true;
        select.appendChild(opt);
    });
    badge.replaceWith(select);
    select.focus();
    const finishChange = () => {
        const newFolderId = select.value || null;
        if (newFolderId !== oldFolderId) {
            task.folderId = newFolderId || undefined;
            saveTasks();
        }
        render();
    };
    select.addEventListener('change', finishChange);
    select.addEventListener('blur', finishChange);
    select.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            e.preventDefault();
            render();
        }
    });
}

function showChangePriority(taskId) {
    const task = getTaskById(taskId);
    if (!task) return;
    const taskEl = listEl.querySelector(`li.task[data-task-id="${taskId}"]`);
    if (!taskEl) return;
    const wrap = taskEl.querySelector('.task-priority-wrap');
    if (!wrap) return;
    const currentPriority = task.priority || 'none';
    const select = document.createElement('select');
    select.className = 'task-priority-select';
    select.innerHTML = `<option value="critical" style="color:var(--danger)">${t('priorityCritical')}</option>
                      <option value="high" style="color:#f97316">${t('priorityHigh')}</option>
                      <option value="medium" style="color:#eab308">${t('priorityMedium')}</option>
                      <option value="normal" style="color:#3b82f6">${t('priorityNormal')}</option>
                      <option value="low" style="color:#22c55e">${t('priorityLow')}</option>
                      <option value="none" style="color:var(--text-secondary)">${t('priorityNone')}</option>`;
    select.value = currentPriority;

    wrap.innerHTML = '';
    wrap.appendChild(select);
    select.focus();
    const finishChange = () => {
        const newPriority = select.value || 'none';
        if (newPriority !== currentPriority) {
            task.priority = newPriority;
            saveTasks();
        }
        render();
    };
    select.addEventListener('change', finishChange);
    select.addEventListener('blur', finishChange);
    select.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            e.preventDefault();
            render();
        }
    });
}

function showEditDue(taskId, badgeEl) {
    const task = getTaskById(taskId);
    if (!task) return;
    const taskEl = listEl.querySelector(`li.task[data-task-id="${taskId}"]`);
    if (!taskEl) return;
    const meta = taskEl.querySelector('.task-meta');
    if (!meta) return;
    const oldDue = task.dueDate || '';
    const inp = document.createElement('input');
    inp.type = 'date';
    inp.className = 'task-due-input';
    if (task.dueDate) {
        try {
            const d = new Date(task.dueDate);
            if (!isNaN(d.getTime())) inp.value = d.toISOString().slice(0, 10);
        } catch (_) { }
    }
    badgeEl.replaceWith(inp);
    inp.focus();
    const finishEdit = () => {
        const val = inp.value || null;
        if (val !== (oldDue ? (new Date(oldDue).toISOString().slice(0, 10)) : '')) {
            task.dueDate = val || undefined;
            saveTasks();
        }
        render();
    };
    inp.addEventListener('change', finishEdit);
    inp.addEventListener('blur', finishEdit);
    inp.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            e.preventDefault();
            render();
        }
    });
}

function editSubtask(taskId, subIndex) {
    const task = getTaskById(taskId);
    if (!task || !task.subtasks || subIndex < 0 || subIndex >= task.subtasks.length) return;
    const subtask = task.subtasks[subIndex];
    const taskEl = listEl.querySelector(`li.task[data-task-id="${taskId}"]`);
    if (!taskEl) return;
    const subtaskEl = taskEl.querySelectorAll('.subtask')[subIndex];
    if (!subtaskEl) return;
    const textEl = subtaskEl.querySelector('.subtask-text-content');
    if (!textEl) return;
    const btn = subtaskEl.querySelector('.subtask-edit');
    const oldText = subtask.text;
    const inp = document.createElement('input');
    inp.type = 'text';
    inp.className = 'edit-input';
    inp.value = oldText;
    textEl.replaceWith(inp);
    btn.style.display = 'none';
    inp.focus();
    inp.select();

    let isSaving = false;
    const finishEdit = () => {
        if (isSaving) return;
        isSaving = true;
        const newText = inp.value.trim();
        if (newText && newText !== oldText) {
            subtask.text = newText;
            saveTasks();
        }
        const newTextEl = document.createElement('span');
        newTextEl.className = 'subtask-text-content';
        newTextEl.textContent = subtask.text;
        if (inp.parentNode) inp.replaceWith(newTextEl);
        btn.style.display = '';
        render();
    };

    inp.addEventListener('blur', finishEdit);
    inp.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            finishEdit();
        } else if (e.key === 'Escape') {
            e.preventDefault();
            isSaving = true;
            const newTextEl = document.createElement('span');
            newTextEl.className = 'subtask-text-content';
            newTextEl.textContent = oldText;
            if (inp.parentNode) inp.replaceWith(newTextEl);
            btn.style.display = '';
        }
    });
}

function deleteSubtask(e) {
    const taskId = e.target.dataset.taskId;
    const subIndex = parseInt(e.target.dataset.subIndex, 10);
    const task = getTaskById(taskId);
    if (!task || !task.subtasks) return;
    task.subtasks.splice(subIndex, 1);
    saveTasks();
    render();
}

function render() {
    renderFolders();
    renderSummary();
    renderTasks();
}

function toggleDone(e) {
    const index = parseInt(e.target.dataset.index, 10);
    if (isNaN(index) || index < 0 || index >= tasks.length) return;
    tasks[index].done = !tasks[index].done;
    saveTasks();
    render();
}

function deleteTask(e) {
    const index = parseInt(e.target.dataset.index, 10);
    if (isNaN(index) || index < 0 || index >= tasks.length) return;
    tasks[index].deleted = true;
    tasks[index].deletedAt = Date.now();
    saveTasks();
    render();
}

function restoreTask(taskId) {
    const task = getTaskById(taskId);
    if (task) {
        task.deleted = false;
        task.deletedAt = undefined;
        saveTasks();
        render();
    }
}

function permanentDeleteTask(taskId) {
    if (!confirm('Confirmation ?')) return;
    const idx = tasks.findIndex(t => t.id === taskId);
    if (idx !== -1) {
        tasks.splice(idx, 1);
        saveTasks();
        render();
    }
}

if (emptyTrashBtn) {
    emptyTrashBtn.addEventListener('click', () => {
        if (!confirm('Vider toute la corbeille ?')) return;
        tasks = tasks.filter(t => !t.deleted);
        saveTasks();
        render();
    });
}

if (btnExport) {
    btnExport.addEventListener('click', () => {
        const data = {
            tasks: tasks,
            folders: folders,
            exportedAt: new Date().toISOString(),
            version: 1
        };
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'todo-backup-' + new Date().toISOString().slice(0, 10) + '.json';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    });
}

if (btnImport && importFile) {
    btnImport.addEventListener('click', () => {
        importFile.click();
    });

    importFile.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (!file) return;

        if (!confirm(t('importConfirm'))) {
            importFile.value = '';
            return;
        }

        const reader = new FileReader();
        reader.onload = (ev) => {
            try {
                const data = JSON.parse(ev.target.result);
                if (Array.isArray(data.folders)) {
                    data.folders.forEach(newF => {
                        if (newF.id !== DEFAULT_FOLDER_ID && !folders.some(f => f.id === newF.id)) {
                            folders.push(newF);
                        }
                    });
                }
                if (Array.isArray(data.tasks)) {
                    data.tasks.forEach(newT => {
                        const existingIdx = tasks.findIndex(t => t.id === newT.id);
                        if (existingIdx !== -1) {
                            const merged = migrateTask(newT, 0);
                            tasks[existingIdx] = merged;
                        } else {
                            tasks.push(migrateTask(newT, tasks.length));
                        }
                    });
                }
                saveTasks();
                saveFolders();
                render();
                alert('Import réussi !');
            } catch (err) {
                console.error(err);
                alert('Erreur lors de l\'import: ' + err.message);
            }
            importFile.value = '';
        };
        reader.readAsText(file);
    });
}

function clearDoneTasks() {
    tasks.forEach(t => {
        if (t.done && !t.deleted) {
            t.deleted = true;
            t.deletedAt = Date.now();
        }
    });
    saveTasks();
    render();
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = input.value.trim();
    if (!text) return;
    const taskFolderId = folderSelect.value || null;
    const priority = document.getElementById('task-priority').value || 'none';
    const due = document.getElementById('task-due').value || null;
    const newTask = {
        id: 't_' + Date.now() + '_' + Math.random().toString(36).slice(2, 8),
        text,
        done: false,
        folderId: taskFolderId || undefined,
        priority,
        dueDate: due || undefined,
        createdAt: Date.now(),
        order: tasks.length,
        subtasks: [],
        deleted: false,
        description: ''
    };
    tasks.push(newTask);
    saveTasks();
    input.value = '';
    document.getElementById('task-due').value = '';
    document.getElementById('task-priority').value = 'none';
    render();
});

addFolderBtn.addEventListener('click', () => {
    addFolderForm.style.display = 'flex';
    newFolderNameInput.value = '';
    newFolderNameInput.focus();
});
addFolderCancel.addEventListener('click', () => { addFolderForm.style.display = 'none'; });
addFolderConfirm.addEventListener('click', () => {
    const name = newFolderNameInput.value.trim();
    if (!name) return;
    folders.push({ id: 'f_' + Date.now(), name });
    saveFolders();
    addFolderForm.style.display = 'none';
    newFolderNameInput.value = '';
    render();
});
newFolderNameInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') addFolderConfirm.click();
    if (e.key === 'Escape') addFolderCancel.click();
});

clearDoneBtn.addEventListener('click', clearDoneTasks);
themeToggle.addEventListener('click', () => setTheme(getTheme() === 'dark' ? 'light' : 'dark'));

document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        statusFilter = btn.dataset.filter;
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        render();
    });
});
sortSelect.addEventListener('change', () => {
    sortMode = sortSelect.value;
    render();
});
searchInput.addEventListener('input', () => render());
if (langSelect) {
    langSelect.addEventListener('change', () => setLang(langSelect.value));
}

applyTranslations();
applyTheme();
render();

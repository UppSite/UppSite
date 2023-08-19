let global = {
    taken: [],
    nextId: 0
}

const setup = () => {
    if(localStorage.getItem('taken') !== null) {
        global.taken = JSON.parse(localStorage.getItem('taken'));
        for(let i = 0; i < global.taken.length; i ++) {
            let taak = global.taken[i];
            taak.id = getNextId();
            taakToevoegen(taak.titel, taak.eindDatum, taak.notities, taak.id);
        }
    }

    document.getElementById('clearAll').addEventListener('click', wisAlleTaken);
    document.getElementById('hideExpired').addEventListener('click', VerbergOfToonTeLate);
    document.getElementById('orderByDate').addEventListener('click', sorteerOpDatum);   // werkt niet
    document.getElementById('new').addEventListener('click', toonForm);
    document.getElementById('save').addEventListener('click', opslaan);
    document.getElementById('cancel').addEventListener('click', annuleren);
}

const toonForm = () => {
    document.getElementById('new').classList.add('hidden');
    document.getElementsByClassName('form')[0].classList.remove('hidden');
}

const verbergForm = () => {
    document.getElementsByClassName('form')[0].classList.add('hidden');
    document.getElementById('new').classList.remove('hidden');
}

const valideer = () => {
    valideerTitel();
    valideerEindDatum();
}

const valideerTitel = () => {
    let titel = document.getElementById('title');
    if(titel.value === '') {
        if(!titel.classList.contains('invalid')) {
            titel.classList.add('invalid');
        }
    }
    else {
        titel.classList.remove('invalid');
    }
}

const valideerEindDatum = () => {
    let eindDatum = document.getElementById('endDate');
    if(eindDatum.value === '') {
        if(!eindDatum.classList.contains('invalid')) {
            eindDatum.classList.add('invalid');
        }
    }
    else {
        eindDatum.classList.remove('invalid');
    }
}

const opslaan = () => {
    let titel = document.getElementById('title').value;
    let eindDatum = document.getElementById('endDate').value;
    let notities = document.getElementById('notes').value;

    valideer();

    if(titel !== '' && eindDatum !== '') {
        let id = getNextId();
        taakToevoegen(titel, eindDatum, notities, id);
        taakOpslaan(titel, eindDatum, notities, id);
        inputLeegmaken();
        verbergForm();
    }
}

const updateLocalStorage = () => {
    localStorage.setItem('taken', JSON.stringify(global.taken));
}

const getNextId = () => {
    global.nextId ++;
    return global.nextId - 1;
}

const taakOpslaan = (titel, eindDatum, notities, id) => {
    global.taken.push({
        titel: titel,
        eindDatum: eindDatum,
        notities: notities,
        id: id
    });

    updateLocalStorage();
}

const taakToevoegen = (titel, eindDatum, notities, id) => {
    if(notities === '') {
        notities = '-';
    }
    let taak = document.createElement('div');
    taak.classList.add('todo');
    taak.setAttribute('id', id);

    let taakTitel = document.createElement('h2');
    taakTitel.innerText = titel;
    taak.appendChild(taakTitel);

    let taakEindDatum = document.createElement('h3');
    eindDatum = new Date(eindDatum);
    if(eindDatum < new Date()) {
        taak.classList.add('expired');
    }
    taakEindDatum.innerText = eindDatum.toDateString();
    taak.appendChild(taakEindDatum);

    let taakNotities = document.createElement('p');
    taakNotities.innerText = notities;
    taak.appendChild(taakNotities);

    let btnTaakAfronden = document.createElement('button');
    btnTaakAfronden.innerText = 'Markeer als afgerond';
    btnTaakAfronden.addEventListener('click', taakAfronden);
    taak.appendChild(btnTaakAfronden);

    let todos = document.getElementById('todos');
    todos.appendChild(taak);
}

const taakAfronden = (event) => {
    event.target.parentElement.parentElement.removeChild(event.target.parentElement);
    let nieuweTaken = [];
    for(let i = 0; i < global.taken.length; i ++) {
        if(global.taken[i].id !== event.target.getAttribute('id')) {
            nieuweTaken.push(global.taken[i]);
        }
    }
    global.taken = nieuweTaken;
    updateLocalStorage();
}

const annuleren = () => {
    document.getElementById('title').classList.remove('invalid');
    document.getElementById('endDate').classList.remove('invalid');
    inputLeegmaken();
    verbergForm();
}

const inputLeegmaken = () => {
    document.getElementById('title').value = '';
    document.getElementById('endDate').value = '';
    document.getElementById('notes').value = '';
}

const wisAlleTaken = () => {
    if(window.confirm('Ben je zeker dat je alle taken wil wissen?')) {
        global.taken = [];
        updateLocalStorage();
        wisAlleTaakElementen();
        wisAlleTaakElementen(); // om laatste taak ook te verwijderen
    }
}

const wisAlleTaakElementen = () => {
    let todos = document.getElementById('todos');
    for(let i = 0; i < todos.children.length; i ++) {
        if(!todos.children[i].classList.contains('new')) {
            todos.removeChild(todos.children[i]);
        }
    }
}

const VerbergOfToonTeLate = () => {
    let todos = document.getElementById('todos');
    for(let i = 1; i < todos.children.length; i ++) {
        if(todos.children[i].classList.contains('expired')) {
            if(todos.children[i].classList.contains('hidden')) {
                todos.children[i].classList.remove('hidden');
            }
            else {
                todos.children[i].classList.add('hidden');
            }
        }
    }
}

const sorteerOpDatum = () => {
    // werkt niet
}

window.addEventListener('load', setup);
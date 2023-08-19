let lijst= [];


const setup = () => {

    bouwToDos();

    document.getElementById("btnNew").addEventListener("click",toonFormulier);

    document.getElementById("btnAnnuleren").addEventListener("click",verbergenFormulier);

    document.getElementById("btnOpslaan").addEventListener("click",voegTaakToe);

    document.getElementById("btnWissen").addEventListener("click",wisAlleTaken);

    document.getElementById("btnTeLaat").addEventListener("click",verbergTeLaat)

    // document.getElementById("btnSorteer").addEventListener("click", sorteerTodo);



}

const toonFormulier = () =>{
    let btn = document.getElementById("btnNew");
    btn.classList.add("hidden");

    let form = document.getElementById("formulier");
    form.classList.remove("hidden");
}

const verbergenFormulier = () =>{
    let btn = document.getElementById("btnNew");
    btn.classList.remove("hidden");

    let form = document.getElementById("formulier");
    form.classList.add("hidden");
}

const bouwToDos = () =>{
    let JSONalleTaken = localStorage.getItem("Luka.TODO");
    let alleTaken = JSON.parse(JSONalleTaken);

    console.log(alleTaken)
    if (localStorage.getItem("Luka.TODO") != null){
        for (let i = 0; i< alleTaken.length ; i++){
            let titel = alleTaken[i].titelopslaan;
            let datum = alleTaken[i].datumopslaan;
            let notitie = alleTaken[i].notitieopslaan;

            bouwToDo(titel,datum,notitie);
        }
    }

    teLaatHidden = false;

}

const bouwToDo = (titel,einddatum,notitie) =>{
    let e = document.createElement("div");
    e.classList.add("ToDo");

    let header = createElementWithText("h1",titel);

    let date = createElementWithText("h2",einddatum);

    let uitleg = createElementWithText("p",notitie);

    let einddate = new Date(einddatum);
    if (einddate < new Date()){
        e.classList.add("overTijd");
    }

    e.appendChild(header);
    e.appendChild(date);
    e.appendChild(uitleg);

    document.getElementById("todos").appendChild(e);
}

const voegTaakToe = () =>{
    let titel = document.getElementById("txtTitel").value;
    let einddatum = document.getElementById("dtmEindDatum").value;
    let notitie = document.getElementById("txtNotities").value;

    bouwToDo(titel,einddatum,notitie);

    saveToDo(titel, einddatum,notitie);

    verbergenFormulier();

}

const createElementWithText = (type,text) =>{
    let e = document.createElement(type);

    let node = document.createTextNode(text);

    e.appendChild(node);

    return e
}

const wisAlleTaken = () =>{
    if (window.confirm("ben je zeker")){
        console.log("delete")
        localStorage.removeItem("Luka.TODO");
        location.reload();
    } else {
        console.log("keep")
    }
}

const toonTeLaat = () =>{
    let e = document.getElementById("todos");

    for (let i = 1 ; i < e.children.length ; i++){
        if (e.children[i].getAttribute("class").includes("overTijd")){
            e.children[i].classList.add("hidden");
        }
    }
    teLaatHidden = true;
}

let teLaatHidden = false;
const verbergTeLaat = () =>{

        let e = document.getElementById("todos");

        if (teLaatHidden){
            for (let i = 1 ; i < e.children.length ; i++){
                if (e.children[i].getAttribute("class").includes("hidden")){
                    e.children[i].classList.remove("hidden");
                }
            }
            teLaatHidden = false;
        } else {
            toonTeLaat();
        }
}



const saveToDo = (titel,datum,notitie) =>{
    let object = {
        titelopslaan: titel,
        datumopslaan: datum,
        notitieopslaan: notitie
    }

    lijst.push(object);

    let JSONlijst = JSON.stringify(lijst);
    localStorage.setItem("Luka.TODO",JSONlijst);

}

const sorteerOpDatum = () =>{

}
window.addEventListener("load", setup);

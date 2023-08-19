const setup = () => {
    let input = document.getElementById("btnAdd");
    input.addEventListener("click",voegToDoToe);


    let btnDel = document.getElementById("btnDelete");
    if (btnDel !== null){
        btnDel.addEventListener("click", deleteToDo);
    }

}

const saveToDo = () =>{

}

const deleteToDo = (event) =>{
    console.log("here");
    let div =  event.target.parentNode;

    let tasks =document.getElementById("tasks");
    tasks.removeChild(div);
    console.log(div);
}

const voegToDoToe = (event) =>{
    let tekst = document.getElementById("txtToDo").value;

    if (tekst === null || tekst === ""){
        return
    }

    let div = document.createElement("div");
    div.setAttribute("class","to_do");

    let button = document.createElement("input");
    button.setAttribute("type","button");
    button.setAttribute("value","X");
    button.setAttribute("class","buttonX");
    button.setAttribute("id","btnDelete")
    div.appendChild(button);

    let text = document.createTextNode(tekst);
    let p = document.createElement("p");
    p.appendChild(text)

    div.appendChild(p);

    let tasks =document.getElementById("tasks");
    tasks.appendChild(div);
}
window.addEventListener("load", setup);
const setup = () => {
    loadPreset();
    let btn = document.getElementById("btnshift");
    btn.addEventListener("click",shift);
}

const shift =() =>{
    let container = document.getElementById("container");


    if (container.classList[0] == "white"){
        toblack();
    } else {
        towhite();
    }



}

const toblack = () => {
    let container = document.getElementById("container");


    let children = container.children;
    for (let i = 0; i < children.length; i++) {
        children[i].classList.remove("white");
        children[i].classList.add("black");
        container.classList.remove("white");
        container.classList.add("black");
    }
    savePreset();
}

const towhite = () =>{
    let container = document.getElementById("container");


    let children = container.children;
    for (let i = 0; i < children.length; i++){
        children[i].classList.remove("black");
        children[i].classList.add("white");
        container.classList.remove("black");
        container.classList.add("white");
    }

    savePreset();
}

const savePreset = () =>{
    let container = document.getElementById("container");

    let classlistJSON = JSON.stringify(container.classList);
    localStorage.setItem("preset",classlistJSON);
}

const loadPreset = () =>{
    let classlistJSON = localStorage.getItem("preset");
    let classlist = JSON.parse(classlistJSON);
    console.log(classlist);

    if (classlist[0] == "white"){
        towhite();
    } else{
        toblack();
    }

}
window.addEventListener("load", setup);
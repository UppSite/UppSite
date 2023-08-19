const setup = () => {
    let btngo = document.getElementById("btngo");
    btngo.addEventListener("click", start);
}

const start = () =>{
    console.log("here");
    location.replace("links/game/index.html");
}
window.addEventListener("load", setup);
const setup = () => {
    let btnSend = document.getElementById("btnSend");
    btnSend.addEventListener("click", check)
}

function check(){
    let btnValue = document.getElementById("btnSend").value;
    if (btnValue === 5){
        console.log(true);
    }
}



window.addEventListener("load", setup);
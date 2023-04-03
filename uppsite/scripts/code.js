const setup = () => {
    let btnSend = document.getElementById('btnSend');
    btnSend.addEventListener("click",passvalue);
}

function passvalue(){
    const firstname = document.getElementById('txtName').value;
    localStorage.setItem("textvalue",firstname);
    return false;
}














window.addEventListener("load", setup);

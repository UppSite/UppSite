const setup = () => {
    document.getElementById("inputArtiest").style.display = "block";
    document.getElementById("inputAlbum").style.display = "none";
    document.getElementById("inputJaartal").style.display = "none";
    document.getElementById("btnSend").style.display = "block";

// Zoek het select-element op
    let selectElement = document.querySelector('select[name="opties"]');

// Voeg een "change" event listener toe
    selectElement.addEventListener('change',checkValue);

    let btnSend = document.getElementById("btnSend");
    btnSend.addEventListener("click",submit);

}

const checkValue = () =>{
    let selectElement = document.querySelector('select[name="opties"]');
    let geselecteerdeOptie = selectElement.value;

    // Doe iets met de geselecteerde optie, bijvoorbeeld:
    if (geselecteerdeOptie == "Naam Artiest"){
        //verschijn juiste input
        document.getElementById("inputArtiest").style.display = "block";
        document.getElementById("inputAlbum").style.display = "none";
        document.getElementById("inputJaartal").style.display = "none";
        document.getElementById("btnSend").style.display = "block";



    }else if (geselecteerdeOptie == "Naam Album"){
        document.getElementById("inputArtiest").style.display = "none";
        document.getElementById("inputAlbum").style.display = "block";
        document.getElementById("inputJaartal").style.display = "none";
        document.getElementById("btnSend").style.display = "block";



    }else if (geselecteerdeOptie == "Jaartal"){
        //input vak op scherm
        document.getElementById("inputArtiest").style.display = "none";
        document.getElementById("inputAlbum").style.display = "none";
        document.getElementById("inputJaartal").style.display = "block";
        document.getElementById("btnSend").style.display = "block";

    }
}

const submit = () =>{
    let selectElement = document.querySelector('select[name="opties"]');
    let geselecteerdeOptie = selectElement.value;
    let value = null ;
    if (geselecteerdeOptie == "Naam Artiest"){
        value = document.getElementById("inputArtiest").value;
        console.log(value);
    }else if (geselecteerdeOptie == "Naam Album"){
        value = document.getElementById("inputAlbum").value;
        console.log(value);
    }else if (geselecteerdeOptie == "Jaartal"){
        value = document.getElementById("inputJaartal").value;
        console.log(value);
    }
}

window.addEventListener("load", setup);
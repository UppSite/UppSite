const setup = () => {
    document.getElementById("inputArtiest").style.display = "none";
    document.getElementById("inputAlbum").style.display = "none";
    document.getElementById("inputJaartal").style.display = "none";
    document.getElementById("btnSend").style.display = "none";

// Zoek het select-element op
    let selectElement = document.querySelector('select[name="opties"]');

// Voeg een "change" event listener toe
    selectElement.addEventListener('change',checkValue);

}

const checkValue = () =>{
    let selectElement = document.querySelector('select[name="opties"]');
    let geselecteerdeOptie = selectElement.value;

    // Doe iets met de geselecteerde optie, bijvoorbeeld:
    if (geselecteerdeOptie == "Naam Artiest"){
        console.log("artiest")
        document.getElementById("inputArtiest").style.display = "block";
        document.getElementById("inputAlbum").style.display = "none";
        document.getElementById("inputJaartal").style.display = "none";
        document.getElementById("btnSend").style.display = "block";

    } if (geselecteerdeOptie == "Naam Album"){
        console.log("album")
        document.getElementById("inputArtiest").style.display = "none";
        document.getElementById("inputAlbum").style.display = "block";
        document.getElementById("inputJaartal").style.display = "none";
        document.getElementById("btnSend").style.display = "block";

    } if (geselecteerdeOptie == "Jaartal"){
        console.log("jaar")
        document.getElementById("inputArtiest").style.display = "none";
        document.getElementById("inputAlbum").style.display = "none";
        document.getElementById("inputJaartal").style.display = "block";
        document.getElementById("btnSend").style.display = "block";
    }
}


window.addEventListener("load", setup);
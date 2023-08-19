const storeSliderValues = () => {
    let sliders = {};
    let slidersJSON;

    //values opslaan
    sliders.red = parseInt(document.getElementById("sldRed").value);
    sliders.green = parseInt(document.getElementById("sldGreen").value);
    sliders.blue = parseInt(document.getElementById("sldBlue").value);

    slidersJSON = JSON.stringify(sliders);
    localStorage.setItem("slidersKey",slidersJSON);
};

const restoreSliderValues = () => {
    let slidersJSON = localStorage.getItem("slidersKey");
    let sliders;


    //check object en zet om
    if (slidersJSON == undefined) {
        sliders = {
            red: 0,
            green: 0,
            blue: 0
        };
    } else {
        sliders = JSON.parse(slidersJSON);
    }
}
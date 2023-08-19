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
    if (slidersJSON == undefined){
        sliders = {
            red: 0,
            green: 0,
            blue: 0
        };
    } else{
        sliders = JSON.parse(slidersJSON);
    }


    //waardes invullen;

    document.getElementById("sldRed").value = sliders.red;
    document.getElementById("sldGreen").value = sliders.green;
    document.getElementById("sldBlue").value = sliders.blue;

};

const storeSwatches = () => {
    // bouw een array met kleurinfo objecten
    let swatches = {};

    let children = document.getElementById("swatchComponents").children;
    for (let i = 0;i < children.length ; i++){
        let rgbValues = [];
        rgbValues.push(children.item(i).getAttribute("data-red"));
        rgbValues.push(children.item(i).getAttribute("data-green"));
        rgbValues.push(children.item(i).getAttribute("data-blue"));
        let rgbString = JSON.stringify(rgbValues)
        swatches[`swatch` + i] = rgbValues;
    }

    localStorage.setItem("swatchesKey", JSON.stringify(swatches));
};

const restoreSwatches = () => {
    let swatches = JSON.parse(localStorage.getItem("swatchesKey"));

    for (let i = 0;i< swatches.length;i++){

    }

    for (let i = 0; i< Object.keys(swatches).length ; i++){
        let myArray = swatches['swatch' + i];
        let red = myArray[0];
        let green = myArray[1];
        let blue = myArray[2];

        console.log(myArray);
        console.log(red);
        console.log(green);
        console.log(blue);

        addSwatchComponent(red,green,blue);
    }


};

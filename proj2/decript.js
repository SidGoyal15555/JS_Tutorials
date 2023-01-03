var red = document.querySelector(".red");
var cyan = document.querySelector(".cyan");
var violet = document.querySelector(".violet");
var orange = document.querySelector(".orange");
var pink = document.querySelector(".pink");

var centre = document.querySelector(".center");

//console.log(window.getComputedStyle(red).backgroundColor);

const getBGColor = (selectedElement) => {
    return window.getComputedStyle(selectedElement).backgroundColor;

}

// var color = getBGColor(cyan);

// cyan.addEventListener('click',() => {
//     centre.style.background = color;
// })

const magiColorChangar = (element,color) => {
    return element.addEventListener('mouseenter',() => {
        centre.style.background = color;
    })
};

magiColorChangar(red,getBGColor(red));
magiColorChangar(cyan,getBGColor(cyan));
magiColorChangar(orange,getBGColor(orange));
magiColorChangar(violet,getBGColor(violet));
magiColorChangar(pink,getBGColor(pink));

let rgbBar = document.getElementById("RGB")
let hexBar = document.getElementById("HEX")
let cmykBar = document.getElementById("CMYK")

function copyRGB () {
    var mytext = document.getElementById("RGB");
    mytext.select();
    mytext.setSelectionRange(0,99999);
    navigator.clipboard.writeText(mytext.value);
    alert(`Copied the text: ${mytext.value}`)
}
function copyHEX () {
    var mytext = document.getElementById("HEX");
    mytext.select();
    mytext.setSelectionRange(0,99999);
    navigator.clipboard.writeText(mytext.value);
    alert(`Copied the text: ${mytext.value}`)
}
function copyCMYK () {
    var mytext = document.getElementById("CMYK");
    mytext.select();
    mytext.setSelectionRange(0,99999);
    navigator.clipboard.writeText(mytext.value);
    alert(`Copied the text: ${mytext.value}`)
}

function colorRed(){
    rgbBar.value = `R: 255, G: 0, B: 0`;
    hexBar.value = `#FF0000`;
    cmykBar.value = `C: 0%, M: 100%, Y: 100%, K: 0%`;
    };
function colorGreen(){
    rgbBar.value = `R: 0, G: 128, B: 0`;
    hexBar.value = `#008000`;
    cmykBar.value = `C: 100%, M: 0%, Y: 100%, K: 50%`;
    };
    function colorBlue(){
    rgbBar.value = `R: 0, G: 0, B: 255`;
    hexBar.value = `#0000FF`;
    cmykBar.value = `C: 100%, M: 100%, Y: 0%, K: 0%`;
    };
function colorYellow(){
    rgbBar.value = `R:255, G:222, B:33`;
    hexBar.value = `#FFDE21`;
    cmykBar.value = `C:0, M:0.13, Y:0.87, K:0`;
    };
function colorMagenta(){
    rgbBar.value = `RL255, G:0, B:255`;
    hexBar.value = `#ff00ff`;
    cmykBar.value = `C: 0%, M: 100%, Y: 0%, K: 0%`;
    };
function colorCyan(){
    rgbBar.value = `R: 0, G: 255, B: 255`;
    hexBar.value = `#00FFFF`;
    cmykBar.value = `C: 100%, M: 0%, Y: 100%, K: 0%`;
    };
        
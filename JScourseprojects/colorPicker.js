// create objects to access and modify boxes that will contain te color codes
let rgbBar = document.getElementById("RGB")
let hexBar = document.getElementById("HEX")
let cmykBar = document.getElementById("CMYK")

// Create functions for every color in the grid to change the value of ther color code boxes
// I use the value property of HTML DOM
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
    rgbBar.value = `R: 255, G:0, B:255`;
    hexBar.value = `#ff00ff`;
    cmykBar.value = `C: 0%, M: 100%, Y: 0%, K: 0%`;
    };
function colorCyan(){
    rgbBar.value = `R: 0, G: 255, B: 255`;
    hexBar.value = `#00FFFF`;
    cmykBar.value = `C: 100%, M: 0%, Y: 100%, K: 0%`;
    };
   
/* 3. COPY THE TEXT IN TO clip board*/
// create 3 functions to copy the text in the text box when the user clicks the button copy
function copyRGB () {
    rgbBar.select();
    rgbBar.setSelectionRange(0,99999);
    navigator.clipboard.writeText(rgbBar.value);
    alert(`Copied the text: ${rgbBar.value}`)
}
function copyHEX () {
    hexBar.select();
    hexBar.setSelectionRange(0,99999);
    navigator.clipboard.writeText(hexBar.value);
    alert(`Copied the text: ${hexBar.value}`)
}
function copyCMYK () {
    cmykBar.select();
    cmykBar.setSelectionRange(0,99999);
    navigator.clipboard.writeText(cmykBar.value);
    alert(`Copied the text: ${cmykBar.value}`)
}


//let rgbBar = document.getElementById("rgbValue")
let bg = ``;
/* HEX to RGB */ 
function hexConverter (){
	let x =  document.getElementById("hexInput").value;
	let r =parseInt(`0x${x.slice(0,2)}`, 16);
	let g =parseInt(`0x${x.slice(2,4)}`, 16);
	let b =parseInt(`0x${x.slice(4,)}`, 16);
	bg =`#${x}`;
	document.getElementById("rgbValue").value = `R: ${r} G: ${g} B: ${b}`
}
/* function  hexChecker (){
	switch (x){
		   case '1':
		   x = 1
		   break;
		   case '2':
		   x = 2
		   break;
		   case '3':
		   x = 3
		   break;
		   case '4':
		   x = 4
		   break;
		   case '5':
		   x = 5
		   break;
		   case '6':
		   x = 6
		   break;
		   case '7':
		   x = 7
		   break;
		   case '8':
		   x = 8
		   break;
		   case '9':
		   x = 9
		   break;
		   case 'A':
		   x = 10
		   break;
		   case 'B':
		   x = 11
		   break;
		   case 'C':
		   x = 12
		   break;
		   case 'D':
		   x = 13
		   break;
		   case 'E':
		   x = 14
		   break;
		   case 'F':
		   x = 15
		   break; 
   };
   return x
}
function hextoRGB(){

	let hexValue = document.getElementById("hexInput").value; // get value of the input
	//document.body.style.backgroundColor = `#${hexValue}`
	let r1 = hexChecker (hexValue[0]); 
	let r2 = hexChecker (hexValue[1]);
	let g1 = hexChecker (hexValue[2]);
	let g2 = hexChecker (hexValue[3]);
	let b1 = hexChecker (hexValue[4]);
	let b2 = hexChecker (hexValue[5]);
	let rgb = `R: ${r1 * 16 + r2} G: ${g1 * 16 + g2} B: ${ b1 * 16 + b2}`;
	bg =`#${hexValue}`
	document.getElementById("rgbValue").value = rgb
	
}; */

function copyRGB(){
	let rgbBar = document.getElementById("rgbValue")
	rgbBar.select();
    rgbBar.setSelectionRange(0,99999);
    navigator.clipboard.writeText(rgbBar.value);
	document.body.style.backgroundColor = bg
    alert(`Copied the text: ${rgbBar.value}`)
}

/* RGB to HEX */
function toHex(x){
	let y = +x
	y = y.toString(16)
	return y
	};
function rgbtoHex () {
	let rgbValue = document.getElementById("rgbInput").value; // get value of the input
	
	/* Search for indices of the letters R, G, and B*/
	//let rIndex = rgbValue.search(/R/)
	let gIndex = rgbValue.search(/G/) 
	let bIndex = rgbValue.search(/B/)

/*Using the index postions of R, G and B to select the number values*/
	let rValue = rgbValue.slice(3,(gIndex-1))
	let gValue = rgbValue.slice((gIndex +3),(bIndex-1))
	let bValue = rgbValue.slice((bIndex +3),);
	
/* Conert the select numbers to hexadecimal using the function created above*/
	let hexR = toHex(rValue)
	let hexG = toHex(gValue)
	let hexB = toHex(bValue)
	let Hex = `${hexR}${hexG}${hexB} `.toUpperCase()
	let Hex1 = `${toHex(rValue)}${toHex(gValue)}${toHex(bValue)}`.toUpperCase()
	bg =`#${Hex}` //
	document.getElementById("hexValue").value = Hex1
	//document.body.style.backgroundColor = `#${Hex}`

	

}

function copyHex(){
let hexBar = document.getElementById("hexValue")
	hexBar.select();
    hexBar.setSelectionRange(0,99999);
    navigator.clipboard.writeText(hexBar.value);
	document.body.style.backgroundColor = bg
    alert(`Copied the text: ${hexBar.value}`)


}

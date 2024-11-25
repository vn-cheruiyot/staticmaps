function colorCreator(name,hex, rgb, cmyk){
	this.name = name;
	this.hex = hex;
	this.rgb = rgb;
	this.cmyk = cmyk;
}
const red = new colorCreator(`red`,`#FF000`, `R: 0, G: 128, B: 0`, `C: 0%, M: 100%, Y: 100%, K: 0%`);
const green = new colorCreator(`green`,`#008000`, `R: 0, G: 128, B: 0`, `C: 100%, M: 0%, Y: 100%, K: 50%`);
const colorArray = ["red", green]
document.getElementById("demo").innerHTML = colorArray[0]

// when a person clicks the buttons duisplay the values
let statement = ``
let end = 0
let origin = location.origin;
function myFunctionDot(){
	statement += "."
	document.getElementById("type-bar").innerHTML = statement
}
function myFunction0(){
	statement += "0"
	document.getElementById("type-bar").innerHTML = statement
}
function myFunction1(){
	statement += "1"
	document.getElementById("type-bar").innerHTML = statement
}
function myFunction2(){
	statement += "2"
	document.getElementById("type-bar").innerHTML = statement
}
function myFunction3(){
	statement += "3"
	document.getElementById("type-bar").innerHTML = statement
}
function myFunction4(){
	statement += "4"
	document.getElementById("type-bar").innerHTML = statement
}
function myFunction5(){
	statement += "5"
	document.getElementById("type-bar").innerHTML = statement
}
function myFunction6(){
	statement += "6"
	document.getElementById("type-bar").innerHTML = statement
}
function myFunction7(){
	statement += "7"
	document.getElementById("type-bar").innerHTML = statement
}
function myFunction8(){
	statement += "8"
	document.getElementById("type-bar").innerHTML = statement
}
function myFunction9(){
	statement += "9"
	document.getElementById("type-bar").innerHTML = statement
}
function myFunctionAdd(){
	statement += "+"
	document.getElementById("type-bar").innerHTML = statement
}
function myFunctionMinus(){
	statement += "-"
	document.getElementById("type-bar").innerHTML = statement
}
function myFunctionMultiply(){
	statement += "*"
	document.getElementById("type-bar").innerHTML = statement
}
function myFunctionDivide(){
	statement += "/"
	document.getElementById("type-bar").innerHTML = statement
}
function myFunctionEquals(){
	let end= eval(statement)
	document.getElementById("type-bar").innerHTML = end
}
function myFunctionOpen(){
	statement += "("
	document.getElementById("type-bar").innerHTML = statement
}
function myFunctionClose(){
	statement += ")"
	document.getElementById("type-bar").innerHTML = statement
}





// Add a Close button to every list element
const listNodes = document.getElementsByTagName("LI")
var i
for (i = 0; i <listNodes.length; i++) {
var x = document.createElement("button");
var y = document.createTextNode("Delete");
x.className = "close" ;
x.appendChild(y);
listNodes[i].appendChild(x)
}
//Hide the list elements when a person clicks on the close button by changing the display style to none
const closeButtons = document.getElementsByClassName("close");
for (i= 0; i< closeButtons.length; i++){
	closeButtons[i].onclick = function(){
	var div = this.parentElement;
	div.style.display = "none";
	}
}

//Add a "checked" sysmbol when clicking on a list item
var list = document.querySelector("ul")//finds all html elements with the type 'ul'
list.addEventListener("click",function(ev){
    if (ev.target.getElementsByTagName = "li"){
        ev.target.classList.toggle('checked');
    }
},false)
//Add element function
function addFunction() {
const newItem = document.getElementById("inputBar").value; // get the value of the input
const x = document.createElement("li"); //create a new list element
const z = document.getElementById("list1");
if ( newItem === " "){
	alert ("You Must Write something");
}else {
const y = document.createTextNode(newItem);
x.appendChild(y);
z.appendChild(x);
};
//Clear the input bar
document.getElementById("inputBar").value = " ";
// Add delete buttton to the newly create list item
var button = document.createElement("button");
var buttonText = document.createTextNode("Delete");
button.className = "close" ;
button.appendChild(buttonText);
x.appendChild(button);
for (i= 0; i < closeButtons.length; i++){
	closeButtons[i].onclick = function(){
	var div = this.parentElement;
	div.style.display = "none";
	};
};
}
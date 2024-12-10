let v = ""
function mycalc(x){
  v+=x;
  document.getElementById("input").value = v;
}
function myeval(){
  v = eval(v)
  document.getElementById("input").value = v;
}
function myDel(){
	v = v.slice(0,-1);
	document.getElementById("input").value = v;
}
function mypercentage(){
	v = eval(v)/100
}
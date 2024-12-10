let v = ""
function mycalc(x){
  v+=x;
  document.getElementById("input").value = v;
}
function myeval(){
  v = eval(v)
  if (isNaN(v)){
    document.getElementById("input").value = "Syntax Error"; 
  } else {
    v = eval(v).toFixed(4);
    document.getElementById("input").value = v; 
  } 
}
function myDel(){
	v = v.slice(0,-1);
	document.getElementById("input").value = v;
}
function mypercentage(){
	v = eval(v)*100
  document.getElementById("input").value = v;
}
function mysci(){
  alert(`Coming Soon`)
}
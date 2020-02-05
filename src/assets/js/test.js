'use strict';

let radioT0 = document.getElementsByName('t0');
for (let i =0; i<radioT0.length; i++){
	radioT0[i].onchange = testRadio;
}
function testRadio() {
	console.log(this.value);
	
}
let buttonSubmit = document.getElementById('btn').onclick = checkRadio;

function checkRadio() {
	let m = radioT0;

	for (let i =0; i<m.length; i++){
	if(m[i].checked){
		alert(m[i].value);
		break;
	}
}
}




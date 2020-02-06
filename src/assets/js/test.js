'use strict';

let inputName = document.getElementsByName('t0');

let answerA = [];
let answerB = [];
// for (let i =0; i<inputName.length; i++){
// 	inputName[i].onchange = testRadio;
// }
let button = document.getElementById('btn');

button.addEventListener('click', haveResul);

function haveResul() {
	for (let i = 0; i < inputName.length; i++) {
		if (inputName[i].checked) {

			if (inputName[i].value) {
				// answerA.push(inputName.value)
				answerA.push(inputName[i].value);
				console.log(answerA);
			} else {
				answerB.push(inputName[i].value);
				// console.log(answerB);
			}
		}
	}
}






// }
// let buttonSubmit = document.getElementById('btn').onclick = checkRadio;

// function checkRadio() {
// 	let m = inputName;

// 	for (let i =0; i<m.length; i++){
// 	if(m[i].checked){
// 		consol.log(m[i].value);
// 		break;
// 	}
// }
// }




// console.log(x);



// let arrow = [];


// let giveAnswer = FormData.getAll;
// console.log(giveAnswer);

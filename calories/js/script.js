let buttonClear = document.querySelector('.form__reset-button');
let buttonCalc = document.querySelector('.form__submit-button');
let result = document.querySelector('.counter__result');
let inputsGender = document.querySelector('.switcher').getElementsByTagName('input');
let inputsParametrs = document.querySelector('.inputs-group').getElementsByTagName('input');
let inputsActivity = document.querySelector('.radios-group').getElementsByTagName('input');
let activityDefault = document.getElementById('activity-minimal');
let genderDefault = document.getElementById('gender-male');
let arr = [];

checkGender();
checkParametrs();
checkActivity();


function checkGender () {
	for (var i=0;i < inputsGender.length; i++){
		inputsGender[i].addEventListener('click', function(evt) {
			if (!genderDefault.checked) {
				buttonClear.disabled = false;
			}	
		});
	}
}

function checkParametrs() {
	for (let i=0; i < inputsParametrs.length; i++) {
		inputsParametrs[i].addEventListener('change', function(evt) {
			if (inputsParametrs[i].value != '') {
				buttonClear.disabled = false;
				arr.push(true);
			}
			if (arr.length == inputsParametrs.length) {
				buttonCalc.disabled = false;
			}
		});
		inputsParametrs[i].addEventListener('keyup', function(evt) {
			this.value = this.value.replace (/\D/, '');
		});
	}
}

function checkActivity () {
	for (var i=0;i < inputsActivity.length; i++){
		inputsActivity[i].addEventListener('click', function(evt) {
			if (!activityDefault.checked) {
				buttonClear.disabled = false;
			}	
		});
	}
}

function calculateCalories () {
	let genderFemale = document.getElementById('gender-female');
	let age = document.getElementById('age');
	let height = document.getElementById('height');
	let weight = document.getElementById('weight');
	let activityMin = document.getElementById('activity-minimal');
	let activityLow = document.getElementById('activity-low');
	let activityMed = document.getElementById('activity-medium');
	let activityHi = document.getElementById('activity-high');
	let activityMax = document.getElementById('activity-maximal');
	let caloriesNorm = document.getElementById("calories-norm");
	let caloriesMinimal = document.getElementById("calories-minimal");
	let caloriesMaximal = document.getElementById("calories-maximal");
	let activityRates = 0;

	if (activityMin.checked) {
		activityRates = 1.2;
	} else if (activityLow.checked) {
		activityRates = 1.375;
	} else if (activityMed.checked) {
		activityRates = 1.55;
	} else if (activityHi.checked) {
		activityRates = 1.725;
	} else if (activityMax.checked) {
		activityRates = 1.9;
	}

	let normaFemale = Math.round(activityRates * ((10 * Number(weight.value)) + (6.25 * Number(height.value)) - (5 * Number(age.value)) - 161));
	let normaMale =  Math.round(activityRates * ((10 * Number(weight.value)) + (6.25 * Number(height.value)) - (5 * Number(age.value)) + 5));

	if (genderFemale.checked) {
		caloriesNorm.innerHTML = normaFemale;
		caloriesMinimal.innerHTML = Math.round(normaFemale - (normaFemale * 0.15));
		caloriesMaximal.innerHTML = Math.round(normaFemale + (normaFemale * 0.15));
	} else if (genderDefault.checked) {
		caloriesNorm.innerHTML = normaMale;
		caloriesMinimal.innerHTML = Math.round(normaMale - (normaMale * 0.15));
		caloriesMaximal.innerHTML = Math.round(normaMale + (normaMale * 0.15));
	}
	
}


buttonCalc.addEventListener('click', function (evt) {
	evt.preventDefault();
	result.classList.remove("counter__result--hidden");
	calculateCalories ();
});

buttonClear.addEventListener('click', function (evt) {
	for (let i=0; i < inputsParametrs.length; i++) {
		inputsParametrs[i].value = '';
	}
	buttonClear.disabled = true;
	result.classList.add("counter__result--hidden");
	buttonCalc.disabled = true;
	genderDefault.checked = true;
	activityDefault.checked = true;
	arr.length = 0;
});

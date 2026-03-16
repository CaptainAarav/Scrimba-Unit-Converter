const input = document.getElementById('input');
const convertBtn = document.getElementById('convert-btn');

const resultsOne = document.getElementById('results-one-value');
const resultsTwo = document.getElementById('results-two-value');
const resultsThree = document.getElementById('results-three-value');

function meterToFeet(value) {
	return value * 3.281;
}
function feetToMeter(value) {
	return value / 3.281;
}
function literToGallon(value) {
	return value * 3.785;
}
function gallonToLiter(value) {
	return value / 3.785;
}
function kilogramToPound(value) {
	return value * 2.204;
}
function poundToKilogram(value) {
	return value / 2.204;
}

convertBtn.addEventListener('click', function() {
	const inputValue = input.value;
	if (inputValue > 0) {
		resultsOne.textContent = `${inputValue} meters = ${meterToFeet(inputValue).toFixed(3)} feet | ${inputValue} feet = ${feetToMeter(inputValue).toFixed(3)} meters`;
		resultsTwo.textContent = `${inputValue} liters = ${literToGallon(inputValue).toFixed(3)} gallons | ${inputValue} gallons = ${gallonToLiter(inputValue).toFixed(3)} liters`;
		resultsThree.textContent = `${inputValue} kilograms = ${kilogramToPound(inputValue).toFixed(3)} pounds | ${inputValue} pounds = ${poundToKilogram(inputValue).toFixed(3)} kilograms`;
	} else {
		resultsOne.textContent = `0 meters = 0.000 feet | 0 feet = 0.000 meters`;
		resultsTwo.textContent = `0 liters = 0.000 gallons | 0 gallons = 0.000 liters`;
		resultsThree.textContent = `0 kilograms = 0.000 pounds | 0 pounds = 0.000 kilograms`;
	}
});
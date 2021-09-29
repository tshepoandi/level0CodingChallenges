function celciusToFarenheits(celcius) {
	let farenheitsStepOne = 9 / 5;
	let totalFarenheits = farenheitsStepOne * parseFloat(celcius) + 32;
	return totalFarenheits + ' farenheits';
}

celciusToFarenheits(100);

function farenheitsToCelcius(farenheits) {
	let celciusCalculation = farenheits - 32;
	let celciusCalculationStepTwo = 5 / 9;
	let totalCelcius = parseFloat(celciusCalculation) * celciusCalculationStepTwo;

	return totalCelcius + ' celcius';
}

farenheitsToCelcius(100);

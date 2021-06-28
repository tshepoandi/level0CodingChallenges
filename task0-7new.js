function celciusToFarenheits(celcius) {

	farenheitsStepOne = 9 / 5
	totalFarenheits = farenheitsStepOne * parseFloat(celcius) + 32
	return totalFarenheits + " farenheits" }

celciusToFarenheits(100);

function farenheitsToCelcius(farenheits) {

	var celciusCalculation = farenheits - 32
	var celciusCalculationStepTwo = 5 / 9 
	var totalCelcius = parseFloat(celciusCalculation) * celciusCalculationStepTwo

	return totalCelcius + " celcius"
}

farenheitsToCelcius(100);

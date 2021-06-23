function celciusToFarenheits(celcius) {

	farenheitsStepOne = 9 / 5
	totalFarenheits = farenheitsStepOne * parseFloat(celcius) + 32
	console.log(totalFarenheits + " Farenheits") 
}

celciusToFarenheits(100);

function farenheitsToCelcius(farenheits) {

	var celciusCalculation = farenheits - 32
	var celciusCalculationStepTwo = 5 / 9 
	var totalCelcius = parseFloat(celciusCalculation) * celciusCalculationStepTwo

	console.log(totalCelcius + " celcius")

}

farenheitsToCelcius(100);
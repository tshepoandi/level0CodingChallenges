function celciusToFarenheits(celcius) {
	let nineDividedByFive = 9 / 5;
	let totalFarenheits = nineDividedByFive * parseFloat(celcius) + 32;
	return totalFarenheits + ' farenheits';
}

celciusToFarenheits(100);

function farenheitsToCelcius(farenheits) {
	let farenheitsMinusThirtyTwo = farenheits - 32;
	let fiveDivideByNine = 5 / 9;
	let totalCelcius = parseFloat(farenheitsMinusThirtyTwo) * fiveDivideByNine;

	return totalCelcius + ' celcius';
}
farenheitsToCelcius(100);

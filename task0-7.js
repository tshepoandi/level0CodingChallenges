function celciusIntoFarenheits(celcius){
  
  farenheit = 9 / 5 
  total = farenheit * parseFloat(celcius) + 32
  console.log(total + " °F ")
}
celciusIntoFarenheits(100);

function farenheitsToCelcius(farenheits) {
  
 
  var celciusCalculation = farenheits - 32 
  var fiveIntoNine = 5 / 9
  
  totalC = parseFloat(celciusCalculation) * fiveIntoNine
  
  console.log(totalC + " °C")
}

farenheitsToCelcius(100);

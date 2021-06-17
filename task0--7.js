function celciusIntoF(){
  
  celcius = 100
  
  farenheitz = 9 / 5 
  total = farenheitz * parseFloat(celcius) + 32
  console.log(total + " °F ")
}
celciusIntoF();

function farenheitzToCelcius() {
  
  farenheit = 100
  var celciusCalculation = farenheit - 32 
  var fiveIntoNine = 5 / 9
  
  totalC = parseFloat(celciusCalculation) * fiveIntoNine
  
  console.log(totalC + " °C")
}

farenheitzToCelcius();

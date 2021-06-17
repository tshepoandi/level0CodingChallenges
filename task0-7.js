function celciusIntoF(){
  
  celcius = prompt('enter temperature in celcius')
  
  farenheitz = 9 / 5 
  total = farenheitz * parseFloat(celcius) + 32
  console.log(total + " °F")
}
celciusIntoF();

function farenheitzToCelcius() {
  
  farenheit = prompt('enter your temperature in farenheitz')
  var celciusCalculation = farenheit - 32 
  var fiveIntoNine = 5 / 9
  
  totalC = parseFloat(celciusCalculation) * fiveIntoNine
  
  console.log(totalC + " °C")
}

farenheitzToCelcius();

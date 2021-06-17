function highestNumber(num1,num2,num3){
  var num1 = 3
  var num2 = 4
  var num3 = 5
  
  if (num1 > num2 && num1 > num3) {
    console.log(num1)
  } else if (num2 > num1 && num2 > num3) {
    console.log(num2)
  } else if (num3 > num1 && num3 > num2) {
    console.log(num3)
  } else {
    console.log('some numbers were equal')
  }
}

highestNumber();

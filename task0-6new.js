function highestNumber(num1,num2,num3)
{
  var equalNumber = 0
  
  if (num1 > num2 && num1 > num3) {
    return num1
  } else if (num2 > num1 && num2 > num3) {
    return num2
  } else if (num3 > num1 && num3 > num2) {
    return num3
  } else if (num2 == num3) 
  {
   var equalNumber = equalNumber + num3
   console.log("some numbers were equal which were " + equalNumber)
  } 
  
  else if (num1 == num2)
  {
    var equalNumber = equalNumber + num1
    
return "some numbers were equal which were " + equalNumber
    
    
   } else if (num1 == num3)
  {
    var equalNumber = equalNumber + num3
    
return "some numbers were equal which were " + equalNumber
  }else
  
  {
    return 'did you type a key instead of numbers?')
  }
}

highestNumber();

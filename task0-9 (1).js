function returnVowels(string)
{
countforA = 0
countforE = 0
countforI = 0
countforO = 0
countforU = 0
var array = [""]

for (i = 0; i < string.length ; i++) 
{
  if (string.charAt(i) == "a" || string.charAt(i) == "A") 
  {
    countforA = countforA + 1
    if (countforA == 1) 
    {
    array.push(string.charAt(i))
    array.push(",")
    }
   
  }
  
  
  if (string.charAt(i) == "e" || string.charAt(i) == "E") 
  {
    countforE= countforE + 1
    if (countforE == 1) 
    {
    array.push(string.charAt(i))
    array.push(",")
    }
    
  }
    
  if (string.charAt(i) == "i" || string.charAt(i) == "I") 
  {
    countforI = countforI+ 1
    if (countforI == 1) 
    {
    array.push(string.charAt(i))
    array.push(",")
    }
    
  }
  
  if (string.charAt(i) == "o" || string.charAt(i) == "O") 
  {
    countforO = countforO + 1
    if (countforO == 1) 
    {
    array.push(string.charAt(i))
    array.push(",")
    }
    
  }
    
  if (string.charAt(i) == "u" || string.charAt(i) == "U") 
  {
    countforU = countforU + 1
    if (countforU == 1) 
    {
    array.push(string.charAt(i))
    array.push(",")
    }
  }
}

array.pop(",")  
console.log(array.join(" "))

}

returnVowels('Umuzi testing vowels');


function returnVowels()
{  

var string = "umuzi please take me in"


var array = [""]

for (i = 0; i < string.length ; i++) 
{
  if (string.charAt(i) == "a")
  {
    array.push(string.charAt(i))
  }
  
  if (string.charAt(i) == "e")
  {
    array.push(string.charAt(i))
  }
  
    if (string.charAt(i) == "i")
  {
    array.push(string.charAt(i))
  }
  
  if (string.charAt(i) == "o")
  {
    array.push(string.charAt(i))
  }
  
  if (string.charAt(i) == "u")
  {
    array.push(string.charAt(i))
  }
  
}

  
console.log(array.join(" "))

}

returnVowels();

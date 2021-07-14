function commonChar(string1,string2)
{
var array = []

for (i = 0; i < string1.length; i++)


{
  if (string1.charAt(i) == string2.charAt(0))
  array.push(string1.charAt(i)+ ", ")
  {
  }


  if (string1.charAt(i) == string2.charAt(1))
  array.push(string1.charAt(i)+ ", ")
  {
  }


  if (string1.charAt(i) == string2.charAt(2))
  array.push(string1.charAt(i)+ ", ")
  {
  }


  if (string1.charAt(i) == string2.charAt(3))
  array.push(string1.charAt(i)+ ", ")
  {
  }

  if (string1.charAt(i) == string2.charAt(4))
  array.push(string1.charAt(i)+ ", ")
  {
  }
  if (string1.charAt(i) == string2.charAt(5))
  array.push(string1.charAt(i)+ ", ")
  {
  }


  if (string1.charAt(i) == string2.charAt(6))
  array.push(string1.charAt(i)+ ", ")
  {
  }


  if (string1.charAt(i) == string2.charAt(7))
  array.push(string1.charAt(i)+ ", ")
  {
  }

if (string1.charAt(i) == string2.charAt(8))
  {
    array.push(string1.charAt(i)+ ", ")
  }
  if (string1.charAt(i) == string2.charAt(9))
  {
    array.push(string1.charAt(i) + ", ")
  }
  if (string1.charAt(i) == string2.charAt(10))
  {
    array.push(string1.charAt(i) + ", ")
  }

  }
var word = array.join(' ')

console.log("Common characters; " + word);
}
commonChar('house','computers')

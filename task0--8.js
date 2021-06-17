function minutesToHours()
{
  var yourMinutes = 100
  var minutesExact = yourMinutes % 60
  var hours = yourMinutes / 60
  var hoursExact = Math.floor(hours)
  
  
  if (hoursExact > 1) 
  {
  console.log(hoursExact + "hours " +minutesExact + "minutes")
  } else if (hours = 1) 
  {
    console.log(hoursExact + "hour " +minutesExact + "minutes")
  } 
  

}
minutesToHours();

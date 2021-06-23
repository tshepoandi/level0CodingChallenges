function highestNumber() {

	var num1 = prompt("enter your first number")
	var num2 = prompt("enter your second number")
	var num3 = prompt("enter your third number")

	if (num1 > num2 && num1 > num3) 
	{

		return num1

	}

	else if (num2 > num1 && num2 > num3) 
	{

		return num2

	}

	else if (num3 > num1 && num3 > num2) 
	{

		return num3

	}

	else 
	{

		return 'you had two equally great numbers' 

	}

}

highestNumber();



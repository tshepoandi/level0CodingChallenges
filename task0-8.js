/** @format */

function minutesToHours(yourMinutes) {
	var minutesExact = yourMinutes % 60;
	var hours = yourMinutes / 60;
	var hoursExact = Math.floor(hours);

	if (minutesExact > 1 || minutesExact == 0) {
		var minutesPlural = ' minutes';
	} else {
		var minutesPlural = ' minute';
	}
	if (hoursExact > 1 || hoursExact == 0) {
		console.log(hoursExact + 'hours, ' + minutesExact + minutesPlural);
	} else if ((hours = 1)) {
		console.log(hoursExact + 'hour, ' + minutesExact + minutesPlural);
	}
}
minutesToHours(61);

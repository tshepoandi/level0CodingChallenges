function minutesToHours(yourMinutes) {
	let minutesExact = yourMinutes % 60;
	let hours = yourMinutes / 60;
	let hoursExact = Math.floor(hours);
	let minutesPlural = '';
	if (minutesExact > 1 || minutesExact == 0) {
		minutesPlural = 'minutes';
	} else {
		minutesPlural = 'minute';
	}
	if (hoursExact > 1 && hoursExact != 0) {
		console.log(`${hoursExact} hours, ${minutesExact} ${minutesPlural}`);
	} else if (hoursExact == 1 && hoursExact != 0) {
		console.log(`${hoursExact} hour, ${minutesExact} ${minutesPlural}`);
	} else if (hoursExact == 0) {
		console.log(`${minutesExact} ${minutesPlural}`);
	}
}
minutesToHours(22);
minutesToHours(71);
minutesToHours(133);

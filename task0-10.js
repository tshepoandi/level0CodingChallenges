function duplicates(stringOne, stringTwo) {
	let emptyArray = [];
	let lowerCaseStringOne = stringOne.toLowerCase();
	let lowerCaseStringTwo = stringTwo.toLowerCase();
	lowerCaseStringOne.split('').forEach((i) => {
		if (lowerCaseStringTwo.split('').includes(i)) {
			if (emptyArray.includes(i) === false) {
				emptyArray.push(i);
			}
		}
	});
	console.log(`Common letters: ${emptyArray.join(',')}`);
}

duplicates('house', 'computers');

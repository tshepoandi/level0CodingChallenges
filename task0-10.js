function duplicates(stringOne, stringTwo) {
	let emptyArray = [];
	stringOne.split('').forEach((i) => {
		if (stringTwo.split('').includes(i)) {
			if (emptyArray.includes(i) == false) {
				emptyArray.push(i);
			}
		}
	});
	console.log(`Common letters: ${emptyArray.join(',')}`);
}

duplicates('house', 'computers');

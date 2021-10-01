function highestNumber() {
	let standByNumber = 0;
	for (let i = 0; i < arguments.length; i++) {
		if (arguments[i] > standByNumber) {
			standByNumber = arguments[i];
		}
	}
	return standByNumber;
}

highestNumber(2, 1, 6, 4);


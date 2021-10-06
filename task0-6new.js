function highestNumber() {
	let standByNumber = -Infinity;
	for (let i = 0; i < arguments.length; i++) {
		if (arguments[i] > standByNumber) {
			standByNumber = arguments[i];
		}
	}
	console.log(standByNumber);
}
highestNumber(-2, -1, -3, -4);

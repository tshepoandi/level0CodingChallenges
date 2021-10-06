function getVowels(string) {
	let arrayOfVowels = ['a', 'e', 'i', 'o', 'u'];
	let arrayOfOutput = [];
	for (let i = 0; i < string.length; i++) {
		if (arrayOfVowels.includes(string.charAt(i))) {
			if (arrayOfOutput.includes(string.charAt(i)) == false) {
				arrayOfOutput.push(string.charAt(i));
			}
		}
	}
	console.log(`Vowels: ${arrayOfOutput.join(', ')}`);
}
getVowels('Umuzi i i i u u ');


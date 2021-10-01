function getVowels(string) {
	arrayOfVowels = ['a', 'e', 'i', 'o', 'u'];
	arrayOfOutput = [];
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


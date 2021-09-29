
function returnVowels(string) {
	let countforA = 0;
	let countforE = 0;
	let countforI = 0;
	let countforO = 0;
	let countforU = 0;
	let array = [''];

	for (i = 0; i < string.length; i++) {
		if (string.charAt(i) == 'a' || string.charAt(i) == 'A') {
			countforA = countforA + 1;
			if (countforA == 1) {
				array.push(string.charAt(i));
				array.push(',' + ' ');
			}
		}

		if (string.charAt(i) == 'e' || string.charAt(i) == 'E') {
			countforE = countforE + 1;
			if (countforE == 1) {
				array.push(string.charAt(i));
				array.push(',' + ' ');
			}
		}

		if (string.charAt(i) == 'i' || string.charAt(i) == 'I') {
			countforI = countforI + 1;
			if (countforI == 1) {
				array.push(string.charAt(i));
				array.push(',' + ' ');
			}
		}

		if (string.charAt(i) == 'o' || string.charAt(i) == 'O') {
			countforO = countforO + 1;
			if (countforO == 1) {
				array.push(string.charAt(i));
				array.push(',' + ' ');
			}
		}

		if (string.charAt(i) == 'u' || string.charAt(i) == 'U') {
			countforU = countforU + 1;
			if (countforU == 1) {
				array.push(string.charAt(i));
				array.push(',' + ' ');
			}
		}
	}

	array.pop(',');
	console.log('Vowels: ' + array.join('').toLowerCase());
}

returnVowels('Umuzi iii ');



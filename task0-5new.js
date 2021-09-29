function triangleArea(sideA, sideB, sideC) {
	let perimeter = parseInt(sideA) + parseInt(sideB) + parseInt(sideC);

	let semiperimeter = perimeter / 2;

	let semi1 = parseInt(sideA) - semiperimeter;
	let semi2 = parseInt(sideB) - semiperimeter;
	let semi3 = parseInt(sideC) - semiperimeter;

	let multiplySemiSides = semi1 * semi2 * semi3;

	let area = multiplySemiSides * semiperimeter;
	let absolute = Math.abs(area);
	let squaredAbsolute = Math.sqrt(parseInt(absolute));

	return squaredAbsolute;
}
console.log(triangleArea(2, 2, 2));


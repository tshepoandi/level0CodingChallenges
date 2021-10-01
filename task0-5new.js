function triangleArea(sideA, sideB, sideC) {
	const perimeter = parseInt(sideA) + parseInt(sideB) + parseInt(sideC);

	const semiPerimeter = perimeter / 2;

	let semi1 = parseInt(sideA) - semiPerimeter;
	let semi2 = parseInt(sideB) - semiPerimeter;
	let semi3 = parseInt(sideC) - semiPerimeter;

	let semiPerimetersMultiplied = semi1 * semi2 * semi3;

	let area = semiPerimetersMultiplied * semiPerimeter;
	let absolute = Math.abs(area);
	let squaredAbsolute = Math.sqrt(parseInt(absolute));

	return squaredAbsolute;
}
triangleArea(2, 2, 2);


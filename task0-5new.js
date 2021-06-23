function triangleArea() {

	var sideA = 3
	var sideB = 4
	var sideC = 5

var perimeter = parseInt(SideA) + parseInt(sideB) + parseInt(sideC)

var semiperimeter = perimeter / 2

var semi1 = parseInt(sideA) - semiperimeter
var semi2 = parseInt(sideB) - semiperimeter
var semi3 = parseInt(sideC) - semiperimeter

var multiplySemiSides = semi1 * semi2 * semi3

var area = multiplySemiSides * semiperimeter
var absolute = Math.sqrt(area)
var squaredAbsolute = Math.sqrt(absolute)

console.log(squaredAbsolute)


}


triangleArea();
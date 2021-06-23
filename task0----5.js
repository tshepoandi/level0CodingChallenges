function triangleArea(sideA,sideB,sideC) {

var sideA = 4
var sideB = 5
var sideC = 6

var perimeter = parseInt(sideA) + parseInt(sideB) + parseInt(sideC)

var semiperimeter = perimeter / 2 


var semi1 = parseInt(sideA) - semiperimeter
var semi2 = parseInt(sideB) - semiperimeter
var semi3 = parseInt(sideC) - semiperimeter

var multiplySemiSides = semi1 * semi2 * semi3

var area = multiplySemiSides * semiperimeter
var absolute = Math.abs(area);
var squaredAbsolute = Math.sqrt(absolute)

console.log(squaredAbsolute)
}

triangleArea();

function triangleArea() {

var sideA = prompt("enter digit for side A")
var sideB = prompt("enter digit for side B")
var sideC = prompt("enter digit for side C")

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

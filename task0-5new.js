function triangleArea(sideA,sideB,sideC) {


var perimeter = parseInt(sideA) + parseInt(sideB) + parseInt(sideC)

var semiperimeter = perimeter / 2


var semi1 = parseInt(sideA) - semiperimeter
var semi2 = parseInt(sideB) - semiperimeter
var semi3 = parseInt(sideC) - semiperimeter

var multiplySemiSides = semi1 * semi2 * semi3

var area = multiplySemiSides * semiperimeter
var absolute = Math.abs(area);
var squaredAbsolute = Math.sqrt(parseInt(absolute))

return squaredAbsolute
  
}
console.log(triangleArea(2,2,2));


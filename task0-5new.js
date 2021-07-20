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
  console.log(squaredAbsolute) //I'm really confused ,I'm sorry if this isn't how the value should be returned
}
triangleArea(2,2,2);


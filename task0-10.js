function duplicates(arr1,arr2){
    var redundant = 0
    var newArr = []

    if (arr1< arr2){
        var arrInuse = arr1
    }
    else if (arr1 > arr2){
        var arrInuse = arr2
    }
    for (var i=0;i<arrInuse.length;i++){
        
        if (arr2.includes(arr1[i])){
            if(newArr.includes(arr1[i])){
                redundant++
            }else{ 
            newArr.push(arr1[i])
            }
        }
    }
    console.log("Common Characters: " +  newArr.join(","))
}duplicates("housssse","computersss")

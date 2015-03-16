function sumNum (numsArray) {
    var total = 0;
    for (var i = 2; i < (numsArray.length); i++ ) {
        total += Number(numsArray[i]);
    }
    return total;
}

var result = sumNum(process.argv);
console.log(result);
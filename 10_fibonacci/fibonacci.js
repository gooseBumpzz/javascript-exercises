const fibonacci = function(num) {
    //check for negative number or 0
    if (num <0) return "OOPS";
    if (num === 0) return 0;
    // create and popuilate a Fibonacci array 
    const fibArray = [1,1];
    for (let i = 2; i <= num; i++) {
        fibArray[i] = fibArray[i-2]+fibArray[i-1];  
    }
    // return the Nth number from the array
    return fibArray[fibArray.length -2];
};
//console.log(fibonacci(10));

// Do not edit below this line
module.exports = fibonacci;

const removeFromArray = function(enterArray, itemRemove) {
    for (let i = 1; i < arguments.length ; i++){
        if (!enterArray.includes(arguments[i])){ //continue to run if no arguments found in the Array
            continue;
        }
        let itemIndex = enterArray.indexOf(arguments[i]);
        enterArray.splice(itemIndex, 1);  
    }
    return enterArray;
}    
removeFromArray([1, 2, 3, 4], 3)



// Do not edit below this line
module.exports = removeFromArray;

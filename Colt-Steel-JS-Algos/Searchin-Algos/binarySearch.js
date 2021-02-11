// Much faster than linear
// Rather than elminating one element at a time, you can eliminate half the remaining elements at a time
//      MUST BE SORTED, alpha numerical etc.

// Have array sorted alphabetically
//      US states
//      Some user enters "Oregon"
//          1. Pick a halfway point
//          2. States[29] 
//          3. Is orgeon greater than or less than that value
//          4. We can check the next half depending on the result of that 
//          5. states[44]
//          6. Check greater than or equal to again
//          7. Continue until we get our answer

// Divide and conquer alogorithm
//  Pivot point in the middle, check left and check right


const binary = (sortedArray, value) => {
    let left = 0;
    let right = sortedArray.length - 1;
    let middle = Math.floor((left + right) / 2)
    
    
    while(sortedArray[middle] !== value && left <= right) {
        console.log(middle, left, right)    
        if(value < sortedArray[middle]) {
            right = middle - 1
        }
        else {
            left = middle + 1
        }
        middle = Math.floor((left + right) / 2)
    }

    return sortedArray[middle] === value ? middle : -1
}
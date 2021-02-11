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

    // define the left right and middle pointers for the algorithm

    let left = 0;
    let right = sortedArray.length - 1;

    // use floor or ceiling to account for odd length arrays
    let middle = Math.floor((left + right) / 2)
    
    // while middle is not equal to what we need, and the left value is equal to or less than the right
    while(sortedArray[middle] !== value && left <= right) {
        if(value < sortedArray[middle]) {

            // we do minus 1 because we have already concluded that from the range of middle to right, the value cannot exists 
            right = middle - 1
        }
        else {

            // we do plus 1 because the range of left to middle, the value cannot exist
            left = middle + 1
        }

        // reset the middle value to be the average of the two once again
        middle = Math.floor((left + right) / 2)
    }

    // return the index value if sortedArray[middle] is equal to the value, otherwise return -1 
    return sortedArray[middle] === value ? middle : -1
}

// Big O notes

// As the length of a SORTED array grows, the worst is O(log n)
// Best is O(1)

// 16 elements = 4 steps to elimate all possible solutions if the element does not exist (so the very worst case)
// 32 elements = 5 steps

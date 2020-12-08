//  Space complexity
//      - We can also use big O to analyze how much additional memory do we need to allocate in order to run the code in the algo
//      - What about the inputs?
//          - Sometimes when you hear auxillary space complexity to refer to space required by the alogirthm, not including the
//            space taken up by the inputs.
//      
//      - Unless otherwise noted we are talking about auxilary space complexity

//  Rules of thumb
//      - Most primitives(numbers, bools, undefined, null) are constant space
//      - Strings require O(n) space (where n is the string length)
//      - Reference types are generally O(n), where n is the length of the arry or the number of keys in an object


function sum(arr) {
    let total = 0; // one number
    for (let i = 0; i <arr.length; i++) { // one number
        total += arr[i]
    }
    return total;
}

// Therefore a constant space complexity of O(1)

function double(arr) {
    let newArr = []; // O(1)
    for (let i = 0; i < arr.length; i++) { // O(1)
        newArr.push(2 * arr[i]); // O(n)
    }
    return newArr;
}

// Therefore O(n) space complexity


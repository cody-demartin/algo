// Question 1: Determine the time complexity for the following function:

function logUpTo(n) {
    for (let i = 1; i <= n; i++) {
        console.log(i);
    }
}

// A: O(n)
// R: correct

// Question 2: Determine the time complexity for the following function:

function logAtMost(n) {
    for (let i = 1; i <= Math.min(n, 10); i++) {
        console.log(i);
    }
}

// A: O(10) so O(1)
// R: correct

// Question 3: Determine the time complexity for the following function:

function logAtLeast10(n) {
    for (let i = 1; i <= Math.max(n, 10); i++) {
        console.log(i);
    }
}

// A: O(n) where ten is minimum so O(n)
// R: correct

// Question 4: Determine the time complexity for the following function:

function onlyElementsAtEvenIndex(array) {
    let newArray = Array(Math.cell(array.length/2));
    for (let i = 0; i < array.length; i++) {
        if (i % 2 === 0) {
            newArray[i / 2] = array[i];
        }
    }
    return newArray
}

// Breakdown function:
// Input: array of some length
// Output: array with only the even indexes of input array
// Initialize: newArray is an array of (input array.length/2) elements 
// Maintanence: for each loop (O(n)), does simple math (O(1)), and assigns a value (also O(1))
// Termination: loop will finally end once all elements of the input array have been checked so array.length times, finally return newArray

// A: O(n)
// R: correct

// Question 5 was just a nested for loop so n^2. 
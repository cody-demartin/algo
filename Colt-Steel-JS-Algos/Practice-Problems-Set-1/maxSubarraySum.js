// Given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum
// sum of a subarray with the length of the number passed to a function 

// A subarray must consist of consecutive elements from the original array

// input:
// some array, and a length of the subarray (integer)

// output:
// sum of the elements of the subarray

// Kadane's algo
// First, set your orginal pointer to the first possible subarray
// Next, calculate the difference between the first element in the subarray, and the next possible element that
// exists outside the subarray, then add it to the current total. the difference between those two points would 
// be how much greater or less than the current total would be if the new number was in the position of the first
// element of the array

// for instance, if n = 2, calculate array[0] - array[2], add that to the current total. if the current total is 
// greater than the global total, it becomes the new global total. so lets say we have an array of [1, -1, 2, 1]
// and n was = 2. we would first total 1 + -1. Then we would add the difference of 2-1 to that total. On the next
// iteration we would check the difference between 1 - -1 (or 1 + 1), then add that the total. The answer we are 
// left with is 3, which is the maximum sum of an array with n = 2 for this particular array. 

const maxSubArraySum = (array, size) => {

    // initialize a variable with an integer type to act as a counter for the first initial sum
    let total = 0;

    // calculate the first original total
    for( i = 0; i < size; i++) {
        total += array[i]
    }

    // set a temp value to use to compare our current total to our global total
    let currentTotal = total

    // for every element after the last element in the original total subarray, compare the maxs between what the 
    // sum of the subarray would be if the current index was added to the total instead
    for (i = size; i < array.length; i++) {
        currentTotal += array[i] - array[i - size]
        total = Math.max(total, currentTotal)
    }

    console.log(total)
}

maxSubArraySum([1, -1, 2, 1, 5], 3)
// 8
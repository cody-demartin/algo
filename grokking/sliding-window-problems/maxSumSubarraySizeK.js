// Problem:
// Given an array of positive numbers and a positive number k, find the max sum of any contig subarray

const max = (array, k) => {

    // define three variables, one for start of window, one for greatest sum and one for the current sum

    let greatest = 0, 
        windowSum = 0,
        windowStart = 0;


    // i becomes the end of the sliding window of length k
    for (let i = 0; i < array.length; i++) {

        // we add an element to the current sum until..
        windowSum += array[i]


        // if the end of the window is equal to the value of k or greater..
        if (i >= k - 1) {

            // we take the new max from the original max or the current max
            greatest = Math.max(greatest, windowSum);

            // we subtract the first element value from the current max
            windowSum -= array[windowStart];

            // we then add one to the window start
            // since the length of our window is now less than k, we will add the next element in the
            // array that was outside of the window.
            windowStart += 1;
        }
    }

    // return the greatest value 
    return greatest;
}
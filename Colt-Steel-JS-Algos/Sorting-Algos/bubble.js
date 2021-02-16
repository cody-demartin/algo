// Intro to sorting algorithms
//  Heavy and important topic

// Sorting is the process of rearranging the items in a collection
// Focus on arrays for right now

// Why do we need to learn this
//  Sorting is a common task so its good to know how it works
//  There are many ways of sorting things and each technique has advantages
//  and disadvantages 
//  Common interview question

// Objectives:
//  Implement bubble selection and insertion sort, understand why important
//  to learn the simple sorting algos



// Built in Array.sort()
//   Doesn't always work how you think it should
//   The built in function accepts an optional comparator function
//      Looks at pairs of elements determines their sort order based on
//      return value

// Bubble sort, not that efficent not that well used
// Not learning it to implement everytime, learning it for a base
// Sorting algo where the largest values bubble up to the top

// As we look through each item, compare it to the item next to it
//  If it is swap the values
//  Keep doing this
// 
// Before we sort, we must swap


// optimized 
const bubble = (array) => {
    const swap = (arr, index1, index2) => {
        [ arr[index1], arr[index2] ] = [ arr[index2], arr[index1] ]
    }

    for (let i = array.length; i > 0; i--) {
        noSwaps = true;
        for (let j = 0; j < i - 1; j++) {
            if (array[j] > array[j + 1]) {
                swap(array, j, j + 1)
                noSwaps = false;
            }
        }
        if(noSwaps) break;
    }

    console.table(array)
    return array 
}

// O(N^2) nested loop roughly making n comparisons n times
// With optimized no swaps with a nearly sorted collection, more like O(2N)
// Average case is O(n^2)
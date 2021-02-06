// Write a function that given a sorted array and a target average, determine if there is a pair of value in the
// array where the average of the pair equal the target average. There may be more than one pair that matches the 
// average target

// input
// param 1 some sort of an array, can be empty must check for empty arrays
// param 2 some target average, can be a float it looks like
// constraints: Time o(n), space o(1)
// constant space means no intermediary arrays, must check array values in place
// array is sorted, which means we can compare the average from two values, if its greater, decrease right bound
// if it is smaller, increase the left bound 
// output:
// some boolean value (true or false) so we must use return true/false when checking

const averagePair = (array, target) => {
    let first = 0
    let last = array.length - 1

    const average = (left, right) => {
        return (left + right) / 2 
    }

    // checks for an empty array
    if (target.length === 0) return false

    // while the two values are not equal

    while (first < last) {
        if (average(array[first], array[last]) === target) {
            return true
        }
        else if (average(array[first], array[last]) < target) {
            first++
        }
        else last--
    }

    return false
}

averagePair([1,2,3,4], 2)
// How do we search?
//  Given an array, the simplest way to search is check every element in array

// JavaScript has it built in
// includes
// indexOf
// find etc.

// Linear search
//  Searching for 12 in [5, 8, 1, 100, 12, 3, 12]
//      Touch on each one, see if its equivalent

const linear = (array, value) => {
    for(let i = 0; i < array.length; i++) {
        if(array[i] === value) return i
    }
    return -1
}


// best case, if its the first item, it is O(1)
// therefore amortized is O(N)
// clearly worst case O(N), as the array gets longer there is more to search through
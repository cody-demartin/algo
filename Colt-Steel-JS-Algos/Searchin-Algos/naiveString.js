// Number of times a smaller string appears in a longer string

// A straightforward approach would be checking each "window" of characters individually

const stringSearch = (long, short) => {
    let count = 0;
    for (let i = 0; i < long.length; i++) {
        for (let j = 0; j < short.length; j++) {
            if(short[j] !== long[i + j]) break;
            if(j === short.length - 1) count++
        }
    }
    return count
}

// O(n^2) as a nested for loop must loop through the bigger string a minimum of one time and then at most the length of the second string for each letter in the longest string, one time


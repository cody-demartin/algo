// Write a function which takes two strings and checks whether the characters in the first string form a 
// subsequence of the characters in the second string. In other words, the function should check whether
// the characters in the first string appear somewhere in the second string, without their order changing


// input:
// two strings so feels like a double pointer problem
// first pointer should be checking character by character of the first string
// second pointer does the same for the second string

// output:
// a boolean true or false value

// constraints 
// O(n + m)
// time is n + m because we must check each string's length exactly once 

const isSubsequence = (string1, string2) => {
    
    // set pointers for the first character of each string
    let one = 0
    let two = 0

    // if the first string isn't inputted, return true by default
    if (!string1) return true;

    // while the second pointer is less than the length of the second string
    while( two < string2.length ) {
        // if the current character of the second string === the current character of the first string
        // increase the pointer for the first string
        if (string2[two] === string1[one]) one++;

        // if the first pointer is as great as the length of the first string, return true
        if (one === string1.length) return true;

        // increase the second pointer to change characters of the second string
        two++
    }

    // if it makes it through the entire second string and never returns true, return false
    return false
}
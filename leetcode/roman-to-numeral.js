const romanToInt = (s) => {

    // define the values as key value pair so its easy to access the value assoicated
    let symbols = {
        "I" : 1,
        "V" : 5,
        "X" : 10,
        "L" : 50,
        "C" : 100,
        "D" : 500,
        "M" : 1000,
    }

    return s

        // split the string into array
        .split('')

        // reduce the value starting at 0, if current index less than index next to it, subtract the value of the current index
        // otherwise add the value to the accumulator 
        .reduce((accum, current, index, s) => symbols[s[index]] < symbols[s[index + 1]] ? accum -= symbols[s[i]] : acc += symbols[s[i]], 0)


}

// something I have noticed about "next to" problems in arrays, usually using splice or setting values to remove 
// those values etc like the north south one. 


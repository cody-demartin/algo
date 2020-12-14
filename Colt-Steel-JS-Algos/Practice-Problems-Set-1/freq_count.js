function sameFrequency(one, two){
    let strOne = one.toString();
    let strTwo = two.toString();

    let objOne = {};
    let objTwo = {};

    for(let digit of strOne){
        objOne[digit] = (objOne[digit] || 0) + 1;
    }
    for(let digit of strTwo){
        objTwo[digit] = (objTwo[digit] || 0) + 1;
    }

    for(let key in objOne){
        if(objOne[key] !== objTwo[key]) return false;
    }

    return true
}

// Prompt: Write a function called sameFrequency. Given two positive integers, find out
// if the two numbers have the same frequency of digits. Your solution MUST have the 
// following complexities: O(N). 
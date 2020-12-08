// example: suppose we want to write a function that calculates the sum of all numbers
//          from 1 up to (and including) some number n.


const addUpTo = (n) => {
    let total = 0;

    for (let i = 1; i <= n; i++) {
        total += i;
    }

    return total
}

const addMath = (n) => {
    return n * (n + 1) / 2;
}

// What does better mean? 
// Faster? more readable? Sometimes efficient code comes at the cost of readability


let t1 = performance.now();
addUpTo(10000);
let t2 = performance.now();
console.log(t2-t1)

// The Problem with Time
//  - Different machines will record different times
//  - The SAME machine can even record different times
//  - For fast algos, speed measurements might not be percise enough

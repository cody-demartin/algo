// Big O is a wat to formailze fuzzy counting
// Allows us to talk formally about how the runtime of an algo grows
// Don't care about details only broad trends

// Definition: we say that an algo is O(f(n)) if the number of simple 
//             operations the computer has to do is eventually less than
//             a constant times f(n), as n increases


// f(n) could be linear (f(n) = n)
// f(n) could be quadratic (f(n) = n^2)
// f(n) could be constant (f(n) = 1)
// f(n) could be something different completely

// Big O is worst case scenario it is the upper bound constant
// All we care about is the order of magnitude 

function countUpAndDown(n) {
    console.log("Going up!");
    for (let i = 0; i <= n; i ++) {
        console.log(i);
    }

    console.log("At the top! Going down!");
    for (let j = n; j >=0; j--) {
        console.log(j);
    }
    console.log("Houston we landed.")
}

// Figure out big O for above
// So we have one loop of O(n)
// Then another loop of O(n)
// My guess is quadratic of O(n) * O(n) so O(n^2)
// Actual answer: O(n) because its two operations going at O(n) so it would
//                so it would actually be 2O(n) and you ignore the 2 constant

function printAllPairs(n) {
    for (let i = 0; i < n; i ++) {
        for (let j = 0; j < n; j ++) {
            console.log(i, j)
        }
    }
}

// I know this one is O(n^2) because it contains an O(n) operation being done
// within an O(n) operations


printAllPairs(10);
countUpAndDown(10);
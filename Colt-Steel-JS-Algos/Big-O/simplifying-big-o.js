// When determining the time complexity of an algorithm, there are some helpful rule of thumbs for big O expression
//      - Constants don't matter
//          O(2n)          === O(n)
//          O(500)         === O(1)
//          O(13n^2)       === O(n^2)
//
//      - Smaller terms don't matter
//          O(n + 10)      === O(n)
//          O(1000n + 50)  === O(n)
//          O(n^2 +5n + 8) === O(n^2)
// 
//
// Big O shorthand
//      - Analyzing complexity with big O can get complicated
//      - Several rules of thumb that can help
//      - These rules won't ALWAYS work, but are a helpful starting point
//          - Arthmetic operations are constant (*, +, - etc)
//              - O(1)
//          - Variable assignment is also constant ( x = 100)
//          - Accesing elements in array (by index) or object(by key) is constant
//              - x = merk[i] is O(1)
//          - In a loop, the time complexity is the length of the loop times the complexity of whatever happens
//            inside of a loop.
//              - A single for loop of n terms is O(n), if another was nested it would be O(n^2)



function logAtLeast5(n) {
    for (let i = 1; i <= Math.max(5, n); i++) {
        console.log(i)
    }
}

// Time complexity of O(n) imo before answer
// Answer: O(n)

function logAtMost5(n) {
    for (let i = 1; i <= Math.min(5, n); i++) {
        console.log(i)
    }
}

// Time complexity seems like O(5)? so O(1)
// Answer: O(1)

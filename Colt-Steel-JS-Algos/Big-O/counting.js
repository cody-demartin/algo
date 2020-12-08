// If not time, then what?
//  Rather than counting seconds which are so variable...
//  Count number of simple operations the computer has to perfrom
//      for example:


function addUpTo (n) {
    return n * (n + 1) / 2;
}

// In the above we have one multiplaction happening 1
// We have an addition 1
// Then we have a division 1
// We have three simple operations regardless of the size of n


const addUpToBad = (n) => {
    let total = 0;

    for (let i = 1; i <= n; i++) {
        total += i;
    }

    return total
}

// In this example we have an addition in a loop so its as many operations as
// n.
// So there is n additions and n assignments 
// One assignment for i and total
// n comparisons 
// Can be as high as 5n + 2
// But regardless of the exact number, we care about the general trend. Roughly
// in this case, in porportion to n.



// Freq count approach
function areThereDuplicates() {
    let collection = {};

    for (let value in arguments) {
        collection[arguments[value]] = (collection[arguments[value]] || 0) + 1;
    }

    for ( let key in  collection ) {
        if (collection[key] > 1) return true;
    }

    return false
}

// Two pointer approach
function duplicates(...args) {
    args.sort((a, b) => a > b);

    let start = 0;
    let next = 1;

    while(next < args.length){
        if(args[start] === args[next]) return true;

        start++;
        next++;
    }
    
    return false;    
}
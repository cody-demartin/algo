const isAnagram = (s, t) => {

    // make some freq counters
    let sChars = {};
    let tChars = {};
    for ( let letter of s) {
        sChars[letter] = (sChars[letter] || 0) + 1;
    };
    for ( let letter of t) {
        tChars[letter] = (tChars[letter] || 0) + 1;
    };


    // takes care of edgecases
    if (s.length !== t.length) return false;

    // compares the keys of the freq checkers for equvilance, returns false if not
    for (let key in sChars) {
        if(sChars[key] !== tChars[key]) return false;
    }
    
    // return true if it makes it passed all the logic
    return true
};
const first = (s) => {
    // make a new map

    const map = new Map();

    // add the letters to the new map
    for (const letter of s) {

        // make new key value pairs using the set, using letter as what you're passing in, if it exists add 1, if it doesn't set it to one
        map.set(letter, map.get(letter) + 1 || 1);
    }


    // for the entire string's length
    for (let i = 0; i < s.length; i++) {
        
        // the current letter
        const letter = s[i]

        // if when retrieving from the set the string's current letter, returns a value of 1
        if (map.get(letter) === 1) {

            // return the current index
            return i
        }
    }

    // any other siutation return -1
    return -1
}


// set notes because I still don't know what a set is:

// set is a prototype function of map. first paramter is the value you are setting, second is the key. 
// map also has .get method, where you pass a parameter and it looks for that value in the keys array
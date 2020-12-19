const isPalindrome = str => {

    // get rid of any non-alphanumerical characters
    str = str.toLowerCase().replace(/[^a-z\d]/g, '');


    // set two pointers
    let i = 0;
    let j = str.length - 1;

    // while left bound less than right bound
    while (i < j) {
        //if they aren't equal, return false
        if (str[i] !== str[j]) return false

        // increment left bound
        i++;

        // decrement right bound
        j--;
    }

    // return true if no cases return false
    return true
}
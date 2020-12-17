const majorityElement = (nums) => {

    //define a frequency counter
    let freq = {}
    for (let i = 0; i < nums.length; i++) {
        freq[nums[i]] = (freq[nums[i]] || 0) + 1
    }

    // get and sort the keys from the freq checker
    const keys = Object.keys(freq).sort((a,b) => parseInt(freq[b]) - parseInt(freq[a]));
    
    // return the first element of the newly sorted array of keys parseInted
    return parseInt(keys[0]);
};
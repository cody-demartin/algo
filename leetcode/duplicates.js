const containsDuplicate = (nums) => {
    let freq = {}
    
    for (let i = 0; i < nums.length; i++) {
        freq[nums[i]] = (freq[nums[i]] || 0) + 1;
    }
    
    for(let key in freq) {
        if(freq[key] > 1) return true;
    }
    
    return false;
};


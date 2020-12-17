// time O(n) space O(n)
const moveZeroes = (nums) => {

    // going to need to keep track of length of array, minus zeros
    let length = nums.length; 
    
    // for in a range from length of unsorted array,
    for(let i = 0; i < length; i++) {

        // if that element is zero,
        if(nums[i] === 0) {

            // remove it,
            nums.splice(i, 1);

            // add 0 to the end
            nums.push(0);

            // decrement i to check from the now unsorted element
            i--;

            // acount for a new zero at the end of the right sorted portion of the array
            length--;
        };
    };
    
    // return the sorted number array
    return nums;
};
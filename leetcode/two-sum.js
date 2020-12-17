const twoSum = (nums, target) => {
    
    // declare result so we can later assign a value to it
    let result;

    // we set the initial pointer (i) to zero, the first index
    let i = 0;

    // set the second pointer to the last index of the collection
    let j = nums.length -1;
    
    // sort our data to ensure that the last element is the greatest and first the smallest, while also retaining their index through the index prop
    const data = nums.map( (item,index) => {return {item, index}});

    // basic sort algo if a is less than b, -1 yada yada
    data.sort((a,b) =>{
        if(a.item < b.item){
            return -1;
        } else if (a.item > b.item){
            return 1;
        } else {
            return 0;
        }
    })

    // while i, the left bound pointer, is less than j, right bound pointer
    while( i < j ){

        // add them together
        const sum = data[i].item + data[j].item;

        // if the sum is less than target, increase left bound
        if( sum < target){
            i++;
        
        // if the sum is greater, decrease the right bound
        } else if(sum > target){
            j--;

        // if its equal return an array where in the sorted array, the original index prop is held
        } else {
            return [data[i].index,data[j].index];
        }
    }
};
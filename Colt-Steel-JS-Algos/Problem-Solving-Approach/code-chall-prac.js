const balancedSubstring = (s) => {
    let map = {};
    
    let start = 0;
    let total = 0;

    for(let i =0; i < s.length; i++) {
        map[s[i]] = (map[s[i]] || 0 ) + 1
        console.log(Object.keys(map))
        if(Object.keys(map).length <= 2) {
            if(Object.values(map)[0] === Object.values(map)[1]){
                total = Math.max(total, i - start + 1)
            }
        }
        else{
            map[s[start]]--;
            if(map[s[start]] === 0) delete map[s[start]];
            
            start++;
        }
    }

    return total
}
//  Frequency Counters
//      - This pattern uses objects or sets to collect values/frequencies of values
//      - This can often avoid the need for nested loops or O(N)^2 operations with arrays
//        /strings
//
//
//      - An Example
//          Write a function called same, which accepts two arrays. The function should
//          return true of every value in the array has its corresponding value squared
//          in the second array. The frequency of values must be the same. 
//
//          

            function same(a1, a2) {
                if (a1.length !== a2.length) return false;

                obj1 = {}
                obj2 = {}
                for(let val of a1){
                    obj1[val] = (obj1[val] || 0) + 1
                }
                for(let val of a2){
                    obj2[val] = (obj2[val] || 0) + 1
                }
                for(let key in obj1){
                    if(!(key ** 2 in obj2)) {
                        return false
                    }
                    if(obj2[key ** 2] !== obj1[key]) {
                        return false
                    }
                }
                return true
            }
//
//
//
//
//
//
//
//
//
//
//
//
//

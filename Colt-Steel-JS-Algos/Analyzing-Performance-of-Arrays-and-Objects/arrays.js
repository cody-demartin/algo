//  When are Arrays slow?
//      - Arrays are ordered lists
//      - This order can come at a cost for some of their operations
//      - Index decides order
//      
//  Use case
//      - When you need order
//      - When you need fast access/insertion and removal (sort of)
//
//      - access is O(1)
//          - names[0] = constant time lookup
//          - think of index as shortcut to the data
//      - insertion and removal
//          - each element has an index so if you want to add something in,
//              - if you add to array its constant time O(1)
//              - if you add to the beginning of the array all of the indexs must be updated so its O(n)
//                  - the same drawbacks of adding to beginning goes for removing from beginning
//                  - push and pop always faster than shift and unshift
//       - searching is O(n)   
//          - for an unsorted array, you would have to theoretically check every element so its O(n)
//
//  Built in method run-times
//      * push - O(1)
//      * pop  - O(1)
//      * shift - O(n)
//      * unshift - O(n)
//      * concat - O(n)
//      * slice - O(n)
//      * splice - O(n)
//      * sort - O(n*logn)
//      * enumerators - O(n)



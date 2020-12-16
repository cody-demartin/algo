//  Objectives
//      Define what recursion is and how it can be used
//      Understand the two essential compononents of a recursive function
//      User helper method recursion and pure recursion to solve more difficult problems
//      Visiualize the call stack to better debug and understand recursive functions

//  Why use recursion?
//      What is Recursion?
//          A process (a function or case) that calls itself
//          JSON/parse/JSON.stringify are recursive functions!
//          document.getElementByID and DOM traversal algos 
//          Object traversal
//          We will see it with more complex data structures

//  In almost all program languages, there is a built in data structure that manages
//  what happens when functions are invoked
//      Its called a call stack
//          When a function is invoked it is placed (pushed) on the top of the call 
//          stack
//          When JavaScript sees the return keyword or when the function ends, the compiler
//          will pop
//          Why is this important?
//              Used to functions being pushed on call stack and popped right off
//              With recursion we keep pushing new functions onto the call stack

//  How recursive functions work
//      Invoke the same function with a different input until you reach your base case
//      Base case
//          The condition when the recursion ends
//          This is the most important concept to master
//      Two essential parts of a recursive function
//          Base case
//          Different input

//  An example.

    function countDown(num) {
        if(num <= 0) {
            console.log('All done!')
            return
        }
        console.log(num)
        num--;
        countDown(num)
    }

    function sumRange(num){
        if(num === 1) return 1;
        return num + sumRange(num-1);
    }

    function factorial(num){
        if(num === 1) return 1;
        return num * factorial(num - 1); 
    }


//  Common Recursion Pitfalls
//      Wrong base case
//      Forgetting to return or returning the wrong thing!
//      Stack overflow!


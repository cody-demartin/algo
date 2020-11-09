# Notes
#   Analyzing an algorithm has come to mean predicting the resources an algo will use
#       -> Resources such as memory, communication bandwith or computer hardware are of primary concern
#       -> But most often it is computational time that we want to measure
#   Before we can analyze an algo, we must have a model of the implementation technology that we will use    
#       -> For the purpose of all exercises we shall assume a generic one-processor, RAM model of computation and understand that the algos
#          will be implemented as computer programs
#       -> In this model, instructions are executed with no concurrent operations being possible
#   We are hoping to precisely define the instructions of the RAM model and their costs
#   Each instruction takes a constant amount of time
#   
#
#
#   An analysis of Insertion Sort
#       -> The time taken by insertion sort depends on the input:
#           - Sorting a thousand numbers takes longer than sorting three numbers
#       -> Insertion Sort can take different amounts of time to sort two inputs of the same size depending on how nearly sorted they are
#       -> In general, the time taken by an algo grows with the size of the input 
#       -> The best notion for input size depends on the problem being studied
#           - For many problems the most natural measure is the number of items in the input
#               i.e. an array of n elements or a string of n length in sorting
#           - For many other problems, such as multiplying two integers, the best measure of input size is the total number of bits needed
#             to represent the input in ordinary binary notation. Sometimes it might even be beneficial to think of the input with two 
#             different numbers instead of one.
#               i.e. the input of some algo is a graph that can be described as the number of vertices and number of edges in the graph
#       -> The running time of an algo is the number of primitive steps or operations executed
#           - It is conveinent to ddefine the notion os step so that it is as machine-independant as possiblr
#           - A constant amount of time is required to execute each line of our code
#           - One line of code might take longer than another line of code to execute but we can assume that each execution of the ith
#             line of code takes time Ci where Ci is a constant.
#           - Lets learn how to calculate this base constant
#           
#       -> The math:
#           - We start by presenting the time "cost" of each statement and then number of times each statement is executed. 
#               1) For each j = 2,3...,n, where n = Array.length, we let Tj denote the number of times the while loop test in line 5 is 
#                  executed for that value of j. When a for or while loop exits in the usual way, the test is executed one more than the
#                  loop body. 
#                   
#
#                  i.e. for j = 2 to A.length                                               C1              n          
#                           key = A[j]                                                      C2              n - 1
#                           //Insert A[j] into the sorted sequence                          0               comment no run time
#                           i = j - 1                                                       C4              n - 1
#                           while i > 0 and A[i] > key                                      C5              
#                               A[i + 1] = A[i]
#                               i = i - 1
#                           A[i+1] = key
#
#
#
#   Worst case and average-case analysis
#       -> Focus on worst case
#           - The worst case running time of any algorithm gives us an upper bound on the running time for any input. Knowing it provides
#             a gurantee that the algo will never take any longer.
#           - For some algos, the worst case scenario occurs fairly often. Consider a search algorithm that cannot fin a value. It must
#             run the maximum amount of times in order to find that there is no matching value.
#           - Often times the average case is around the same cost as the worst case anyhow so it doesn't really make that much of a dif.
#       -> In some particular cases we will care about the average-case running time of an algo
#           - We shal see a technique known as probabilistic analysis applied to various algorithms throughout this book. The scope of avg.
#             case limited, because it may not be apparent what constitutes an “average” input for a particular problem
#
#   Order of growth
#       -> it is the order of growth of the running time that really interests us
#       -> Since in some runtimes there is a quadratic forumala for runtime, need to look at the first term 
#           - For T(n) = an^2 +bn + c, since n^2 is so much larger than other two terms at higher n values, only that term matters. 
#           - Can even ignore the value of a. This is where we get theta notation from. Θ(n^2) in this case.  
#
# Exercises
# 2.2-1 Express the function n^3/1000 - 100n^2 - 100n + 3 in terms of Θ notation.
#   A) I would think Θ(n^3) but it might be Θ(n^3/100)
#
# 2.2-2 Consider sorting n numbers stored in array A by first finding the smallest element of A and exchanging it with the element in AŒ1.
#       Then find the second smallest element of A, and exchange it with AŒ2. Continue in this manner for the first n1elements of A. 
#       Write pseudocode for this algorithm, which is known as selection sort. What loop invariant does this algorithm maintain? 
#       Why does it need to run for only the first n  1 elements, rather than for all n elements? Give the best-caseand worst-case 
#       running times of selection sort in ‚theta notation.
#
#   A) Psuedocode:
#           1 for i = 1 to A.length - 1
#           2    minIndex = i
#           3    for j = i + 1 to A.length - 1
#           4        if A[j] < A[minIndex] and j != minIndex
#           5            minIndex = j
#           6    swap A[i] with A[minIndex]
#
#
#       Breakdown: 
#           For some range of numbers from 1 to the length of an inputted array - 1, you then set the variable of minIndex to the current
#           iteration value (i). Then, we hit the second for loop where we define a second range of numbers as i + 1 to the length of an
#           inputted array - 1. If the value of A[i + 1 (or j)] is less than the value of A[i], and they are not equal, set the value of
#           the variable minIndex to i + 1 (or j). Then, simply swap the value of A[i] with A[minIndex].
#
#           Why n - 1?
#               On the last iteration of the loop, the algo will evaluate for the last element compared to the minimum value in the array
#               so no reason to traverse full length otherwise will get error no such index etc. Also A[n] will always be biggest one. 
#
#       Loop Invariant:
#           At the start of the each iteration of the outer for loop of lines 1-6, the subarray A[1..i - 1] consists of i - 1 
#           smallest elements of A, sorted in increasing order.
#
#       Theta Notation:       
#           Theta of n^2 because it has two for loops so there will be a quadratic representation of the problem. Both best and worse case
#           scenarios (order array and reverse order array) are the same time because it will take the same number of iterations to validate
#           or actually change order. 
# 
# 2.2-3 Consider linear search again. How many elements of the input sequence need to be checked on the average, assuming that the element
#       being searched for is equally likely to be any element in the array? How about the worst case? What are the average-case and 
#       worst-case scenarios in theta notation. 
#
#   A) If the element is present int he array the average time to get to that element would be n/2. For worst case, you would need to search
#      the entire array. Both theta's are n because it is either T(n) = cn/2 or T(n) = cn. 
#
# 2.2-4 How can we modify any aolgorithm to have a good best-case running time? 
#   
#   A) Pattern match for the best case scenario and return a pre computed answer to decrease run time. 
#
#
#
#
#
#
#
#
#
#





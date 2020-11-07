# Notes
#
#   Algorithms as a technology
#       Computers are not infinitely fast and memory is not free, therefore computing time is a bounded resource and so is space in memory.
#           -> Use these as resources wisely and utilizing efficient algorithms will help you accomplish this.
#   
#   Efficiency 
#       Different algos made to solve same problem often offer different levels of efficiency
#           -> These differences can be greater than differences in certain hardware or software
#       We will touch on two sorting algos later on
#           -> Insertion sort: 
#              - Takes time roughly equal cn^2 where c is a constant that does not depend on n
#              - That is it takes time roughly proportional to n^2 
#           -> Merge sort: 
#              - Takes time roughly equal (c)(n)lg(n) where lg(n) is log2n and c is another constant that also does not depend on n.
#           -> Insertion sort usually typically has a smaller constant factor than merge sort so that c value < merge sort c value. 
#              - These constant values will have fair less of an impact on the total run time than the dependence on the input size n.
#              - Insertion sort is better for smaller number of inputs because of the speed difference you get from having log(n) as
#                opposed to having just n. No matter how much smaller the constant of insertion sort is, there will always be a value 
#                of n inputs where merge sort is faster. 
#           -> Example of the difference: 
#                   Computer A running insertion sort with a runtime of 2n^2:
#                          (2 * (10e7)^2 instructions) / (10e10 instructions/second) = 20,000 seconds (more than 5.5 hours)
#                   
#                   Computer B running merge sort with a runtime of 50n*log(n):
#                          (50 * 10e7)(log(10e7) instructions) / (10e7 instructions/second) = 1163 seconds (less than 20 min.)
#                   
#                   As we can see, even with a much bigger c value, much less processing speed, merge sort is still SIGNIFICANTLY faster
#                   when dealing with large collections. 
#
#   Algorithims and other technologies
#       The example defined above shows that we should consider alogrithms, like computer hardware, as a technology. 
#       Algorithms are at the core of most technologies used in contemporary computers. 
#       The larger problems of modern computer science are when effcient algorithms use begins to become more apparent.
#
# Exercises
# 
# 1.2-1 Give an example of an application that requires algorithmic content at the application level, and discuss the function of the algos
#       involved. 
#       A) Google maps uses a ton of algorithmic content. It has shortest distance ones, interpolation algos for turning lat and long coords
#          into actual named locations. They probably have an algo that runs the shortest distance one and then another that returns approx.
#          time based on the output of the first algorithm.
#
# 1.2-2 Suppose we are comparing implementations of insertion sort and merge sort on the same machine. For inputs of size n, insertion sort
#       runs in 8n^2 steps, while merge sort tuns in 64nlgn steps. For which value of n does insertion sort beat merge sort? 
#       A) Solve the inequality of n < 8lg(n)
#           -> Something I just learned is log = base 10, lg = base 2
#           -> Manipulate the inequality to lg(n) / n >= 1/8 which returns an answer of 43 (idk how tho)
#
# Problems
# 1-1 Comparison of running times
#     For each function f(n) and time t in the following table, determine the largest size n of a problem that can be solved in time t,
#     assuming that the algorithm to solve the problem takes f(n) microseconds. 



# Exercises
# 
# 1.1-1 Give a real world example that requires sorting or a real world example that requires computing a convex hull.
#       A) Define convex hull:
#           -> A convex hull is a cycle of connected points such that for any pair of points, the line segement between
#              the points is included within the convex hull. Imagine walking around the edge of the garden and getting
#              the coords of where you stepped to make a boundary of the space within.
#          So, a real life example of using a convex hull would be for an engineering firm designing designing a fence or
#          wall for a partiuclar enclosed area (zoo cage) to design the concrete moulds needed and the arch. designs. 
#
# 1.1-2 Other than speed, what other measures of efficienct might one use in a real-world setting? 
#       A) There are a few: 
#           -> Space Usage: software that uses less memory would be compatible for economic devices with lower memory and 
#              therefore yield better sales. It might even reflect on speed of execution because of lazy implementation. 
#            
#           -> Network Utilization: just like space usage the less the software uses the network the better it is because
#              it would not wait until the network is available.
#
#           -> Database Requirement: the number of databse transactions per second and their type. Again it would not wait.
#
#           -> Hardware Requirement: like whether using specific pieces of computation or a general one. Special hardware 
#              might increase speed but increase cost as well. 
#
# 1.1-3 Select a data structure that you have seen previously and discuss its strengths and limitations. 
#       A) Linked list: access time slower than array, memory is assigned during runtime not during compile time so speed 
#          is better. Easier to insert elements into a linked list than it is into an array. 
#
# 1.1-4 How are the shortest-path and traveling-salesman problems similar? How are they different? 
#       A) Shortest path is defined as "we want to find the path between two vertices or nodes in a graph such that the sum
#          of the weights of its constituent edges is minimized." The traveling salesman question is defined as having a list
#          of cities and their pairwise distances. Then you are tasked with finding the shortest possible route that visits
#          each city exactly once. Then you return to the city you originally came from. They are alike in the fact that they
#          both seek to minimize traveled distance so they are minimization problems. They are different in the fact that the
#          shortest path problem just needs to minimize distance between two points and the route in-between doesn't matter. 
#          The traveling salesman problem requires a path between multiple points and the route between them does matter. 
#
# 1.1-5 Come up with a real world problem in which only the best solution will do. Then come up with one in which a solution
#       that is approximately the best is good enough.
#       A) Any sort of engineering application, there is going to be a need for a very accurate measure where only the best 
#          most optimized solution should be implemented. In terms of algorithms, a sports betting bot that predicts based off
#          of prior statistics, if it predicts correctly over 50% of the time, it will still gurantee profit. 




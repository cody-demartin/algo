# Notes
# Designing Algorithms
#   There are many different kinds of methods for approaching the design of algorithms 
#       -> For example, with insertion sort we used an incremental approach
#           i.e. Having sortedthe subarray A[1... j-1] we inserted the single element A[j] into its proper place, yielding the sorted
#                subarray A[1...j]
#   In this section we examine an alternative form of algo design known as "divide and conquer"
#       -> We will use this approach to deisgn a sorting-algo whose worst case is much less than that of insertion sort
#       -> One advantage of divide-and-conquer algos are their runtimes are often easily determined
#   
#   The divide-and-conquer approach
#       -> Many useful algorithms are recursive in structure
#           - To solve a given problem, they call themselves recursively one or more times to deal with closely related sub problems.
#           - They break the problem into several smaller subproblems that are like the original but smaller in size solve the problems
#             recursively and then combine the solutions to get the orignal problem's solution.
#       -> The divide-and-conquer paradigm involves three steps at each level of recursion:
#           1) Divide
#               - Divide the problem into smaller subproblems that are the smallest instances of the same problem
#           2) Conquer
#               - Conquer the subproblems by solving them recursively. If the subproblem sizes are small enough,
#                 however, just solve the problems in a straightforward manner. 
#           3) Combine
#               - Combine the solutions of the subproblems into the solution for the original problem. 
#       -> The merge-sort algorithm follows the dive-and-conquer paradigm 
#           1) First you divide. Divide the n-element sequence to be sorted into two subsequences of n/2 each. 
#           2) Sort the two subsequences.
#           3) Merge the two sorted subsequences to produce the sorted answer. 
#       -> The recursion in merge-sort "bottoms-out" when the sequence hits a length of 1, as every sequence of a length of 1 is sorted. 
#       -> The "key-operation" of merge-sort is the merging of the two sorted sequences in the combine section of divide-and-conq.
#           - We merge by calling an auxilary procedure(lambda function) called MERGE(A, p, q, r)
#               - A = the array
#               - p,q and r = indices into the array such that p <= q <= r
#               - The procedure assumes that the subarrays of A[p..q] and A[q + 1..r] are in sorted order.
#               - It merges them to form a single sorted array that replaces the current A[p..r]
#               - The MERGE procedure takes time theta(n), where n = r - p + 1 is the total number of elements being merged and it works
#                 as follows.
#               
#                 Layman's Terms:
#                   You have two sorted arrays with lowest values at index[0]. You compare the first element of each one, returning 
#                   and assigning the value of the lowest number to a new copy of A[p..r] that is completely sorted. If one array 
#                   empties out, the next array simply adds itself in order to the array because it is already sorted. Theta(n)
#                 Basic Implementation:
#
#
class MergeSortAlgorithm
    # Break's the array down into two numbers (number A and number B) and sorts them.
    def sort(numbers)
        if numbers.size <= 1
            return numbers
        end

        array_size   = numbers.size
        half_of_size = (array_size / 2).round

        left_array  = numbers.take(half_of_size)
        right_array = numbers.drop(half_of_size)

        sorted_left_array = sort(left_array)
        sorted_right_array = sort(right_array)

        merge(sorted_left_array, sorted_right_array)
    end

    # This then creates a new array, loops through the left/right arrays and places the lowest number into the array. 
    def merge(left_array, right_array)
        if right_array.empty?
            return left_array # We have nothing to compare. Left wins.
        end

        if left_array.empty?
            return right_array # We have nothing to compare. Right wins.
        end

        smallest_number = if left_array.first <= right_array.first
            left_array.shift
        else
            right_array.shift
        end

        # We keep doing it until the left or right array is empty.
        recursive = merge(left_array, right_array)

        # Okay, either left or right array are empty at this point. So we have a result.
        [smallest_number].concat(recursive)
    end
end

# Let's give this a spin?
merge_sort = MergeSortAlgorithm.new
puts merge_sort.sort([4, 92, 1, 39, 19, 93, 49, 10].shuffle) # => [1, 4, 10, 19, 39, 49, 92, 93]

# How it works
# 1. Let's say the input is [4, 92, 1, 39, 19, 93, 49, 10]
# 2. Break them down in halfs. So we now have [4, 92, 1, 39] and [19, 93, 49, 10]
# 3. Break them again in halfs. Let's start with the first. So now we have [4, 92] and [1, 39]
# 4. Break until there's only one item in each. So now we have [4] and [92]
# 5. Check which one is lower. So in this case, we know 4 is lower than 92. Let's rearrange it if necessary.
# 6. Now we have [4, 92] and we do the same for [1, 39]
# 7. We now create a new array. []
# 8. We check the first element on the left array versus the first element on the right array (i.e. 4 >= 9) and then add them to the new array.
# 9. Keep doing that until it's done.
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
#
#
#
#
#
#



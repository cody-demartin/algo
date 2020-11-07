# Notes
#   Insertion sort
#       -> Solves the sorting problem: 
#           Input: A sequence of n numbers
#           Output: A permutation (reordering) of the input sequence such that nondesecnding order
#       -> The numbers we wish to sort are also known as keys
#       -> Although conceptuallt we are sorting a sequence, the input comes to us in the form of an array with n elements
#       -> Effecient for sorting a small number of elements
#            Start with an empty left hand. To find the correct position for a card we compare it with each of the cards already in the hand
#            from right to left. At all times, the cards held in the left hand are sorted and these cards were orginally the top cards on 
#            the pile. 
def insertion_sort(array) 

    #for a number in a range from 1 - length of an array
    for i in 1...(array.length)
        #assign the value of that number to the value of j
        j = i
        while j > 0

            #if the value of the key [j-1] is greater than the value of the key [j]
            if array[j-1] > array[j]

                #set the value of temp to the value of the key [j]
                temp = array[j]

                #set the value of key [j] to the value of key [j-1]
                array[j] = array[j-1]

                #then setting the value of key [j-1] to temp which was the old value of key [j]
                array[j-1] = temp
            else

                #if the value of the key [j-1] is less than the value of the key [j], do nothing it belongs to the left
                break
            end

            #decrement the value of j after completing the block above to continue the loop
            j = j - 1
        end
    end

    #return the final array
    return array
end
# Exercises 
# 2.1-2 Rewrite the insertion-sort procedure to sort into nonincreasing instead of nondecreasing order. 
#       I think this would be as simple as flipping the > to a < as it would check if left side is less than the number being compared and
#       if so it would change positions. Therefore, the greater number would be on the left. 
# 
# 2.1-3 Consider the searching problem:
#           Input : A sequence of n numbers A = (a1, a2, ...an) and a value v
#           Output: An index i such that v = A[i] or the special value NIL if v does not appear in A.
#       Write pseudocode for linear search, which scans through the sequence, looking for v. Using a loop invariant, prove that your algo 
#       is correct. Make sure that your loop invariant fulfills the three necessary properties. 

# class Array
#     def linear_search(targeted_values)
#         i = 0
#         while i < self.length
#             if self[i] == targeted_values
#                 return i
#             end
#         i += 1
#         end
#     nil
#     end
# end
#  
# 
#       Proof: to come ending here for tonight, tomorrow we learn proofs.
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


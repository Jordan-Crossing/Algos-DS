# Question
#     tandemSpeed = the greater value of either riderA or riderB

#     given two lists of positive integers representing speeds of riders
#         one of red shirts
#         one of blue shirts

#     both lists same lenght

#     write a function that returns the maximum or minimum possible speed 
#     of all the the tandem bicycles based on an input parameter
        
#         if fastest = true then return max total possible speed
#         if fastest = false then return min total possible speed

# Sample i/o

#     redShirtSpeeds = [5, 5, 3, 9, 2]
#     blueShirtSpeeds = [3, 6, 7, 2, 1]
#     fastest = true

# Edgecases
# Approach
#     sort both arrays

#     if the input value "fastest" is true reverseArrayInPlace

#     initiate a totalSpeed variable to a value of zero
#     loop over redShirtSpeeds
#         add the greater value to totalSpeed between redShirtSpeeds[index] and blueShirtSpeeds[index] 

#     return totalSpeed

#     write a function for reverseArrayInPlace

# BigO

# due to the sorting function the time complexity is 0(nlog(n)) and the space is O(1)

# Psudo code

# def tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest):
#     redShirtSpeeds.sort()
#     blueShirtSpeeds.sort()

#     if fastest:
#         reverseArrayInPlace(redShirtSpeeds)

#     totalSpeed = 0
#     for index in range(len(redShirtSpeeds)):
#     	rider1 = redShirtSpeeds[index]
#     	rider2 = blueShirtSpeeds[index]
#     	totalSpeed += max(rider1, rider2)

#     return totalSpeed

# def reverseArrayInPlace(array):
#     start = 0
#     end = len(array) - 1
#     while start < end:
#         array[start], array[end] = array[end], array[start]
#         start += 1
#         end -= 1



# Code
# Test
# Refactor/reflection

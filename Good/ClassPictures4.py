
# // -----------------------------------Sample Inputs and Outputs----------------------------------- //

# input
#     redShirtHeights = [5, 8, 1, 3, 4]

#     blueShirtHeights = [6, 9, 2, 4, 5]

# Output

#     true

# // -----------------------------------Big O CHAT----------------------------------- //

# time complexity = 0(nlog(n)) n is the number of students

# space complexity = 0(1)

# dont think i can get any better due to needing the sort function 




# // -----------------------------------APPROACH----------------------------------- //

# Sort both arrays in decending order
# compare 0th index of both arrays to determine the back row
 
#  loop through back row and compare each index to the coresponding index in the front row
#  if back row index greater than front row index return false

#  return true
# // -----------------------------------QUESTION----------------------------------- //

# class with even number of students
# students wearing red or blue shirts half half
# arrange students into two even rows 

#     - all reds must be in same row 

#     - all blues must be in same row

#     - each student in back row must be taller than the student in front of them in the 
#         front row

# Given two input arrays 
#     one for red shirt heights
#     one for blue shirt heights

#     same length with each index value a positive integer indicating the height of the student

# Write a function that returns whether or not a class photo that follows the these rules can 
# be taken




# // -----------------------------------SUDO CODE----------------------------------- //


def classPhotos(redShirtHeights, blueShirtHeights):
    redShirtHeights.sort(reverse=True)
    blueShirtHeights.sort(reverse=True)

    shirtColourInFirstRow = "RED" if redShirtHeights[0] < blueShirtHeights[0] else "BLUE"
    for index in range(len(redShirtHeights)):
        redShirtHeight = redShirtHeights[index]
        blueShirtHeight = blueShirtHeights[index]

        if shirtColourInFirstRow == "RED":
            if redShirtHeight >= blueShirtHeight:
                return False
        else:
             if blueShirtHeight >= redShirtHeight:
                return False
    
    return True


# // -----------------------------------CODE----------------------------------- //

# function classPhotos(redShirtHeights,blueShirtHeights) {
#     redShirtHeights.sort((a, b) => b - a);
#     blueShirtHeights.sort((a, b) => b - a);

#     const shirtColourInFirstRow = redShirtHeights[0] < blueShirtHeights[0] ? 'RED' : 'BLUE';
#     for (let index = 0; index < redShirtHeights.length; index++) {
#         const redShirtHeight = redShirtHeights[index];
#         const blueShirtHeight = blueShirtHeights[index];

#         if(shirtColourInFirstRow === 'RED') {
#             if (redShirtHeight >= blueShirtHeight) return false;
#         } else if (blueShirtHeight >= redShirtHeight) return false;
#     }
#     return true;
# }











# // -----------------------------------TESTS----------------------------------- //












# // -----------------------------------Reflections----------------------------------- //












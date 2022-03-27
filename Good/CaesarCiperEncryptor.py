# question silly elephants always biking past cars together rapidly

# question

# given a string of lowercase letters and an integer representing a key
# write a function that returns a new string by shifting every letter of the input by k positions in the alphabet
# k=key

# sample IO
# edgecases
#     letters should wrap so Z shifted by one returns A
# approach

# make an array to store newLetters
# use the modulus opperator to make sure the input key isnt so big it breaks things by being out of range of
# the alphabet
# initiate an alphabet array with split method
# loop over letters of string
#     push the returned value of getNewLetter()
# return newLetters.join

# make a function getNewLetter that takes letter key and alphabet
# and returns the appropriate alphabet index for the newLetters

# bigO
# psudo code

def caesarCipherEncryptor(string, key):
    newLetters = []
    newKey = key % 26
    alphabet = list("abcdefghijklmnopqrstuvwxyz")
    for letter in string:
        newLetters.append(getNewLetter(letter, newKey, alphabet))
    return "".join(newLetters)

def getNewLetter(letter, key, alphabet):
    newLetterCode = alphabet.index(letter) + key
    return alphabet[newLetterCode % 26]

# code

# function caesarCipherEncryptor(string, key) {
#     const newLetters = []
#     const newKey = key % 26
#     const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
#     for(const letter of string) {
#         newLetters.push(getNewLetter(letter, newKey, alphabet))
#     }
#     return newLetters.join('');
# }

# function getNewLetter(letter, key, alphabet) {
#     const newLetterCode = alphabet.indexOf(letter) + key
#     return alphabet[newLetterCode % 26]
# }

# tests
# refactor/reflections
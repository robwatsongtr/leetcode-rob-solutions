"""
1974. Minimum Time to Type Word Using Special Typewriter

There is a special typewriter with lowercase English letters 'a' to 'z' arranged in a 
circle with a pointer. A character can only be typed if the pointer is pointing to that character. 
The pointer is initially pointing to the character 'a'.

Each second, you may perform one of the following operations:

Move the pointer one character counterclockwise or clockwise.
Type the character the pointer is currently on.
Given a string word, return the minimum number of seconds to type out the characters in word.

Example:

Input: word = "zjpc"
Output: 34
Explanation:
The characters are printed as follows:
- Move the pointer counterclockwise to 'z' in 1 second.
- Type the character 'z' in 1 second.
- Move the pointer clockwise to 'j' in 10 seconds.
- Type the character 'j' in 1 second.
- Move the pointer clockwise to 'p' in 6 seconds.
- Type the character 'p' in 1 second.
- Move the pointer counterclockwise to 'c' in 13 seconds.
- Type the character 'c' in 1 second.


"""


class Solution:
    def get_table(self):
        alpha_table = {}
        counter = 0

        for i in range(97, 123):
            alpha_table[chr(i)] = counter
            counter += 1

        return alpha_table

    def minTimeToType(self, word: str) -> int:
        table = self.get_table()
        
        # get initial distance from 'a' 
        result = min( abs(table[word[0]]), 26 - abs( table[word[0]]) ) + 1
        
        for i in range(1, len(word)):
            curr = word[i - 1]
            next_word = word[i]
            result += min(abs(table[curr] - table[next_word]), 26 - abs(table[curr] - table[next_word])) + 1

        return result
    
# using modulo, definitely the way to go, cleaner and no need to use abs and makes sense for circularity.
class Solution2:
    def get_table(self):
        alpha_table = {}
        counter = 0

        for i in range(97, 123):
            alpha_table[chr(i)] = counter
            counter += 1

        return alpha_table

    def minTimeToType(self, word: str) -> int:
        table = self.get_table()
        
        # initial movement from 'a'
        #              -----forwards ---------    ------backwards ---------
        result = min( (table[word[0]] - 0) % 26, (0 - table[word[0]]) % 26 ) + 1 
        
        for i in range(1, len(word)):
            curr = word[i - 1]
            next_word = word[i]
            #                -----backwards----------------       ------------  forwards -------    
            result += min( (table[curr] - table[next_word]) % 26, (table[next_word] - table[curr]) % 26) + 1

        return result
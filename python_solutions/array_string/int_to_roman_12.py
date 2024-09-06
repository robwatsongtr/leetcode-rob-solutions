# LC 12 Integer to Roman 


class Solution:
    def intToRoman(self, num: int) -> str:
        # array of tuples in descending order to iterate over
        # this is critical to how the algorithm works a
        value_map = [
            (1000, 'M'),
            (900, 'CM'),
            (500, 'D'),
            (400, 'CD'),
            (100, 'C'),
            (90, 'XC'),
            (50, 'L'),
            (40, 'XL'),
            (10, 'X'),
            (9, 'IX'),
            (5, 'V'),
            (4, 'IV'),
            (1, 'I')
        ]

        result = ''

        # iterate over each tuple in tuple array 
        for val, rn in value_map:
            # while loop allows multiple of the same roman numeral to be appended in situations
            # where you need that, like MMM. Clever!
            while num >= val:
                # append the corresponding roman numeral to result
                result += rn 
                # subtract that value from num  
                num -= val

        return result
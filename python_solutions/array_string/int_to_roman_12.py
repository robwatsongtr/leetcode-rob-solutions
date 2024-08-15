# LC 12 Integer to Roman 


class Solution:
    def intToRoman(self, num: int) -> str:
        # array of tuples in descending order to iterate over
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

        roman_numeral = ''

        # iterate over each tuple in tuple array 
        for val, rn in value_map:
            # while num in its current state is greater or equal to current value in tuple array
            while num >= val:
                # append the corresponding roman numeral to result
                roman_numeral += rn 
                # subtract that value from num  
                num -= val

        return roman_numeral
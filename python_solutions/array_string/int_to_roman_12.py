# LC 12 Integer to Roman 


class Solution:
    def intToRoman(self, num: int) -> str:
        # array of tuples in descending order to iterate over
        # this is critical to how the algorithm works 
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
        for dec_val, rn_val in value_map:

            # while the number in the current state is greater than or equal to the current decimal value 
            # in tuple array, you keep appending the necessary roman numeral 
            while num >= dec_val:

                # append the corresponding roman numeral to result as needed 
                result += rn_val

                # subtract current decimal value from num  
                num -= dec_val

        return result
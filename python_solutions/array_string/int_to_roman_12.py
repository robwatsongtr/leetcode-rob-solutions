# LC 12 Integer to Roman 


class Solution:
    def intToRoman(self, num: int) -> str:
        int_map ={
            1: 'I',
            4: 'IV',
            5:  'V',
            9:  'IX',
            10: 'X',
            40: 'XL',
            50:  'L',
            90:  'XC',
            100:  'C',
            400:  'CD',
            500:  'D',
            900:  'CM',
            1000: 'M'
        }

        def decompose_num(n):
            result = []
            place = 1
            while n > 0:
                digit = n % 10 # modding by 10 always gives the last digit as the remainder 
                result.append(digit * place)
                n = n // 10
                place = place * 10
            return result[::-1]
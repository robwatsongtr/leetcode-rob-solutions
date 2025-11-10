"""
1154. Day of the Year

Given a string date representing a Gregorian calendar date formatted as YYYY-MM-DD, 
return the day number of the year.


Example 1:

Input: date = "2019-01-09"
Output: 9
Explanation: Given date is the 9th day of the year in 2019.
Example 2:

Input: date = "2019-02-10"
Output: 41


"""


class Solution:
    def dayOfYear(self, date: str) -> int:
        # add padding 0 to make 1-indexed 
        days = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
        
        year = int(date[:4])
        month = int(date[5:7])
        day = int(date[8:10])

        acc = 0

        if month == 1:
            return day

        if year != 1900 and year % 4 == 0:
            # is leap year 
            days[2] = 29
            for i in range(month):
                acc += days[i]
        else:
            for i in range(month):
                acc += days[i]

        return acc + day 
        

        
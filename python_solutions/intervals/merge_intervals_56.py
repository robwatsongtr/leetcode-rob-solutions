"""


"""

class Solution:
    def merge(self, intervals):
        # assuming intervals arent' sorted
        intervals.sort(key=lambda x: x[0])

        # need this to avoid range error in first comparison
        # (need something in result to compare to) 
        result = [intervals[0]]

        for i in range(1, len(intervals)):
            curr = intervals[i]
            result_end = len(result) - 1

            # compare the end of the most recent interval in result with the beginning
            # of the current interval in intervals. Need to use max because some 
            # intervals fall completely within the one before it.
            if result[result_end][1] >= curr[0]:
                result[result_end][1] = max(result[result_end][1], curr[1])
            else:
                result.append(curr)

        return result
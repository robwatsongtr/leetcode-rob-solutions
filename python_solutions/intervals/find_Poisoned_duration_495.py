"""
495. Teemo Attacking
Easy

Our hero Teemo is attacking an enemy Ashe with poison attacks! When Teemo attacks Ashe, Ashe gets poisoned 
for a exactly duration seconds. More formally, an attack at second t will mean Ashe is poisoned during
the inclusive time interval [t, t + duration - 1]. If Teemo attacks again before the poison effect ends, 
the timer for it is reset, and the poison effect will end duration seconds after the new attack.

You are given a non-decreasing integer array timeSeries, where timeSeries[i] denotes that Teemo
attacks Ashe at second timeSeries[i], and an integer duration.

Return the total number of seconds that Ashe is poisoned.

Example 1:

Input: timeSeries = [1,4], duration = 2
Output: 4
Explanation: Teemo's attacks on Ashe go as follows:
- At second 1, Teemo attacks, and Ashe is poisoned for seconds 1 and 2.
- At second 4, Teemo attacks, and Ashe is poisoned for seconds 4 and 5.
Ashe is poisoned for seconds 1, 2, 4, and 5, which is 4 seconds in total.
Example 2:

Input: timeSeries = [1,2], duration = 2
Output: 3
Explanation: Teemo's attacks on Ashe go as follows:
- At second 1, Teemo attacks, and Ashe is poisoned for seconds 1 and 2.
- At second 2 however, Teemo attacks again and resets the poison timer. Ashe is poisoned for seconds 2 and 3.
Ashe is poisoned for seconds 1, 2, and 3, which is 3 seconds in total.

"""

from typing import List

class Solution:
    def findPoisonedDuration(self, timeSeries: List[int], duration: int) -> int:
        # 1. create an array of intervals
        intervals = []

        for i in range(len(timeSeries)):
            intervals.append([ timeSeries[i], timeSeries[i] + duration - 1 ])

        # 2. merge intervals 
        merged_intervals = [intervals[0]]

        for i in range(1, len(intervals)):
            curr = intervals[i]

            if merged_intervals[-1][1] >= curr[0]:
                merged_intervals[-1][1] = max(merged_intervals[-1][1], curr[1])
            else:
                merged_intervals.append(curr)

        # 3. count duration
        duration = 0         
        
        for interval in merged_intervals:
            duration += interval[1] - interval[0] + 1
        
        return duration 
        


if __name__ == "__main__":
    timeSeries = [1, 2, 4, 7]
    duration = 3

    poisoned_prob = Solution()

    print(poisoned_prob.findPoisonedDuration(timeSeries, duration))
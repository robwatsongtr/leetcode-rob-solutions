"""
134. Gas Station

There are n gas stations along a circular route, where the amount of gas at the ith station is gas[i].

You have a car with an unlimited gas tank and it costs cost[i] of gas to travel from the ith station to 
its next (i + 1)th station. You begin the journey with an empty tank at one of the gas stations.

Given two integer arrays gas and cost, return the starting gas station's index if you can travel around 
the circuit once in the clockwise direction, otherwise return -1. If there exists a solution, 
it is guaranteed to be unique

"""

"""

Greedy solution synopsis:

Traverse the gas stations while maintaining a running total of the current surplus (current_gas). 
If current_gas drops below zero, this means you can't start from the current start station, so you 
should move the starting point to the next station.

The sum of all gas minus the sum of all costs (total_gas) must be non-negative for a solution to exist.
If total_gas is non-negative, the last start point you attempted when your current_gas dropped below 
zero is the correct starting point.

"""


class Solution:
    def canCompleteCircuit(self, gas, cost) -> int:
        total_gas = 0
        current_gas = 0
        start_station = 0

        for i in range(len(gas)):
            # will be used to calculate if there can be a starting station 
            total_gas += gas[i] - cost[i]
            
            # to find correct starting station. resets whenever gas drops below zero
            current_gas += gas[i] - cost[i]

            if current_gas < 0:
                start_station = i + 1
                current_gas = 0

        return start_station if total_gas >= 0 else -1

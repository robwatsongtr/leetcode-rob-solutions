"""
2418. Sort the People
Easy

You are given an array of strings names, and an array heights that consists of distinct positive integers. 
Both arrays are of length n.
For each index i, names[i] and heights[i] denote the name and height of the ith person.

Return names sorted in descending order by the people's heights.

Example 1:

Input: names = ["Mary","John","Emma"], heights = [180,165,170]
Output: ["Mary","Emma","John"]
Explanation: Mary is the tallest, followed by Emma and John.
Example 2:

Input: names = ["Alice","Bob","Bob"], heights = [155,185,150]
Output: ["Bob","Alice","Bob"]
Explanation: The first Bob is the tallest, followed by Alice and the second Bob.

"""

def sortPeople(names, heights) :
    hashmap = {}
    result = []

    for i in range(len(names)):
        hashmap[heights[i]] = i

    sorted_keys = sorted(hashmap.keys(), reverse=True)

    for key in sorted_keys:
        index = hashmap[key]
        result.append(names[index])

    return result 

if __name__ == "__main__":
    names = ["John","Mary","Emma"]
    heights = [165,180,170]

    print(f'{sortPeople(names, heights)}')


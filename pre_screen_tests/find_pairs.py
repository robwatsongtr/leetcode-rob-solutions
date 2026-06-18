"""
Given an array, find number of pairs that when you subtract one pair number from the other, you 
get the target 


"""


def find_pairs(arr, target):
    hashmap = {}
    count = 0 

    for num in arr:
        complement = num + target

        if complement in hashmap:
            count += 1

        hashmap[num] = -1

    return count 
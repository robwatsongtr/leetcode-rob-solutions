import random

def choose_random_150():
    easy_list = [
        88, 27, 26, 169, 121, 13, 58, 14, 28, 125, 392, 383,
        290, 242, 1, 219, 202, 205, 228, 20, 141, 21, 104,
        100, 226, 101, 112, 222, 637, 530, 108, 35
    ]

    array_list_easy = [
        88, 27, 26, 169, 121, 13, 58, 14, 28, 125, 392, 228, 20
    ]

    hashtable_list_easy = [
        383, 290, 242, 1, 219, 205, 202
    ]

    medium_list = [
        80, 167, 3, 209, 189, 122, 55
    ]

    challenging_easy = [
        88, 27, 26, 13, 28, 392, 290, 205, 228, 20, 219 
    ]
 
    random_easy = random.choice(easy_list)
    random_medium = random.choice(medium_list)
    random_array_list_easy = random.choice(array_list_easy)
    random_hashtable_list_easy = random.choice(hashtable_list_easy)
    random_challenging_list_easy = random.choice(challenging_easy)

    # print(f"Random easy question: {random_easy}")
    print(f"Random array easy question: {random_array_list_easy}")
    print(f"Random hashtable easy question: {random_hashtable_list_easy}")
    print(f"Random challenging easy question: {random_challenging_list_easy}")
    print(f"Random medium question: {random_medium}")
    


if __name__ == "__main__":
    choose_random_150()
import random

def choose_random_150():
    easy_list = [
        88, 27, 26, 169, 121, 13, 58, 14, 28, 125, 392, 383,
        290, 242, 1, 219, 202, 205, 228, 20,  
    ]

    easy_linked_list = [
        141, 21
    ]

    easy_bin_tree = [
        104, 100, 226, 101, 112, 222, 637, 530, 108,
    ]

    array_list_easy = [
        88, 27, 26, 169, 121, 13, 58, 14, 28, 125, 392, 228, 20, 944, 704, 35, 13, 28, 392,
    ]

    hashtable_list_easy = [
        383, 290, 242, 1, 219, 205, 202
    ]

   
    medium_list = [
        3, 209, 122, 55, 150, 12, 134, 238, 80, 167, 189, 151
    ]

    
 
   

    random_medium_1 = random.choice(medium_list)
    random_medium_2 = random.choice(medium_list)

    random_array_list_easy = random.choice(array_list_easy)
    random_hashtable_list_easy = random.choice(hashtable_list_easy)
    
    random_linked_list_easy = random.choice(easy_linked_list)
    random_bin_tree_easy = random.choice(easy_bin_tree)

    print(f"Random array easy question: {random_array_list_easy}")
    print(f"Random hashtable list easy: {random_hashtable_list_easy}")
   

    print(f"Random medium question 1: {random_medium_1}")
    print(f"Random medium question 2: {random_medium_2}")
    
    print(f"Random linked list easy: {random_linked_list_easy}")
    print(f"Random bin tree easy: {random_bin_tree_easy}")

if __name__ == "__main__":
    choose_random_150()
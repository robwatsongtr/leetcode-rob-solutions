import random

def choose_random_150():
    easy_list = [
        88, 27, 26, 169, 121, 13, 58, 14, 28, 125, 392, 383,
        290, 242, 1, 219, 202, 205, 228, 20, 141, 21, 104,
        100, 226, 101, 112, 222, 637, 530, 108, 35
    ]

    medium_list = [
        80
    ]
 
    random_easy = random.choice(easy_list)
    random_medium = random.choice(medium_list)

    print(f"Random easy question: {random_easy}")
    print(f"Random medium question: {random_medium}")


if __name__ == "__main__":
    choose_random_150()
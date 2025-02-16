
class Solution:
    def get_alpha_table(self):
        alpha_table = {}
        counter = 1

        for i in range(97, 123):
            alpha_table[chr(i)] = counter
            counter += 1

        return alpha_table

    def minTimeToType(self, word: str) -> int:
        pass




if __name__ == "__main__":
    sol = Solution()

    print(sol.get_alpha_table())
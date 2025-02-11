class Solution:
    def fib(self, n, memo=None):
        if memo is None:
            memo = {}

        if n <= 1:
            return n

        if n in memo:
            return memo[n]

        memo[n] = self.fib(n - 1, memo) + self.fib(n - 2, memo)

        return memo[n]

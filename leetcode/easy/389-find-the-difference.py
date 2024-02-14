class Solution:
    def findTheDifference(self, s: str, t: str) -> str:
        for letter in s:
            if letter in t:
                t.replace(letter, "", 1)
        return t

# Results:
# Runtime: 40 ms (66%)
# Memory: 16.28 mb (76%)

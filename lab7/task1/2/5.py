from itertools import permutations

def print_permutations(s, k):
    for p in sorted(permutations(s, k)):
        print("".join(p))
s, k = input().split()
k = int(k)
print_permutations(s, k)
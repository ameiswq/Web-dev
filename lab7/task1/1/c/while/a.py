import math
a = int(input())
i = 1
while i <= a:
    if int(math.sqrt(i)) * int(math.sqrt(i)) == i:
        print(i, end=" ")
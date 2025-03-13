s = input().split()
for i in range(0, len(s)):
    if int(s[i]) % 2 == 0:
        print(s[i], end = ' ')
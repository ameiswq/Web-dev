a = int(input())
h=0
for i in range(1, a+1):
    if a % i == 0:
        h+=1
print(h)
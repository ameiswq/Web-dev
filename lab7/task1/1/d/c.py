a = [int(s) for s in input().split()]
k = 0
for i in range(len(a)):
	if a[i] > 0:
		k += 1
print(k)
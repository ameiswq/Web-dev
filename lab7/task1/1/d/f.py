numbers = list(map(int, input().split()))
count = 0
for i in range(1, len(numbers) - 1):
    if numbers[i] > numbers[i - 1] and numbers[i] > numbers[i + 1]:
        count += 1
print(count)

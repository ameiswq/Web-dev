numbers = list(map(int, input().split()))
result = []
for i in range(1, len(numbers)):
    if numbers[i] > numbers[i - 1]:
        result.append(numbers[i])
print(*result)
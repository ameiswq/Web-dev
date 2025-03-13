def maxi(x, y):
    if x >= y:
        return y
    return x
a, b, c, d = input().split()
print(maxi(maxi(a, b), maxi(c, d)))
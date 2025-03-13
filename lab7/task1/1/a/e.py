def vasya_position(v, t):
    mkad_length = 109
    position = (v * t) % mkad_length
    return position

# Ввод данных
v = int(input())
t = int(input())

# Вывод результата
print(vasya_position(v, t))

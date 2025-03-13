def split_and_join(line: str) -> str:
    return "-".join(line.split())

line = input()
print(split_and_join(line))
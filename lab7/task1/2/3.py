def count_substring(string: str, sub_string: str) -> int:
    count = 0
    for i in range(len(string) - len(sub_string) + 1):
        if string[i:i+len(sub_string)] == sub_string:
            count += 1
    return count

string = input()
sub_string = input()
print(count_substring(string, sub_string))
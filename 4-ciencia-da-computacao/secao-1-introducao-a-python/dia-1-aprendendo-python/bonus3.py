def get_somatory(n: int) -> int:
    sum = 0
    for number in range(1, n + 1):
        sum += number
    return sum


def get_somatory2(n: int) -> int:
    return sum(range(1, n + 1))


print(get_somatory(5))
print(get_somatory(10))
print(get_somatory2(5))
print(get_somatory2(10))

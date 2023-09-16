def get_lowest_number(numbers) -> int:
    lowest_number = numbers[0]
    for number in numbers:
        if number < lowest_number:
            lowest_number = number
    return lowest_number


def get_lowest_number2(numbers) -> int:
    return min(numbers)


list1 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]
list2 = [5, 9, 23, 19, 70, 8, 100, 33, 35, 27]
list3 = [5, 9, 23, 19, 70, 8, 100, 33, 35, 27, 1]

print(get_lowest_number(list1))
print(get_lowest_number(list2))
print(get_lowest_number(list3))

print(get_lowest_number2(list1))
print(get_lowest_number2(list2))
print(get_lowest_number2(list3))

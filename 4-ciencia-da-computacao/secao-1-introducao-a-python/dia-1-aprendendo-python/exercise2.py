def getAverage(list):
    sum = 0
    for num in list:
        sum += num
    return sum / len(list)


list1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
list2 = [7, 8, 7, 8, 7, 8]

print(getAverage(list1))
print(getAverage(list2))

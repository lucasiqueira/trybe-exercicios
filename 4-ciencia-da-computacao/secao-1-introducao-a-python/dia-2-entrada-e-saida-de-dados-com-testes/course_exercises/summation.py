import sys


def summation(input):
    numbers = input.split(" ")
    sum = 0
    for number in numbers:
        if (number.isdigit()):
            sum += int(number)
        else:
            print("Foi informado um valor não numérico", file=sys.stderr)
            return None
    return sum


input_series = input("Digite uma sequência de números separados por espaços: ")

result = summation(input_series)

if result is not None:
    print(result)

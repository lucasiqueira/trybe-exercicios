def even_numbers_counter(n):
    counter = 0
    for number in range(1, n + 1):
        if number % 2 == 0:
            counter += 1
    return counter

def recursive_even_counter(n):
    if n == 1:
        return 0
    elif n % 2 == 0:
        return 1 + recursive_even_counter(n - 1)
    else:
        return recursive_even_counter(n - 1)


print(recursive_even_counter(300))

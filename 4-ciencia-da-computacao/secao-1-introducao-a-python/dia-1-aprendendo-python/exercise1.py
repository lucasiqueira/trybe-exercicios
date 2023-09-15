def returnHigher(n1, n2) -> int:
    if (n1 > n2):
        return n1
    elif (n1 < n2):
        return n2
    else:
        return 'Números iguais'


print(returnHigher(1, 2))
print(returnHigher(2, 2))
print(returnHigher(3, 2))

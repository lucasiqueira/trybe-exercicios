def formSquare(n: int):
    if (n <= 1 or type(n) != int):
        print('Valor inválido')
        return
    for number in range(n):
        print(n * '*')


formSquare(4)
formSquare(8)
formSquare(1)
formSquare(-1)
formSquare(2.5)

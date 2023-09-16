def verifyTriangle(l1, l2, l3):
    if (l1 + l2 > l3 and l1 + l3 > l2 and l2 + l3 > l1):
        if (l1 == l2 and l1 == l3):
            return "Triângulo equilátero"
        if (l1 == l2 or l2 == l3 or l1 == l3):
            return "Triângulo isósceles"
        else:
            return "Triângulo escaleno"
    else:
        return "Não é triângulo"


print(verifyTriangle(1, 2, 3))
print(verifyTriangle(4, 5, 6))
print(verifyTriangle(10, 23, 23))
print(verifyTriangle(2, 2, 3))
print(verifyTriangle(2, 2, 2))

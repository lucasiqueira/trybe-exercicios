# Realize esse exercício utilizando TDD: implemente os testes primeiro
# Escreva um programa que retorne uma lista com os valores numéricos de
# 1 a N, mas com as seguintes exceções:
# Números divisíveis por 3 deve aparecer como “Fizz” ao invés do número;
# Números divisíveis por 5 devem aparecer como “Buzz” ao invés do número;
# Números divisíveis por 3 e 5 devem aparecer como “FizzBuzz”
# ao invés do número.
# Exemplo: 3 -> [1, 2, "Fizz"].

def fizz_buzz(n: int):
    fizz_buzz_list = list()
    for number in range(1, n + 1):
        if number % 3 == 0 and number % 5 == 0:
            fizz_buzz_list.append("FizzBuzz")
        elif number % 3 == 0:
            fizz_buzz_list.append("Fizz")
        elif number % 5 == 0:
            fizz_buzz_list.append("Buzz")
        else:
            fizz_buzz_list.append(number)

    return fizz_buzz_list

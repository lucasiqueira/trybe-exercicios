from exercise5 import fizz_buzz


def test_fizz_buzz_with_15_as_parameter():
    'Verifica se a função fizz_buzz retorna o valor esperado para n = 15'
    mock_expected_result = [
        1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz",
        "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"
        ]
    assert fizz_buzz(15) == mock_expected_result

import collections


class Estatistica:
    def __init__(self, numbers) -> None:
        self.numbers = sorted(numbers)

    def media(self):
        counter = 0
        for number in self.numbers:
            counter += number
        return counter / len(self.numbers)

    def mediana(self):
        if len(self.numbers) % 2 == 0:
            return (
                self.numbers[len(self.numbers) // 2]
                + self.numbers[len(self.numbers) // 2 - 1]
                ) / 2
        else:
            return self.numbers[len(self.numbers) // 2]

    def moda(self):
        result = collections.Counter(self.numbers).most_common(1)[0][0]

        return result

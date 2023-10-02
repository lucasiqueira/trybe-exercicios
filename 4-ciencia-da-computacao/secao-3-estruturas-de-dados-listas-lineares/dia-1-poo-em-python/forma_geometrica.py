from abc import ABC, abstractmethod


class FormaGeometrica(ABC):
    @abstractmethod
    def area(self):
        pass

    @abstractmethod
    def perimetro(self):
        pass


class Quadrado(FormaGeometrica):
    def __init__(self, lado) -> None:
        self.lado = lado

    def area(self):
        return self.lado ** 2

    def perimetro(self):
        return self.lado * 4


class Retangulo(FormaGeometrica):
    def __init__(self, lado_a, lado_b) -> None:
        self.lado_a = lado_a
        self.lado_b = lado_b

    def area(self):
        return self.lado_a * self.lado_b

    def perimetro(self):
        return (self.lado_a + self.lado_b) * 2


class Triangulo(FormaGeometrica):
    def __init__(self, lado_a, lado_b, lado_c) -> None:
        self.lado_a = lado_a
        self.lado_b = lado_b
        self.lado_c = lado_c

    def area(self):
        return (self.lado_a * self.lado_b) / 2

    def perimetro(self):
        return self.lado_a + self.lado_b + self.lado_c


class Circulo(FormaGeometrica):
    def __init__(self, raio) -> None:
        self.raio = raio

    def area(self):
        return 3.14 * self.raio ** 2

    def perimetro(self):
        return 2 * 3.14 * self.raio

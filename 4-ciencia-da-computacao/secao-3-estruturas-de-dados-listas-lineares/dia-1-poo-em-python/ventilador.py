class Ventilador:
    def __init__(self, cor, potencia, tensao, preco) -> None:
        self.__cor = cor
        self.__potencia = potencia
        self.__tensao = tensao
        self.__preco = preco
        self.__velocidade = 0
        self.__velocidade_maxima = 3
        self.__ligado = False
        self.__rotacao = 0

    def __str__(self) -> str:
        return f'''
            Cor: {self.__cor}\n
            Potência: {self.__potencia} W\n
            Tensão: {self.__tensao} V\n
            Preço: R$ {self.__preco}\n
            Velocidade: {self.__velocidade}\n
            Velocidade Máxima: {self.__velocidade_maxima}\n
            Ligado: {self.__ligado}\n
            Rotação: {self.__rotacao}
        '''

    def ligar(self, velocidade):
        self.__ligado = True
        self.__velocidade = velocidade
        self.__rotacao = self.__velocidade * 1000

    def desligar(self):
        self.__ligado = False
        self.__velocidade = 0
        self.__rotacao = 0

    def alterar_velocidade(self, velocidade):
        if velocidade != 0 and velocidade <= self.__velocidade_maxima:
            self.__velocidade = velocidade
            self.__rotacao = self.__velocidade * 1000

    def get_cor(self):
        return self.__cor

    @property
    def potencia(self):
        return self.__potencia

    @property
    def tensao(self):
        return self.__tensao

    @property
    def preco(self):
        return self.__preco

    @property
    def velocidade(self):
        return self.__velocidade

    @property
    def ligado(self):
        return self.__ligado

    @property
    def rotacao(self):
        return self.__rotacao

    @potencia.setter
    def potencia(self, potencia):
        self.__potencia = potencia


class Pessoa:
    def __init__(self, nome, idade, cpf, rg) -> None:
        self.__nome = nome
        self.__idade = idade
        self.__cpf = cpf
        self.__rg = rg
        self.__ventilador = None

    def __str__(self) -> str:
        return f'''
            Nome: {self.nome}\n
            Ele comprou o ventilador: {self.__ventilador}
        '''

    @property
    def nome(self):
        return self.__nome

    @property
    def idade(self):
        return self.__idade

    @property
    def cpf(self):
        return self.__cpf

    @property
    def rg(self):
        return self.__rg

    @nome.setter
    def nome(self, nome):
        self.__nome = nome

    @idade.setter
    def idade(self, idade):
        self.__idade = idade

    @cpf.setter
    def cpf(self, cpf):
        self.__cpf = cpf

    @rg.setter
    def rg(self, rg):
        self.__rg = rg

    def comprar_ventilador(self, ventilador):
        self.__ventilador = ventilador


pessoa = Pessoa('João', 20, '123.456.789-00', '12.345.678-9')
ventilador = Ventilador('Preto', 100, 220, 500.00)
pessoa.comprar_ventilador(ventilador)

print(pessoa)

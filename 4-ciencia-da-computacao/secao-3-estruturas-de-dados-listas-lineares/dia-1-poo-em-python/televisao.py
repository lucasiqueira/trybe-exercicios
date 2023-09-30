class TV:
    def __init__(self, tamanho) -> None:
        self.volume: int = 50
        self.canal: int = 1
        self.tamanho = tamanho
        self.ligada = False

    def aumentar_volume(self):
        if self.volume < 99:
            self.volume += 1
            print(f'Volume aumentado! Volume atual {self.volume}')
        else:
            print(f'Volume máximo: {self.volume}')

    def diminuir_volume(self):
        if self.volume > 0:
            self.volume -= 1
            print(f'Volume reduzido! Volume atual {self.volume}')
        else:
            print(f'Volume mínimo: {self.volume}')

    def modificar_canal(self, canal):
        if 1 <= canal <= 99:
            self.canal = canal
            print(f'Canal alterado para {self.canal}')
        else:
            raise ValueError('Canal fora da área de cobertura')

    def ligar_desligar(self):
        self.ligada = not self.ligada
        if (self.ligada):
            print('TV ligada')
        else:
            print('TV desligada')

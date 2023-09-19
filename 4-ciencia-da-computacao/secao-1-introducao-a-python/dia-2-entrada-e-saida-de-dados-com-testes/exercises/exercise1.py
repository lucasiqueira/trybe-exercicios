name = input("Digite um nome: ")

for letter in name:
    print(name)
    *initial, final = name
    name = "".join(initial)

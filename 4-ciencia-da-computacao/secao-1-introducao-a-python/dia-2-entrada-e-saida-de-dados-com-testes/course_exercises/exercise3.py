list = list()
approved = []
repproved = []

with open("arquivo2.txt", mode="r") as file:
    for line in file:
        list.append(line.split(" "))

for person in list:
    if (int(person[1].replace("/n", "")) >= 6):
        approved.append(person[0])
    else:
        repproved.append(person[0])

with open("arquivo2-recuperacao.txt", mode="w") as recuperacao:
    for person in repproved:
        print(person, file=recuperacao)

names = ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]


def find_biggest_name(list):
    biggest_name = list[0]
    for name in names:
        if (len(name) > len(biggest_name)):
            biggest_name = name
    return biggest_name


names.append("Epaminondas")

print(find_biggest_name(names))

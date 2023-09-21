def biggest_number_aux(list, position):
    if position == 1:
        return list[0]
    else:
        maior_do_resto_da_lista = biggest_number_aux(list, position - 1)
        if maior_do_resto_da_lista > list[position - 1]:
            return maior_do_resto_da_lista
        else:
            return list[position - 1]


def recursive_biggest_number(list):
    return biggest_number_aux(list, len(list))

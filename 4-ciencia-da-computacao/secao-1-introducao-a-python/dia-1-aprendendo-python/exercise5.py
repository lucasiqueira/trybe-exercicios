import math


def get_paint_cans(area):
    '''retorna a quantidade de latas de tintas a partir da área'''
    liters_needded = area / 3
    cans_needed = math.ceil(liters_needded / 18)
    total_value = cans_needed * 80
    return (cans_needed, total_value)


print(get_paint_cans(100))

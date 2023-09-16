def calculate_amount(liters, fuel) -> float:
    alcohool_liter_price = 1.9
    gas_liter_price = 2.5
    if (fuel == 'A' and liters <= 20):
        return liters * alcohool_liter_price * (1 - 0.03)
    elif (fuel == 'A'):
        return liters * alcohool_liter_price * (1 - 0.05)
    elif (fuel == 'G' and liters <= 20):
        return liters * gas_liter_price * (1 - 0.04)
    elif (fuel == 'G'):
        return liters * gas_liter_price * (1 - 0.06)
    else:
        return 'There is no such fuel type'


print(calculate_amount(25, 'G'))
print(calculate_amount(25, 'A'))

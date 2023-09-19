import json
import random

pokemon_names = list()

with open("../pokemon/pokemons.json") as file:
    content = file.read()
    results = json.loads(content)

pokemon_names = [pokemon["name"] for pokemon in results["results"]]

random_pokemon = random.choice(pokemon_names)

counter = 0
name = random_pokemon
shown_name = ""

while counter < len(random_pokemon):
    initial, *final = name
    user_pokemon = input(f"Quem é esse pokémon? ({shown_name}) ")
    if (random_pokemon == user_pokemon):
        print("Esse é o novo Mestre Pokémon!")
        break
    shown_name += initial
    counter += 1
    name = "".join(final)

if counter == len(random_pokemon):
    print(f"Esse é o {random_pokemon}")

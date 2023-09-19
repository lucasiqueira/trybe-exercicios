import random
import json

with open("words.json") as file:
    content = file.read()
    words = json.loads(content)

# words = ["joaninha", "choro", "papel", "folha", "chinelo", "olho"]
counter = 0

random_word = random.choice(words)
scrambled_word = "".join(random.sample(random_word, len(random_word)))
text = f"Tente adivinhar a palavra ({scrambled_word}): "

while counter < 3:
    asserted_word = input(text)

    if asserted_word == random_word:
        print(f"Você acertou a palavra {random_word}")
        break
    else:
        counter += 1

if counter == 3:
    print(f"Acabaram as tentativas a palavra era '{random_word}'")

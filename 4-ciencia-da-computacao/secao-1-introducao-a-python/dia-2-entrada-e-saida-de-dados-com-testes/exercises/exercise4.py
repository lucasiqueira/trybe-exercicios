import json
import csv

categories = dict()
categoriesPercent = dict()
categories_quantity = 0

with open("books.json") as file:
    content = file.read()
    books = json.loads(content)

for book in books:
    categoriesListPerBook = book["categories"]
    for category in categoriesListPerBook:
        categories_quantity += 1
        if category not in categories:
            categories[category] = 0
        categories[category] += 1

for category in categories:
    categoriesPercent[category] = categories[category] / categories_quantity

# print(categoriesPercent)
# print(categories_quantity)

with open("books_category.csv", mode="w", encoding="utf-8") as csv_file:
    writer = csv.writer(csv_file)

    headers = ["Categoria", "Porcentagem"]
    writer.writerow(headers)

    for category in categoriesPercent:
        row = [category, categoriesPercent[category]]
        writer.writerow(row)

import sys

if __name__ == "__main__":
    print(sys.argv)
    for argument in sys.argv:
        print("Received ->", argument)

    user_input = input("Digite uma mensagem: ")
    print("O valor recebido foi: ", user_input)

import random

# Lists
list = ["Камінь", "Ножиці", "Папір"]
lose_win = ["переміг", "програв"]

def prostaGra():
    bot_choice = random.choice(list)
    player_choice = str(input("\n Обери: Камінь, Ножиці, Папір: "))

    # Checking player_choice
    while player_choice not in list:
        print("\n Спробуй ще раз.")
        player_choice = str(input("\n Обери: Камінь, Ножиці, Папір: "))

    if player_choice in list[0]:
        if bot_choice in list[1]:
            print("Ти переміг - бот обрав ножиці.")
        elif bot_choice in list[2]:
            print("Ти програв - бот обрав папір.")
        else:
            print("Нічия.")

    elif player_choice in list[1]:
        if bot_choice in list[2]:
            print("Ти переміг - бот обрав папір.")
        elif bot_choice in list[0]:
            print("Ти програв - бот обрав камінь.")
        else: 
            print("Нічия.")

    elif player_choice in list[2]:
        if bot_choice in list[0]:
            print("Ти переміг - бот обрав камінь.")
        elif bot_choice in list[1]:
            print("Ти програв - бот обрав ножиці.")
        else: 
            print("Нічия.")
    else:
        prostaGra()

while True: prostaGra()

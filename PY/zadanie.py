#1 arg1 + arg2
def witajFunc(arg1, arg2): 
    print(f"{str(arg1)}, {str(arg2)}")
witajFunc("Witaj", "Swiecie")

#2 num1 + num2
def dwieLiczby(num1, num2):
    sum = num1 + num2
    print(f"num1 + num2 to: {sum}")
dwieLiczby(10, 14)

#3 Biore element z listy
def ulubioneKolory():
    args = ["Czarny", "Biały", "Żółty", "Różowy", "Fioletowy", "Zielony"]
    print(f"Ulubiony kolor: {args[5]}")
ulubioneKolory()

#4 perimeter * na obwod
def obwodKwadratu():
    obwod = 4
    perimeter = 4 * obwod
    print(f"Jednostek: {perimeter}")
obwodKwadratu()

#5 for loop od 1 do 5
def print_numbers():
    for i in range(1, 6):
        print(i)
print_numbers()

#6 str1 + str2
def returnTwoString(str1, str2):
    print(f"{str1}, {str2}")
returnTwoString("Dzien", "Dobry")

#7 quadratic number, num*num
def quadraticNumber(num):
    result = num * num
    print(f"Result for {num} is: {result}")
quadraticNumber(7)

#8 obliczenie prostokatu
def obliczProstokat(dl1, dl2):
    pole = dl1 * dl2
    print(f"Pole prostokatu na podstawie {dl1} ta {dl2} to: {pole}")
obliczProstokat(10, 5)

#9 sprawdza czy liczba parzysta albo nie
def parzystaLiczba(number):
    return number % 2 == 0

num = int(input("Podaj liczbe: "))
if parzystaLiczba(num):
    print(f"{num} jest parzysta")
else:
    print(f"{num} jest nieparzysty")

#10 ile liter A w teskie z metoda count
def liczbaLiter():
    text = "Napisz program, ktory zliczy, ile razy w podanym przez uzytkownika tekscie wystepuje litera a"
    num = text.count("a")
    print(f"Liter A w tym tekscie: {num}")
liczbaLiter()
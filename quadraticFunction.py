import math

number_a = int(input("Input A: "))
number_b = int(input("Input B: "))
number_c = int(input("Input  C: "))

if number_a == 0:
    print("А cannot be zero")
if number_b == 0 or number_c == 0:
    print("There can be no such equation")

def summarizeElements(a, b, c):
    global X1
    global X2
    global delta
    
    #* Delta Calculation
    delta = abs((b**2) - (-4 * a * c))
    print(delta)
    
    #* P and Q calculation
    P = (-b) / (2 * a)
    Q = (-delta) / (4 * a) 
    print(P)
    print(Q)
    
    #* X1 and X2 or root1 and root2
    X1 = (-b - math.sqrt(delta)) / (2 * a)
    X2 = (-b + math.sqrt(delta)) / (2 * a)
    print("X1 is: ", X1)
    print("X2 is: ", X2)
summarizeElements(number_a, number_b, number_c)
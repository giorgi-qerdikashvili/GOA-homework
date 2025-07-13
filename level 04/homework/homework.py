#input არის როდესაც იმფორმაციას რაღაც იღებს output არის როდესაც გამოიცემა რაღაც შედეგი ინპუტის მერე

name = input("whats your name?: ")
print("data type is: ", type(name))

str1 = "12"    # არის სტრინგი
int1 = 43      # არის ინტეჯერი
float = 1.5   # არის ფლოატი
bool = True   # არის ბულიანი
bool1 = False # არის ბულიანი

version = 15.5
numer = 43
str2 = "string"
print(type(version))
print(type(numer))
print(type(str2))

a1 = input("string 1 is: ")
a2 = input("string 2 is: ")
print("string concatination is: " + a1 + a2)

num = int(input("input number 1: "))
num1 = int(input("input number 2: "))
num2 = int(input("input number 3: "))
num3 = int(input("input number 4: "))
num4 = int(input("input number 5: "))
print((num + num1 + num2 + num3 + num4)/5)

customer_name = input("what your name? ")
customer_surname = input("what your surname? ")
age = input("whats your age? ")
height = input("whats your height in cm? ")
weight = input("whats your weight in kg? ")

print("your full name is " + customer_name + " " + customer_surname + " your age is " + age + " your height is " + height + "cm your wight is " + weight +"kgs")
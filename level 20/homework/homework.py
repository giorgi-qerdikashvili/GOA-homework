print(1 + 1)
print(13 + 44)
print(0 + 0)

print(31 - 33)
print(22 - 1)
print(28 - 3)

print(4 / 3)
print(13 / 1)
print(9 / 3)

print(18 * 8)
print(0 * 2)
print(9 * 9)

print(3 % 3)
print(8 % 4)
print(99 % 6)

print(66 ** 3)
print(9487 ** 6)
print(1 * 0)

print(13 // 55)
print(99 // 4)
print(44 // 3)

# ვისწავლეთ ხარისხი (x ** y) რომელიც რიცხვს ამრავლებს თავისთავსზე y ჯერ, ვისწავლეთ // რომელიც გვეუბნება თუ რამდენჯერ მოთავსდება იგრეკი იქსში და ვისწავლეთ % რომელიც გამოიტანს ნაშთს, ციფრს რომელიც იგრეკზე არ იყოფა 

print(1 ** 1)
print(44 ** 0)
print(21 * 2)
print(9 * 9)
print(1243 * 12)

print(33 // 3)
print(8 // 1)
print(66 // 3)
print(38 // 77)
print(74 // 8)

print(61 % 3)
print(223 % 6)
print(886 % 4)
print(675 % 47)
print(77 % 4)

#      15 / 3 = 5
#      20 / 4 = 5
#      100 / 20 = 5 

#      15 // 10 = 1
#      10 // 7 = 1
#      40 // 12 = 3

#      4 * 3 = 12
#      40 * 3 = 120
#      120 * 3 = 380

#      4 ** 3 = 64
#      10 ** 3 = 1000
#      2 ** 6 = 64
#      3 ** 4 = 81

#      10 % 7 = 3
#      3 % 2 = 1
#      50 % 25 = 0 
#      14 % 11 = 3
#      110 % 50 = 10

# საია წარმოადგენ ცვლადს რომელშიც შეგვიძლია შევინახოთ მრავალი სხვადასხვა ტიპის მონაცემი და ისინი გვადგება მსგავსი მონაცემების დასალაგებლად და ერთად შესანახად, ასევე შეგვიძლია რომ სიიდან გამოვიძახოთ კონკრეტული მონაცემები და გამოვიყენოთ ეს კოდში

names = ["gio", "nika", "lizi", "34"]

numbers = [ 4, 3, 122, 357]

floats= [11.2 ,445.3, 1.0, 14.3]

boool = [True,False,True]

all1 = ["145" , 12 ,55.3, False ,1555]

num1 = input("give num1")
num2 = input("give num2")
print(num1 + num2)
print(num1 - num2)
print(num1 * num2)
print(num1 / num2)
print(num1 ** num2)
print(num1 // num2)
print(num1 % num2)

int1 = int(input("give int1"))
if int1 > 30 and int1 < 100:
    print("between 30 and 100")
elif int1 > 100 and int1 < 200:
    print("between 100 and 200")
else:
    print("other number")

var1 = 44
var2 = "33"
var3 = "a"
var4 = True
var5 = 22.5

print(type(var1))
print(type(var2))
print(type(var3))
print(type(var4))
print(type(var5))

a = 50
while a < 100:
    print(a)
    a = a + 5

for i in range(40, 90, 3):
    print(i)

for i in range(15):
    print("giorgi qerdikashvili")
i = 1
while i != 6:
    print("giorgi qerdikashvili")
    i = i + 1

s = "giorgi"
g = "qerdikashvili"
customer = input("whats your name? ")
if customer == s:
    surname = input("whats your surname? ")
    if surname == g:
        print("same name and ")
    else:
        print("same name but different surname")
else:
    print("aqedan mishordi")

password = "password"
guess = input("whats the password? ")
while True:
    if guess == password:
        print("you guessed it")
        break
    else:
        print("wrong guess try again")

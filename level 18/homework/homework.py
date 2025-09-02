num1 = int(input("give number 1"))
num2 = int(input("give number 2"))
if num1 > num2 :
    print("first is more than second")
elif num1 < num2 :
    print("first is less than second")
else :
    print("first is equal to second")

name = input("whats your name ")
if name == "giorgi":
    print("sexniebi vart")
else :
    print("sxvadasxva saxelebi gvaqvs")

num1 = int(input("give num1"))
num2 = int(input("give num2"))
if num1 > 0 and num2 > 0:
    print("ორივე რიცხვი მეტია ნულზე")
if num1 < 0 and num2 < 0:
    print("ორივე რიცხვი ნაკლებია ნულზე")
else :
    print("ეს რა ჯანდაბაა")

for i in range(50, 100, 2):
    print(i)
    i = i + 1

p = 20
while p != 40:
    print(p)
    p = p + 1
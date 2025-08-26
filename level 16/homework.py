num = float(input("give number "))
if num > 0:
    print("number is positive")
elif num < 0:
    print("number is negative")
else:
    print("number is zero")

age = float(input("give your age "))
if age < 0:
    print("არასწორი ინფო")
elif age < 13 and age > 0:
    print("ბავშვი ხარ")
elif age < 20:
    print("მოზარდი/თინეიჯერი ხარ")
elif age < 65:
    print("ზრდასრული ხართ")
elif age < 120 :
    print("ხანში შესული ხართ")
elif age > 120:
    print("გურუ ან ჯადოქარი")
password = "egg"

guess =None
while True:
    guess = input("guess the password")
    tries = 0
    if guess == "nah strong password":
        print("you attempted "+ str(tries) +" times" )
        break
    elif guess != password:
        print("wrong password try again or give up by typing" "nah strong password")
        tries = tries + 1
    elif guess == password:
        print("you guessed correctly and it took only "+ str(tries) +" tries")
        break
num1 = float(input("give first number"))
num2 = float(input("give second number"))
num3 = float(input("give thrid number"))

if num1 > num2 and num1 > num3 :
    print("num1 is the highest")
elif num2 > num1 and num2 > num3 :
    print("num2 is the highest")
elif num3 > num2 and num3 > num1 :
    print("num3 is the highest")
else :
    print("they are all equal")
day = int(input("give a number equal to one of the days of the week"))
if day < 1 or day > 7 :
    print("doesnt correspond to weekand days")
elif day == 1:
    print("ორშაბათი")
elif day == 2:
    print("სამშბათი")
elif day == 3:
    print("ოთხშაბათი")
elif day == 4:
    print("ხუთსაბათი")
elif day == 5:
    print("პარასკევი")
elif day == 6:
    print("შაბათი")
elif day == 7:
    print("კვირა")

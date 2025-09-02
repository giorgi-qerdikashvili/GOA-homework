num1 = int(input("please give number 1"))
num2 = int(input("please give number 2"))
num3 = int(input("please give number 3"))
if num1 == num2:
    print("num1 = num 2")
elif num1 == num3:
    print("num1 = num3")
elif num2 == num3:
    print("num2 = num3")
elif num1 == num2 and num2 == num3:
    print("they are all equal")


num = int(input("input number between 0 and 12"))
if num > 12 or num < 1:
    print("invalid number")
else:
    if num == 12 or num == 1 or num == 2:
        print("ზამთარი")
    elif num == 3 or num == 4 or num == 5:
        print("გაზაფხული")
    elif num == 6 or num ==7 or num ==8:
        print("ზაფხული")
    else:
        print("შემოდგომა")

name = input("give name")
if name == "admin":
    password = input("give admin password")
    if password == "adminpassword123":
        print("hello admin")
    else:
        print("access denied")
else:
    print("hello user")

# boolean და binary არის ორობითი სისტემაზე დამოკიდებული ერთეულები, ტრუე და ფალსი ასევე 1 და ნული გამოიყენება ტექნოლოგიის ყველა ლოგიკური ოპერაციის შესრულების დროს
#30 > 132 = False
# 10 == 3 = False
# 40 >= 0 = True
# 38 < 2 = False
# 0 <= 0 = True
# print(True and True) # True
# print(True and False) # False
# print(False and True) # False
# print(False and False) # False

# print(True or True) # True
# print(True or False) # True
# print(False or True) # True
# print(False or False) # False
print(3 == 3 and 12 > 1)
print(4<6 and 3>44)
print(10 >= 33 and 4 <= 14)
print(80 ==2 and 3 != 3)

print(0 == 0 or 12 > 9)
print(36> 9 or 80 < 5)
print(3 != 3 or 90 > 9)
print(1 == 5 or 7 != 7)

a = int(input("იყოფა ეს რიცხვი 5 ზე? :"))
if a % 5 == 0 :{
    print(True)
}
else :
    print(False)
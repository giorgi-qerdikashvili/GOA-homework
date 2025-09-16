#index is used for calling values form a list, it starts counting up from zero
n = [4,6,1,5,9,8,4]
print(n[1] + n[0])
print(n[1] - n[0])
print(n[1] + n[5])
print(n[0] * n[3])
print(n[0])
print(n[0] - n[2] - n[2] + n[3])
print(n[0] * n[3] + n[0] - n[2] - n[2] + n[3])

name = ["nina","luka","zaza","tako","sandro","kako","nino","gio","lizi","mari"]
print(name[4])
print(name[8])
print(name[2])
print(name[6])

num = ["1", "3", "11", "24", "446", "1213", "4555"]
p = 0
while p != 7:
    print(num[p])
    p = p + 1
for num in num:
    print(num)

var = [12 , True, 41, 1441, 4445, 5656, 33]
var[2] = "vashli"
var[5] = "msxali"
var[3] = "atami"
for var in var:
    print(var)

print(True and False or False and True or False and False or True)
#          False              False             False
#         False or False or False or True == True

animal = ["dog", "cat", "zebra", "lion", "dinosaur"]
if animal[3] == "lion":
    print("there is a lion on index 3")
else:
    print("there isnt a lion on index 3")

basket = ["ვაშლი", "ბანანი", "საზამთრო", "ატამი", "ყურძენი"]
print(basket[0])
print(basket[2])
basket[1] = "საზამთრო"
for basket in basket:
    print(basket)

letters = ["ა", "ბ", "გ", "ო", "ლ", "ა", "მ", "ა", "ტ", "ე"]
print(letters[2])
print(letters[4] + letters[5])
print(letters[9])
print(letters[6] +letters[0] + letters[6]+ letters[0])
print(letters[2] + letters[3] +letters[4]+letters[5])
print(letters[2] + letters[3] + letters[2] + letters[0])

letters = ["ა", "ბ", "გ", "ო", "ლ", "ა", "მ", "ა", "ტ", "ე"]
var1 = letters[3]
if var1 =="ლ":
    print("სწორია! ასო ლ ა")
else:
    print("არასწორია, სცადე თავიდან")
var2 = letters[9]
if var2 == "ე":
    print("საიდუმლო სიტყვა იწყება სწორად")
else:
    print("საიდუმლო სიტყვა არასწორია")
var3 = letters[2] + letters[9] + letters[4] + letters[0]
if var3 == "გელა":
    print("გელა–ს ტოლია, დაბეჭდეთ გაარტყი სახელი!")
else:
    print("შტერი ხარ!დ")

lists = ["1321", True, 44,'ss']
guess = input("give me a number form 1 to 4 or else")
if guess == "1":
    print(lists[0])
elif guess == "2":
    print(lists[1])
elif guess == "3":
    print(lists[2])
elif guess == "4":
    print(lists[3])
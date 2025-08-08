print(False and False)
print(True or False)
print(False or False)
print(True or True or False)
print(False and True and False or True)
print(4 > 5)
print(13 == 2)
print(13 >= 13 and False)
print(1 == 1)
print(1 != 3)

# sequencing არის როდესაც კოდი მიდის მიმდევრობით iteration არის როდესაც კოდის ნაჭილი მეორდება selection არის როდესაც ხდება არჩევანი
# sequencing:
# name = 3 
#print(name)
# for loop არის იტერაციის მაგალითი რომელიც პირობის თანახმად მეორდება ის გვეხმარება კოდის შემცირებაში
# range ფუნქციას გადაეცემა 3 ციფრი პირველი არის ათვლის დამწყები ციპრი მეორე არის სადამდე ითვლება და მესამეა რა ინტერვალით ითვლება, იგი იყენება for loop ის კონკრეტული რაოდენობით გამეორებაში
for i in range(10):{
    print("BMW")
}
for i in range(100):{
    print("qerdeikashvili")
}
for i in range(46):{
    print("იასამნისფერ")
}
for i in range(32):{
    print("g")
}
name = input("give name1 ") 
name1 = input("give name2 ") 
name2 = input("give name3 ")
num = input("give number ")
print(name+name1+name2+num)

var1 = 33
var2 = "3"
var3 = 1.5
var4 = True
print(type(var1))
print(type(var2))
print(type(var3))
print(type(var4))

num1 = int(input("give num1 "))
num2 = int(input("give num2 "))
num3 = int(input("give num3 "))
num4 = int(input("give num4 "))
print( num1 + num2 + num3 + num4)
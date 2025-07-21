num1 = input("number 1 is: ")
num2 = input("number 2 is: ")
print("is num1>num2 ", num1>num2)
print("is num1<num2 ", num1<num2)
print("is num1=num2 ", num1==num2)

var ="3"
var1 = "10"
var2 = "34"
var3 = 12 
var4 = 55
print((int(var) * int(var1) * int(var2) * var3 * var4)/ 5)

num1 = input("first sring: ")
num2 = input("second sring: ")
num3 = input("third sring: ")
num4 = int(input("give an integer: "))
a = num1+num2+num3
print(a * num4)

#ჩვენ ვისწავლეთ and or ოპერატორები რომლებიც მუშაობენ ბულიან სისტემაზე ანდში უპირატესობა ეძლევა false's რადგან თუ ერთი არის მაინც აუტპუტი იქნება false და ორ ოპერატორზე კი არის პირიქით

# True and True -- True     |   True or True -- True         
# True and False -- False    |   True or False -- True
# False and True -- False   |   False or True -- True
# False and False -- False   |   False or False -- False

print(True and False)
print(False or True)
print(False and False)

var1 = 12
var2 = "a"
var3 = 1.5
var4 = True
print(type(var1))
print(type(var2))
print(type(var3))
print(type(var4))

print(type(int(input("give me an integer: "))))
print(type((input("give me a string: " ))))
print(type(bool(input("give me an float: "))))
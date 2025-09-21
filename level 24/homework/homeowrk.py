nums = [12, 33 ,41, 2, 45,64,32]
print(nums[-7]*nums[6])
print(nums[-3])
print(nums[-5])

fruits =["apple", "banana", "cherry", "grape", "kiwi", "orange"]
print(fruits[2], fruits[3])
print(fruits[-3], fruits[-4])

nums = [3,4,5,6,7,1,2,9,8,11]
guess = int(input("please give a number between 0 and 10, 0 included "))
while True:
    if guess >= 10 or guess <= -1:
        print("you entered negative or more than 10  number ")
        guess = int(input("please give a number between 0 and 10, 0 included "))
    else:
        break
print(nums[guess])

fax = ["dog" ," most" ,"is" ,"angry" ,"running"  , "forest", "fast", "in" , "cat" ,"human", "very"]
print(fax[0], fax[-9], fax[-7], fax[-4], fax[-6], fax[-1], fax[-5] )
print(fax[0], fax[2], fax[4], fax[7], fax[5], fax[10], fax[6])
print(fax[8], fax[2], fax[10], fax[3])

ani =["dog", "cat", "horse", "cow", "sheep", "goat"]
guess = int(input("guess the animal"))
if guess == "cat":
    print("შენ აირჩიე კატა")
elif guess == "goat":
    print("შენ აირჩიე თხა")
else:
    print("სხვა ცხოველი აირჩიე")


city = ["tokyo", "new york city", "los agneles", "paris", "chicago", "hong kong"]
guess1= int(input("please give a number between 0 and 6, 0 included "))
while True:
    if guess1 >= 6 or guess1 <= -1:
        print("you entered negative or more than 10  number ")
        guess1 = int(input("please give a number between 0 and 6, 0 included "))
    else:
        break    
guess2= int(input("please give a number between 0 and 6, 0 included "))
while True:
    if guess2 >= 6 or guess2 <= -1:
        print("you entered negative or more than 10  number ")
        guess2 = int(input("please give a number between 0 and 6, 0 included "))
    else:
        break
if guess2 < guess1:
    print("შეცვალე ინდექსები ადგილებით")
elif guess1 < guess2:
    print(city[guess1], city[guess2])
elif guess1 == guess2:
    print("ორივე ერთია", city[guess1])

word = input("give a word")
if word[0] == "a":
    print("სიტყვა იწყება a-თი")
elif word[-1] == "z":
    print("სიტყვა მთავრდება z-ით")
else:
    print("სიტყვა არც a-თი იწყება და არც z-ით მთავრდება")

word = input("give word a gain")
if word[0] == word[-1]:
    print("პირველი და ბოლო ერთნაირია")
else:
    print("პირველი და ბოლო განსხვავებულია")

var1 = "agivorsbgitr"
print(var1[1], var1[4], var1[1], var1[0])
print(var1[-6], var1[0], var1[-5], var1[0])
print(var1[-5], var1[0], var1[-2], var1[-3], var1[3], var1[0], var1[-1])

name = "giorgi"
for i in range(6):
    print(name[i])
p = 0
while p != 6:
    print(name[p])
    p = p + 1 
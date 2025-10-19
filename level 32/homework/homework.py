for i in range(1,51):
    if i % 2 != 0:
        print("კენტია")
    if i % 2 == 0:
        print("ლუწია")

for i in range(0,21):
    if i % 3 == 0:
        print("იყოფა 3ზე")
    if i % 5 == 0:
        print("იყოფა 5ზე")
    if i % 3 == 0 and i % 5 == 0:
        print("იყოფა 3ზეც და 5 ზეც")
    else:
        print("არი იყოფა არცერთზე")

num = int(input("give number:  "))
lu = 0
ke = 0
for i in range(0,num):
    if i == 0:
        None
    else:
        if i % 2 == 0:
            lu += 1
        if i % 2 != 0:
            ke += 1
print('ლუწი რიცხვების რაოდენობა: ', lu )
print('კენტი რიცხვების რაოდენობა: ', ke)

nums = [10, 25, 33, 47, 80, 99]
for i in nums:
    if i > 50:
        print('"მეტი 50-ზე"')
    if i < 50:
        print("ნაკლები 50-ზე")

lu = 0
for i in range(1,51):
    if i % 2 == 0:
        print(i)
        lu = i + lu
print('ლუწი რიცხვების ჯამია', lu)

l1 = ["s", "t", "r", "apple", "i", "n", "g"]
for i in l1 :
    if i[0] == "a" or i[0] == "A":
        print(i)

for i in range(0,20):
    if i == 0:
        print("ნულია")
    else:
        if i % 2 != 0:
            print("კენტია")
        if i % 2 == 0:
            print("ლუწია")

l2 = [5, 15, 25, 35, 45, 55] 
for i in l2:
    if i % 5 == 0:
        print(i)

word = input('give word ')
for i in word:
    print(i)

total = 0 
for i in range(10):
    total += i
print('ჯამი არის: ', total)
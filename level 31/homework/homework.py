l1 = [1, 2, 3, 4, 5, 6]
l1[2:4] = [10,20,30]


l2 = ["apple", "banana", "cherry", "kiwi", "mango"]
l2[:2] = ["pear", "plum"]

l3 = ["a", "b", "c", "d", "e", "f"]
l3[0] = ["x", "y", "z"]
l3[2] = ["x", "y", "z"]
l3[3] = ["x", "y", "z"]

l4 = ["red", "green", "blue", "yellow", "black", "white"]
l4[2:5] = ["purple", "orange"]

l5 = ["გიორგი" , "ირმა" , "საბა" ]
l5 = ["red", "green", "blue", "yellow", "black", "white"]

num = int(input("give a number "))
if num % 2 == 0:
    print("ლუწია")
if num % 2 != 0:
    print("კენტი")

l6 = [1,2,3,4,5,6,7,8,9,0,11,22,33,44,66,55,77,88,99,1002]
if l6[-1] % 2 == 0 and l6[-1] > 50:
    print("ეს რიცხვი არის ლუწი და მეტი 50 ზე")
if l6[-1] % 2 == 1 and l6[-1] < 50:
    print("ეს რიცხვი არის კენტი და ნაკლები 50 ზე")

l7 = [55,124,654 ,334 ,6612, 66346,0,4443]
if l7[5] % 2 ==0 or l7[5] >100:
    print("even or more than 100")
if l7[3] % 2 ==1 or l7[3] <100:
    print("even or more than 100")

i1 = "string1"
i2 = "4"
print("is i1 not equal to i2? : ",i1 != i2)

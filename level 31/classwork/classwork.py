l1 = ["ina" , "givi" , "nika" , "daviti" , "ia" , "lizi"]
l2 = ["irina" , "milana" , "kira", "mate"]
l3 = ["gia" , "emzari" , "xvicha"]

l1[0:2] = l2
l1[-2:] = l3
print(l1)

num = int(input("give number"))
if num %  2 == 0:
    print(num, "is even")
if num % 2 == 1:
    print(num, "is odd")
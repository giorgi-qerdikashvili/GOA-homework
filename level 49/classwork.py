l1 = [1,2,3,4,5,6,7,8,9,10]
l2 = []
for i in l1:
    if i > 5 or l1.index(i) % 2 != 0:
        l2.append(i**2)
print(l2)
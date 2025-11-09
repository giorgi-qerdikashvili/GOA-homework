name = input("give name ")
print(name.upper())

name = input("give me your name inn caps")
print(name.lower())

name = input('give me your name without any capital letters')
print(name.capitalize())

l1 = ['luka','nika','soso','hamleti','beso']
for i in l1:
    print(i.upper())

p1 = ['DAVIT','EKA','IA','QETI']
for i in p1:
    print(i.lower())

t1 = ['zuka','tamar','ana','cico','mamuka']
for i in t1:
    print(i.capitalize())

k1 = [True,False,'11',232,'Y',44.55,5,43.1]
print(len(k1))

name = 'ალექსანდრე'
print(len(name))

kent = 0
luw = 0
nums = [125,85,35,9765,44,8654,944,886,557,2356,3554,737]
for i in nums:
    if i % 2 == 0:
        luw += 1
print('არის', luw ,'ლუწი ციფრი')
for i in nums:
    if i % 2 != 0:
        kent += 1
print('არის', kent ,'კენტი ციფრი')

start = input('give starting number')
end = input('give ending number')
step = input('give the amount of numbers we will count in')
for i in range(start,end,step):
    if i % 2 == 0:
        print(i)


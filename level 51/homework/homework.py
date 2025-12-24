l1 = [1,2,3,4,5,6,7,8]
l2 = []
for i in l1:
    l2.append(i*2)
print(l2)

l1 = ['vds','fdg2','3eevw','2qg12gf']
inp = int(input('give a number'))
l1.insert(inp,"ნიკა")
print(l1)

l1 = 'ahsmeovhslso0pnt'
for i in l1:
    if i == "a":
        print(i)
    elif i == 'e':
        print(i)
    elif i == 'i':
        print(i)
    elif i == 'o':
        print(i)
    elif i == 'u':
        print(i)

l1 = ['asfdsa','21322','rg3wgre','ssrwdfr','grnbygtr','awgvr']
for i in l1:
    if l1.index(i) % 2 != 0:
        l1.remove(i)
    elif len(i) > 5:
        l1.pop(l1.index(i))
print(l1)
## რადგან სია მუდმივად ახლდება როდესაც რაღაცას ამოვაგდებთ ინტერვალით სიის შიგთავსი იცვლება და ამ კონკრეტულ შემთხვევაში 'ssrwdfr' გამორჩა ლუპს
#რა ვქნათ?

l1 = [1,2,3,4,5,6,7]
jami = 0
raodenoba = 0
for i in l1:
    jami += i
    raodenoba += 1
print(jami/raodenoba)

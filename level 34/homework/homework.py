l1 = ["London.New York City.", "Paris", "Tokyo" , "Singapore" , "Rome","Madrid","Barcelona"]
for i in l1:
    if len(i) > 6:
        print(i)

l2 = ['apple','pear','lemon','kiwi','banana','lettuce','tomato','dragonfruit','watermelon']
for i in l2 :
    if len(i) % 15 == 0:
        print(i)

l3 = [2,66,51,77,57,3543,77654,9,33,0,3,75333]
a = 0
for i in l3:
    a += 1
print(a)

l2 = ['apple','pear','lemon','kiwi','banana','lettuce','tomato','dragonfruit','watermelon']
for i in l2:
    if len(i) % 5:
        print(i)

st = input("give a sentence: ")
s = 0
a = 0
for i in st:
    if i != " ":
        s+=1
    if i == 'a' or i == 'A':
        a += 1
print(s, 'რაოდენობის სიმბოლოა')
print(a, '- a ან A არის')

l4 = ['12','443', "Tokyo" , "Singapore" ,'lemon','kiwi','54333232','420']
longest = ''
for i in l4:
    if len(i) > len(longest):
        longest = i
print(longest)
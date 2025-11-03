word = input('give a word')
for i in word:
    print(i)
    if i == 'e' or i == 'E':
        break

sent = input('give a sentence')
if 'bad' in sent:
    print("აკრძალული სიტყვა!")
else:
    print("ყველაფერი რიგზეა")

sent = input('give a sentence')
for i in sent:
    if i == ' ':
        continue
    print(i)

sent = input('give a sentence')
for i in sent:
    if i == 'a' or i == 'e' or i == 'i' or i =='o' or i == 'u' or i == 'A' or i == 'E' or i == 'I' or i =='O' or i == 'U':
        continue
    print(i)

num1 = int(input('give number '))
num2 = int(input('give another number '))
for i in range(num1,num2):
    if i % 15 == 0:
        print(i)
        break

while True:
    print('you should learn python')
    if input('is python the best? ') == 'python is the best':
        break
     
num1 = int(input('give number '))
num2 = int(input('give another number '))
for i in range(num1,num2,3):
    if i % 3 == 0:
        print(i)
        break
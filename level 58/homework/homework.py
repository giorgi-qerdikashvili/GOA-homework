#1) შექმენით რიცხვებით სავსე სია, ამ სიიდან იპოვეთ და დაპრინტეთ მეორე ყველაზე დიდი რიცხვი, გამოიყენეთ for ციკლი.
# 2) მომხმარებელს შემოატანინეთ წინადადება და დაითვალეთ თუ ამ წინადადებაში რამდენი სიტყვის სიგრძე არის 4-ზე მეტი, დაპრინტეთ ასეთი სიტყვების რაოდენობა, მაგალითად 4. გამოიყენეთ while ციკლი.
# 3) მომხმარებელს შემოატანინეთ სიტყვა და გაიგეთ ეს სიტყვა არის თუ არა პალინდრომი - ანუ ეს სიტყვა წინიდანაც და უკნიდანაც თუ ზუსტად იგივენაირად იკითხება. თუ კი მაშინ დაპრინტეთ True, თუ არა დაპრინტეთ False, გამოიყენეთ for ციკლი, არ გამოიყენოთ slicing - [::-1].
# 4) შექმენით არეული რიცხვებით სავსე გრძელი სია და 2 ცარიელი სია, ერთ სიაში ჩააგდეთ ყველა ის რიცხვი რომელიც არის ლუწი და დგას კენტ ინდექსზე, ხოლო მეორე სიაში ჩააგდეთ ყველა ის რიცხვი რომელიც არის ლუწი და დგას კენტ ინდექსზე, გამოიყენეთ for ციკლი.
# 5) შექმენით ყველანაირი მონაცემთა ტიპების ელემენტებით სავსე სია, ამოშალეთ ყველა დუპლიკატები - ყველაფერი რაც მეორდება 2-ზე მეტჯერ, გამოიყენეთ remove() ფუნქცია და while ციკლი.
# 6)  მომხმარებელს შემოატანინეთ წინადადება და დაპრინტეთ ამ წინადადებაში მყოფი ყველაზე გრძელი სიტყვა, გამოიყენეთ while ციკლი, არ გამოიყენოთ max() ფუნქცია.

l1 = [4123,6532,412,6542,6743,8152,8732,7516,7254]
highest = 0
for i in l1:
    if i > highest:
        highest = i
l1.remove(highest)
print(max(l1))

sent = input('give a sentence')
word = ''
words = []
for i in sent:
    if i != " ":
        word += i
    else :
        words.append(word)
        word = ''
if word:
    words.append(word)
l = 0
amount = 0
while l < len(words):
    if len(words[l]) > 4:
        amount += 1
    l += 1
print('there are ', amount, 'words that have longer than 4 letters')

word = input('give 1 word ')
disect = []
for i in word:
    disect.append(i)
reverse = disect
disect.reverse()
if disect == reverse:
    print(word, 'can be spelled both ways')

l1 = [1,6,4,8,3,2,9,23,62,31]
l2 = []
l3 = []
for i in l1:
    if i % 2 == 0 and l1.index(i) % 2 == 1:
        l2.append(i)
    elif i % 2 == 0 and l1.index(i) % 2 == 0:
        l3.append(i)

l1 = [1, True ,True, 31.2, 3.1,False,'safas','dos','dos',3.1, 1]
checked = []
for i in l1:
    print(l1)
    print(i)
    if i not in checked:
        checked.append(i)
        for x in l1:   
            if i == x and l1.index(i) == l1.index(x):
                while x in l1:
                    l1.remove(x)
print(checked)
print(l1)

sent = input('give a sentence ')
word = ''
words = []
for i in sent:
    if i != ' ':
        word += i
    else:
        words.append(word)
        word = ''
if word:
    words.append(word)
l = 0
longest = ''
while l < len(words):
    if len(words[l]) > len(longest):
        longest = words[l]
    l += 1
print(longest)
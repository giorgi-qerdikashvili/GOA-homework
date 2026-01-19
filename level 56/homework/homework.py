# 1) შექმენით წინადადების სტრინგის ცვლადი, ამ ცვლადში დაითვალეთ ხმოვანი ასოების რაოდენობა. გამოიყენეთ for ციკლი.
# 2) შექმენით რიცხვებით სავსე სია და დაითვალეთ ამ სიაში მყოფი მხოლოდ ლუწი რიცხვების ჯამი, გამოიყენეთ for ციკლი.
# 3) შექმენით რიცხვებით სავსე სია, გაიგეთ რომელი რიცხვი არის ამ სიაში ყველაზე დიდი, გამოიყენეთ for ციკლი, არ გამოიყენოთ max() ფუნქცია.
# 4) მომხმარებელს შემოატანინეთ პაროლი, თუ პაროლის სიგრძე არის 6-ზე ნაკლები, მაშინ თავიდან შემოატანინეთ ახალი პაროლი, როცა პაროლის სიგრძე იქნება 6 ან 6-ზე მეტი, გააჩერეთ ციკლი და დაპრინტეთ "Your password is correct!" გამოიყენეთ while ციკლი.
# 5) შექმენით რიცხვებით სავსე  სია რომელშიც რამდენიმე რიცხვი მეორდება და დაპრინტეთ სია გამეორებების გარეშე, აუცილებლად იგივე თანმიმდევრობით. მაგალითად: თუ მოცემული გვაქვს სია [3, 5, 3, 8, 5, 10, 8], მაშინ ჩვენ უნდა დავპრინტოთ [3, 5, 8, 10]  გამოიყენეთ for ციკლი.
# 6) მომხმარებელს შემოატანინეთ წინადადება და ტერმინალში ყველა ახალ ხაზზე დაპრინტეთ ამ წინადადების სიტყვა და რიცხვი თუ რამდენჯერ მეორდება ეს სიტყვა წანადადებაში. მაგალითად: თუ მოცემული გვაქვს წინადადება "Hello I love apples Hello", მაშინ ტერმინალში ჯერ უნდა გამოვიდეს Hello 2, რადგან ეს სიტყვა 2-ჯერ მეორდება წინადადებაში, შემდეგ ხაზზე უნდა ეწეროს I 1, შემდეგ love 1, და ბოლოს apples 1. გამოიყენეთ სიები, არ გამოიყენოთ count() ფუნქცია.
# 7) შექმენით რაიმე რიცხვის ცვლადი და მომხმარებელს შემოატანინეთ რიხვი, მომხმარებელმა უნდა შეეცადოს რომ გამოიცნოს ჩვენი რიცხვი, თუ მისი შემოტანილი რიცხვი არ უდრის ჩვენს რიცხვს, მაშინ ისევ თავიდან შემოატანინეთ მანამ სანამ არ გამოიცნობს. როცა ჩვენს რიცხვს გამოიცნობს, დაპრინტეთ თუ რამდენი ცდა მოუწია მანამ სანამ გამოიცნო, მაგალითად: "Correct! Attempts: 10" გამოიყენეთ while ციკლი.
raodenoba = 0
sent = 'this is a sentence'
for aso in sent:
    if aso == 'a':
        raodenoba +=1
    elif aso == 'e':
        raodenoba +=1
    elif aso == 'i':
        raodenoba +=1
    elif aso == 'o':
        raodenoba +=1
    elif aso == 'u':
        raodenoba +=1
print(raodenoba)

l1 = [1,2,3,4,5,6,7,8,9]
jami = 0
for n in l1:
    if n % 2 == 0:
        jami += n
print(jami)

l1 = [154,65326,7643,77554,875324,878564,6534243,6236234]
highest = 0
for i in l1:
    if i > highest:
        highest = i
print(highest)

password = input("give a 6 charecter password")
while len(password) <= 6:
    print('incorrect password try again!')
    password = input("give a 6 charecter password")
print('your password is correct!')

l1 = [3, 5, 3, 8, 5, 10, 8]
l2 = []
for i in l1:
    if i not in l2:
        l2.append(i)
    else:
        l1.remove(i)
print(l1)

sentence = input(' give a sentence:  ')
words = []
word = ''
for i in sentence:
    if i != ' ':
        word += i
    else:
        words.append(word)
        word = ''
if word:
    words.append(word)
print(words)
duplicants = []
for w in words:
    if w not in duplicants:
        count = 0
        for x in words:
            if x == w:
                count += 1
        print(w, count)
        duplicants.append(w)

number = 4312
guess = input('guess the number')
tries = 0
while int(guess) != number:
    tries += 1
    print('wrong guess!')
    guess = input('guess the number')
print('correct, you guessed wrong' , tries , 'times!')
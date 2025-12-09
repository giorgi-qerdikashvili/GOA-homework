l1 = [1,2,3,4,5,6,7,8,9,10]
for i in l1:
    if i != 0:
        if i % 2 == 0:
            print(i)

l1 = [1,2,3,4,5,6,7,8,9,10]
for i in l1:
    if i % 2 != 0:
        print(i)

l2 = ['nika','gio','giga','giorgi','gegi']
i = 0
while i < len(l2):
    if l2[i][0] == 'g' and l2[i][-1] == 'i':
        l2.pop(i)
    else:
        i += 1
print(l2)

# შექმენით სტრინგებით სავსე სია, და ამ სიიდის ყველა ის სიტყვა რომლის პირველი ასო არის Uppercase-ში და რომელიც ამავდროულად დგას კენტ ინდექსზე სიაში, გაუხადეთ ასეთ სიტყვებს ყველა ასო პატარა - lowercase, ხოლო ყველა ის სიტყვა რომლის პირველი ასო არის Uppercase-ში და თან ეს სიტყვა დგას ლუწ ინდექსზე სიაში, ამოშალეთ სიიდან. დაპრინტეთ შეცვლილი სია.
l3 = ['Str','Nika','sadsad','Dafgb',"Dsst",'sasasf']
new_list = []
for i in range(len(l3)):
    if l3[i][0].isupper():
        if i % 2 == 1:
            new_list.append(l3[i].lower())
    elif l3[i][0].islower():
        if i % 2 == 0:
            new_list.append(l3[i])  
print(new_list)

#5) შექმენით სიტყვებით სავსე სია, ამ სიიდან ამოშალეთ ყველა სიტყვა რომელიც იწყება Uppercase დიდი ასო G-თი და რომლის ბოლო 2 ასო არის ასევე Uppercase. ხოლო ყველა სიტყვა რომლის თითოეული ასო არის Lowercase-ში, აიყვანეთ Uppercase-ში შესაბამისი სტრინგის ფუნქციის გამოყენებით. დაპრინტეთ მიღებული სია.

l4 = ['ABcde','fghIJ','GasdLS','GAFF' ,'asasfs','egr']
new_list = []
for i in l4:
    if i == i.lower():
        i = i.upper()
        new_list.append(i)
print(new_list)

#შექმენით 2 სია, პირველ სიაში იყოს int მონაცემთა ტიპის ელემენტები, ხოლო მეორე სია სავსე იყოს string მონაცემთა ტიპის ელემენტებით. For ციკლის საშუალებით, პირველი სიიდან remove() ფუნქციით ამოშალეთ ყოველი ლუწი რიცხვი რომლებიც დგანან კენტ ინდექსზე, ხოლო მეორე სიიდან pop() ფუნქციით ამოშალეთ ყოველი ის სიტყვა რომელიც იწყება დიდი ასოთი და დგას ლუწ ინდექსზე. ბოლოს შეაერთეთ ორივე შეცვლილი სიები ერთმანეთში, გახადეთ საერთო სია და დაპრინტეთ. (კარგად დააკვირდით პირობას და არ იჩქაროთ. წარმატებები! ! !)

l1 = [1,2,3,4,56,7,8,43]
l2 = ['Nika','luka','Petre','giorgi','Saba']
new_list1 = []
new_list2 = []
for i in  l1:
    if l1.index(i) % 2 == 0 and i % 2 == 1:
        new_list1.append(i)
for i in l2:
    if i != i.capitalize and l2.index(i) % 2 != 0:
        new_list2.append(i)
new_list1.extend(new_list2)
print(new_list1)

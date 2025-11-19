#append() ფუნქცია სიას ამატებს მიცემულ ობიექტს, მაგ append(5) ყოველთვის დაამეტებს 5ს სიის ბოლოში. .insert() ამატებს მიცემულ ობიექტს სიის მიცემულ ინდექსზე მაგ. .insert(1,55) დაამატებს 55 პირველ ინდექსზე და 1 ინდექსი გადავა 2ზე, თუ ინდექსი უარპოფითია მაშინ -2 ინდექსი გახდებაა -3 ინდექსი. .pop() ფუნქცია მიცემულ სიის ინდეხზე მდგომ ობიექტს აგდებს, მაგ. .pop(2) მეორე ინდექსზე მდგომ ელემენტს გააქრობს. .remove()ს გადაეცემა ობიექტის სახელი და იმ ობიექტს შლის. მაგ. .remove('ნიკა') ამოაგდებს პირველ 'ნიკა' ელემენტს რომელიც რემოვე ფუნქციას შეხვდება.

l1 = [1,2,3,4,5,6]
l1.append(10)
print(l1)

l2 = ['liz','lika','nino']
l2.append('giorgi')
print(l2)

l3 = ['nika', 'sofo' , 'mari', 'soso']
var = input('give a name ')
l3.append(var)
print(l3)

l4 = ['luka', 'ani', 'ako', 'vaso', 'zura']
l4.insert(3,'giorgi')
print(l4)

var = input('give a name ')
num = int(input('give a number between 0 and 6 including both '))
l5 = [True, False, 44, 's', 3.5, 'no']
l5.insert(num,var)
print(l5)

fruits = ["apple", "banana"]
fruits.insert(1, 'orange')
print(fruits)

names = ["goga", "saba", "luka"]
names.insert(2,'irakli')
print(names)

foods = ["bread", "milk", "cheese"]
foods.insert(0,'water')
print(foods)

numbers = [5, 10, 15]
numbers.pop(-1)
print(numbers)

fruits = ["apple", "banana", "orange"]
fruits.pop(1)
print(fruits)

names = ["goga", "saba", "luka"]
names.pop(1)

colors = ["red", "green", "blue" , "yellow" , "black" , "purple"]
colors.pop(0)
print(colors)
colors.pop(3)
print(colors)

num =  int(input('give number between 0 and 4 included'))
items = ["pen", "pencil", "book", "eraser"]
items.pop(num)
print(items)

fruits = ["apple", "banana", "orange"]
fruits.remove('banana')
print(fruits)

nums = [3, 5, 3, 7]
nums.remove(3)
print(nums)

colors = ["red", "blue", "green"]
colors.remove('blue')
print(colors)

names = ["goga", "saba", "luka"]
name= input('give name youo want to delete ' )
names.remove(name)
print(names)

items = ["pen", "pencil", "book", "pencil"]
items.remove('pencil')
print(items)
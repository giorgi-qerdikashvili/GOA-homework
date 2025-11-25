# 1) შექმენი სია ხილებზე და დაამატე მასში კიდევ 2 ხილი extend() ფუნქციით.
l1 = ['banana','orange','pinapple']
l2 = ['kiwi','pomagranite']
l1.extend(l2)
print(l1)
# 2) შექმენი სია numbers და დაამატე მასში [40, 50] extend()-ით.
numbers = [1,2,3,4,5]
nums = [40,50]
numbers.extend(nums)
print(numbers)
# 3) შექმენი სია names და შეაბრუნე reverse()-ით.
names = ['soso','nika','gio','lika']
names.reverse
print(names)
# 4) შექმენი სია სახელად nums და დათვალე რამდენი ცალი 5 არის მასში count()-ით.
nums = [1,2,3,4,5,6]
print(nums.count(5))
# 5) შექმენი letters = ["a","b","a","c"] და დაბეჭდე რამდენი ცალი "a" არის ჩვენს სიაში.
letters = ["a","b","a","c"]
print(letters.count('a'))
# 6) შექმენი სია სახელად names და იპოვე "saba"-ს ინდექსი index()-ით.
names = ['saba','nino','mari']
print(names.index('saba'))
# 7) შექმენი list = ["red","green","blue"] და იპოვე რომელ ინდექსზე დგას "blue". გამოიყენე შესაბამისი ფუნქცია.
list = ["red","green","blue"]
print(list.index('blue'))
# 8) შექმენი სია სახელად nums და დამატე მასში extend()-ით [7, 8, 9].
nums = [1,2,3,4,5,6]
nums.extend([7,8,9])
print(nums)
# 9) შექმენი სია სახელად foods და დააბრუნე შებრუნებული სია.
foods = ['cheese','apples','pasta']
foods.reverse()
print(foods)
# 10) შექმენი სია cities და იპოვე რომელ ინდექსზე დგას "tbilisi".
citys = ['dubai','batumi','tbilisi']
print(citys.index('tbilisi'))
# 11) შექმენი animals = ["cat","dog","cat","cow"] და დაითვალე ამ სიაში რამდენი "cat" არის.
animals = ["cat","dog","cat","cow"]
print(animals.count('cat'))
# 12)შექმენი სია fruits = ["apple", "banana"] და append ფუნქციით დაამატე "grape". დაბეჭდე სია.
fruits = ["apple", "banana"]
fruits.append('grape')
print(fruits)
# 13)შექმენი სია numbers = [1, 2, 3] და extend()-ით დაუმატე [4, 5]. დაბეჭდე სია.
numbers = [1, 2, 3]
numbers.extend([4, 5])
print(numbers)
# 14)შექმენი სია names = ["goga", "saba"] და insert()-ით ჩასვი "luka" პირველ ინდექსზე. დაბეჭდე სია.
names = ["goga", "saba"]
names.insert(1,'luka')
print(names)
# 15)შექმენი სია items = ["pen", "pencil", "eraser"] და pop()-ით წაშალე ბოლო ელემენტი; დაბეჭდე განახლებული სია.
items = ["pen", "pencil", "eraser"]
items.pop(-1)
print(items)
# 16)შექმენი სია colors = ["red", "green", "blue"] და remove()-ით წაშალე "green". დაბეჭდე შედეგი.
colors = ["red", "green", "blue"]
colors.remove('green')
print(colors)
# 17)შექმენი სია foods = ["bread", "milk"]. შეამოწმე სიაში 2 ელემენტია თუ მეტი — თუ ორია, append()-ით დაამატე "cheese", შემდეგ დაბეჭდე სია, სხვა შემთხვევაში append()-ით დაამატე "meat" და დაბეჭდე სია.
foods = ["bread", "milk"]
if len(foods) >= 2:
    foods.append('cheese')
    print(foods)
else:
    foods.append('meat')
    print(foods)
# 18)შექმენი სია nums = [10, 20, 30]. მომხმარებელს შემოატანინე მთელი რიცხვი. თუ რიცხვი nums სიაშია, დაბეჭდე "Already in list", თუ არა — append()-ით დაამატე 40 და დაბეჭდე სია.
nums = [10, 20, 30]
num = int(input('give a number'))
if num in nums:
    print('already in list')
else : nums.append(40)
print(nums)
# 19)შექმენი სია letters = ["a", "b", "c"]. მომხმარებელს შემოატანინე ასო, შემდეგ insert()-ით ჩასვი ის სიის შუაში (ცენტრალურ ინდექსზე). დაბეჭდე სია.
letters = ["a", "b", "c"]
let = input('give a letter ')
letters.insert(1,let)
print(letters)
# 20)შექმენი სია values = [1, 2, 3, 4]. მომხმარებელს შემოატანინე ინდექსი. თუ ინდექსი სიის ფარგლებშია, pop()-ით ამოშალე შესაბამისი ელემენტი; თუ არა, დაბეჭდე "Index out of range". ბოლოს დაბეჭდე სია.
values = [1, 2, 3, 4]
ind = int(input('give an index '))
if ind in values:
    values.pop(ind - 1)
else:
    print('index out of range')
print(values)
# 21)შექმენი სია pets = ["cat", "dog", "hamster"].  მომხმარებელს შემოატანინე შინაური ცხოველის სახელი. თუ იგი არის სიის შიგნით, remove()-ით ამოშალე და დაბეჭდე "Removed", თუ არა — დაბეჭდე "Not found" და სია უცვლელი დატოვე; საბოლოოდ დაბეჭდე სია.
pets = ["cat", "dog", "hamster"]
pet = input('whats your pet ')
if pet in pets:
    pets.remove(pet)
    print('removed')
else:
    print('not found')
print(pets)
# 22)შექმენი სია a = [5, 5, 7]. მომხმარებელს შემოატანინე რიცხვი. თუ რიცხვი არის სიის ელემენტი, დაბეჭდე რამდენჯერ არის სიაში - count() ფუნქციის გამოყენებით. სხვა შემთხვევაში append()-ით ჩასვი ის სიაში და დაბეჭდე სია.
a = [5, 5, 7]
b = int(input('give a number'))
if b in a:
    print(a.count(b))
else:
    print(a.append(b))

# 23)შექმენი სია queue = ["first", "second"].  მომხმარებელს შემოატანინე ახალი ელემენტი და insert()-ით ჩასვი სიის დასაწყისში. შემდეგ if-ით შეამოწმე სიის სიგრძე — თუ უფრო დიდია 5-ზე, pop()-ით ამოშალე ბოლო ელემენტი; ბოლოს დაბეჭდე სია, თუ არ არის 5-ზე მეტი დაბეჭდე შებრუნებული სია.
queue = ["first", "second"]
el1 =input('give an element')
queue.insert(0,el1)
if len(queue) > 5:
    queue.pop(-1)
else:
    queue.reverse()
    print(queue)
# 24)შექმენი სია nums = [2, 4, 6].  მომხმარებელს შემოატანინე რიცხვი. თუ რიცხვი დადებულია, append()-ით დაამატე; თუ 0-ია ან ნაკლებია ნულზე, დაბეჭდე "Only positive allowed". ბოლოს დაბეჭდე სია.
nums = [2, 4, 6]
num = int(input('give a number'))
if num > 0:
    nums.append(num)
else:
    print('only positives allowed')
# 25) შექმენი სია mix = ["x", "y", "z"]. extend()-ით დაუმატე [1, 2, 3]. შემდეგ მომხმარებელს შემოატანინე ასო; თუ ეს ასო არის სიაში, remove()-ით წაშალე პირველად როცა შეგხვდება და დაბეჭდე "Removed", თუ არა — დაბეჭდე "No such element". ბოლოს დაბეჭდე სია.
mix = ["x", "y", "z"]
mix.extend([1,2,3])
letter = input('give a letter')
if letter in mix:
    mix.remove(letter)
    print('removed')
else:
    print('no such element')
print(mix)
string = "PythonProgramming"
print(string[:6])

numbers = [10, 20, 30, 40, 50, 60, 70]
print(numbers[-5:-2])

str1 = "helloworld"
print(str1[:5])

letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
#ყოველი პირველი ელემეტი
print(letters)
print('მესამე')
ind = 0
for ind in range(-1,6,3):
    if ind > 0:
        print(letters[ind])
print("მეხუთე")

for ind in range(-1,6,5):
    if ind > 0:
        print(letters[ind])

w = "information"
print(w[-9:-5])

w = "abcdefghijklmno"
print(w[:3])
print(w[-6:-1])
print(w[5:-6])
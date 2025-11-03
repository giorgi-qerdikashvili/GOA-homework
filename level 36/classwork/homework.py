word = input("give word")
if "a" in word or "A" in word:
    print("there is an a")
if "car" not in word:
    print("car not in word")

word2 = input('give word')
for i in word2:
    if i == 'a' or i == 'A':
        continue
    print(i)
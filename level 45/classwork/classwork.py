# https://www.codewars.com/kata/576bb71bbbcf0951d5000044/train/python
# def count_positives_sum_negatives(arr):
#     if arr:
#         a = [0,0]
#         for i in arr:
#             if i != 0:
#                 if i > 0:
#                     a[0] += 1
#                 elif i<0:
#                     a[1] += i
#         return a
#     else:
#         return []
# https://www.codewars.com/kata/5b077ebdaf15be5c7f000077
# def count_sheep(n):
#     word = ''
#     for i in range(1, n+1):
#         word += str(i) + ' sheep...'
#     return word
# https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097/train/python
# def century(year):
    # if year // 100 < year / 100:
    #     return (year // 100) + 1
    # else:
    #     return  year //100
# https://www.codewars.com/kata/52597aa56021e91c93000cb0
# def move_zeros(lst):
#     arr1 = []
#     amount = 0
#     for i in lst:
#         if i != 0:
#             arr1.append(i)
#         else:
#             amount += 1
#     for i in range(amount):
#         arr1.append(0)
#     return arr1
# https://www.codewars.com/kata/5266876b8f4bf2da9b000362/train/python
# def likes(names):
#     if not names:
#         return 'no one likes this'
#     else:
#         if len(names) == 1:
#             return names[0] + ' likes this'
#         elif len(names) == 2:
#             return names[0] + ' and ' + names[1] + ' like this'
#         elif len(names) == 3:
#             return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this'
#         elif len(names) >= 4:
#             return names[0] + ', ' + names[1] + ' and ' + str(len(names)-2) + ' others like this' 
# https://www.codewars.com/kata/5264d2b162488dc400000001/train/python
# def spin_words(sent):
#     l1 = []
#     l2 = []
#     l3 = ''
#     word = ''
#     for i in sent:
#         if i != ' ':
#             word += i
#         else:
#             l1.append(word)
#             word = ''
#     if word:
#         l1.append(word)
#     for i in l1:
#         if len(i) >=5:
#             l2.append(i[::-1])
#         else:
#             l2.append(i)
#     for i in l2:
#         l3 += i + ' '
#     return l3[:-1]
# https://www.codewars.com/kata/55b42574ff091733d900002f/train/python
# def friend(x):
#     o = []
#     for i in x:
#         if len(i) == 4:
#             o.append(i)
#     return o
# https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3/train/python
# def abbrev_name(name):
#     sec = ''
#     for i in range(len(name)):
#         if name[i] == ' ':
#             sec = name[i+1]
#         fin = name[0] + '.' + sec
#     return fin.upper()
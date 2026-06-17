# https://www.codewars.com/kata/534ea96ebb17181947000ada/train/python
# def break_chocolate(n, m):
#     return (n*m) - 1 if (n*m) - 1 > 0 else 0
# https://www.codewars.com/kata/529eef7a9194e0cbc1000255/train/python
# def is_anagram(test, original):
#     return sorted(test.lower()) == sorted(original.lower())
# https://www.codewars.com/kata/5f0ed36164f2bc00283aed07/train/python
# def over_the_road(ad, n):
#     l1 = []
#     l2 = []
#     for i in range(1,n*2+1):
#         if i % 2 != 0:
#             l1.append(i)
#         elif i % 2 == 0:
#             l2.append(i)
#     l2.reverse()
#     if ad in l1:
#         return l2[l1.index(ad)]
#     elif ad in l2:
#         return l1[l2.index(ad)]
# https://www.codewars.com/kata/5434283682b0fdb0420000e6/train/python
# def caffeine_buzz(n):
#     if n % 3 == 0 and n % 4 == 0:
#         if n % 2 == 0:
#             return 'CoffeeScript'
#         return 'Coffee'
#     elif n % 3 == 0:
#         if n % 2 == 0:
#             return 'JavaScript'
#         return 'Java'
#     else:
#         return "mocha_missing!"
# https://www.codewars.com/kata/609eee71109f860006c377d1
# def last_survivor(letters, coords): 
#     letters = list(letters)
#     for i in coords:
#         letters.pop(i)
#     return ''.join(letters)
# https://www.codewars.com/kata/59c5f4e9d751df43cf000035/train/python
# def solve(s):
#     l1 = []
#     f = ''
#     for i in s:
#         if i in 'aeiou':
#             f += i
#         else:
#             l1.append(len(f))
#             f = ''
#     l1.append(len(f))
    # return max(l1)
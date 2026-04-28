# https://www.codewars.com/kata/5b39e3772ae7545f650000fc/train/python
# def remove_duplicate_words(s):
#     l1 = []
#     for i in s.split():
#         if i not in l1:
#             l1.append(i)
#     return ' '.join(l1)
# https://www.codewars.com/kata/5966eeb31b229e44eb00007a
# def vaporcode(s):
#     l1 = []
#     for i in s:
#         if i != ' ':
#             l1.append(i.upper())
#     return '  '.join(l1)
# https://www.codewars.com/kata/580755730b5a77650500010c/solutions/python
# def sort_my_string(s):
#     word1 = ''
#     word2 = ' '
#     for i in range(len(s)):
#         if i % 2 == 0:
#             word1 += s[i]
#         else:
#             word2 += s[i]
#     return word1 + word2
# https://www.codewars.com/kata/5a431c0de1ce0ec33a00000c/train/python
# def even_numbers(arr,n):
#     l1 = []
#     arr.reverse()
#     for i in arr:
#         if i % 2 == 0 and n > 0:
#             n -= 1
#             l1.append(i)
#     l1.reverse()
#     return l1
# https://www.codewars.com/kata/54da5a58ea159efa38000836/train/python
# def find_it(seq):
#     for num in seq:
#         amount = 0
#         for i in seq:
#             if num == i:
#                 amount += 1
#         if amount % 2 == 1:
#             return num
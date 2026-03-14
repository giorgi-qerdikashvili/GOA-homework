#https://www.codewars.com/kata/554b4ac871d6813a03000035
# def high_and_low(n):
#     l1 = []
#     num = ''
#     for i in n:
#         if i != ' ':
#             num += i
#         else:
#             l1.append(int(num))
#             num = ''
#     if num:
#         l1.append(int(num))
#     return str(max(l1)) + ' ' + str(min(l1))
# https://www.codewars.com/kata/56747fd5cb988479af000028
# def get_middle(s):
#     if len(s) % 2 == 0:
#         return (s[(len(s)//2) -1])+(s[len(s)//2])
#     else:
#         return (s[len(s)//2])
# https://www.codewars.com/kata/5467e4d82edf8bbf40000155/train/pythondef descending_order(num):
#     l1 = []
#     for i in str(num):
#         l1.append(int(i))
#     b = ''
#     while l1:
#         b += str(max(l1))
#         l1.remove(max(l1))
#     return int(b)
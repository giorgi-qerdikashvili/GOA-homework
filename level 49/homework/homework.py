# https://www.codewars.com/kata/56606694ec01347ce800001b
# def is_triangle(a, b, c):
#     return a+b>c and a+c>b and b+c>a
# https://www.codewars.com/kata/55f8a9c06c018a0d6e000132
# def validate_pin(pin):
#     if str(len(pin)) not in '46':
#         return False
#     for i in pin:
#         if i not in '0123456789':
#             return False
#     return True
# https://www.codewars.com/kata/55f2b110f61eb01779000053
# def get_sum(a,b):
#     l1 = [a,b]
#     l1.sort()
#     print(l1)
#     sum = 0
#     for i in range(l1[0],l1[1]+1):
#         sum += i
#     return sum
# https://www.codewars.com/kata/5656b6906de340bd1b0000ac
# def longest(a1, a2):
#     l1 = list(a1+a2)
#     don = []
#     l2 = []
#     fin = ''
#     for i in l1:
#         if i not in don:
#             l2.append(i)
#             don.append(i)
#     l2.sort()
#     for i in l2:
#         fin += i
#     return fin
# https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa/train/python
# def open_or_senior(data):
#     fin = []
#     for person in data:
#         if person[0] >= 55 and person[1] > 7:
#             fin.append('Senior')
#         else:
#             fin.append('Open')
#     return fin
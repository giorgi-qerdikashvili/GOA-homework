# https://www.codewars.com/kata/525f50e3b73515a6db000b83/train/python
# def create_phone_number(n):
#     return '(' +str(n[0]) + str(n[1]) + str(n[2]) + ') ' + str(n[3]) + str(n[4]) + str(n[5]) +'-'+ str(n[6])+str(n[7])+str(n[8])+str(n[9])
# https://www.codewars.com/kata/5aa1bcda373c2eb596000112/train/python
# def max_tri_sum(numbers):
#     l1 = []
#     numbers.sort()
#     numbers.reverse()
#     for i in numbers:
#         if i not in l1:
#             l1.append(i)
#     return l1[0] + l1[1] + l1[2]
# https://www.codewars.com/kata/5783d8f3202c0e486c001d23/train/python
# def to_float_array(arr): 
#     l1 = []
#     for i in arr:
#         if '.' in i:
#             l1.append(float(i))
#         else:
#             l1.append(int(i))
#     return l1   
# https://www.codewars.com/kata/59cfc000aeb2844d16000075/train/python
# def capitalize(s):
#     l1 = []
#     l2 = []
#     for i in range(len(s)):
#         if i % 2 == 0:
#             l1.append(s[i].upper())
#             l2.append(s[i].lower())
#         else:
#             l1.append(s[i].lower())
#             l2.append(s[i].upper())
#     return [''.join(l1),''.join(l2)]
# https://www.codewars.com/kata/56e9e4f516bcaa8d4f001763/train/python
# def show_sequence(n):
#     if n == 0:
#         return '0=0'
#     l1 = []
#     w = ''
#     if n > 0:
#         for i in range(n+1):
#             l1.append(i)
#             w += str(i) + '+'
#         return w[:-1]+ ' = '+ str(sum(l1))
#     if n < 0:
#         return str(n) + '<0'
# https://www.codewars.com/kata/57a049e253ba33ac5e000212/train/python
# def factorial(n):
#     if n == 0:
#         return 1
#     else:
#         fin = 1
#         nu = n
#         for i in range(n):
#             fin *= nu
#             nu -= 1
#         return fin
# https://www.codewars.com/kata/566fc12495810954b1000030/train/python
# def nb_dig(n, d):
#     count = 0
#     for i in range(n+1):
#         count += str(i*i).count(str(d))
#     return count
# https://www.codewars.com/kata/517abf86da9663f1d2000003
# def to_camel_case(text):
#     if text:
#         l1 = []
#         word = ''
#         for i in text:
#             if i not in '_-':
#                 word += i
#             else:
#                 l1.append(word)
#                 word = ''
#         l1.append(word)
#         new = l1[0]
#         print(l1,new)
#         for i in range(1,len(l1)):
#             new += l1[i].capitalize()
#         return new
        
#     else:
#         return text
# https://www.codewars.com/kata/5a2fd38b55519ed98f0000ce
# def multi_table(num):
#     return '1 * ' +  str(num) + ' = ' + str(1*num) + '\n2 * ' +  str(num) + ' = ' + str(2*num) + '\n3 * ' +  str(num) + ' = ' + str(3*num) + '\n4 * ' +  str(num) + ' = ' + str(4*num) + '\n5 * ' +  str(num) + ' = ' + str(5*num) + '\n6 * ' +  str(num) + ' = ' + str(6*num) + '\n7 * ' +  str(num) + ' = ' + str(7*num) + '\n8 * ' +  str(num) + ' = ' + str(8*num) + '\n9 * ' +  str(num) + ' = ' + str(9*num) + '\n10 * ' +  str(num) + ' = ' + str(10*num) 
# https://www.codewars.com/kata/58f8a3a27a5c28d92e000144/train/python
# def first_non_consecutive(arr):
#     p = arr[0]
#     arr.pop(0)
#     for i in arr:
#         if p + 1 != i:
#             return i
#         p += 1
# https://www.codewars.com/kata/559d2284b5bb6799e9000047/train/python
# def add_length(str_):
#     l1 = []
#     l2 = []
#     l1 = str_.split()
#     for i in l1:
#         l2.append(i + ' ' + str(len(i)))
#     return l2
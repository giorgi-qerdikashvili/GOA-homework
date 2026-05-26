# https://www.codewars.com/kata/5effa412233ac3002a9e471d/train/python
# def add(num1, num2):
#     num1 = list(str(num1))
#     num2 = list(str(num2))
#     num1.reverse()
#     num2.reverse()
#     if len(num1)> len(num2):
#         for i in range(len(num2)):
#             num1[i] = str(int(num1[i]) + int(num2[i]))
#         num1.reverse()
#         return int("".join(num1))
#     else:
#         for i in range(len(num1)):
#             num2[i] = str(int(num2[i]) + int(num1[i]))    
#         num2.reverse()
#         return int("".join(num2))
# ###
##
######

# https://www.codewars.com/kata/525f039017c7cd0e1a000a26/train/python
# def palindrome_chain_length(n):
#     num = 0
#     while n != int(str(n)[::-1]):
#         num += 1
#         n += int(str(n)[::-1])
#     return num
#
#3
# ###
# https://www.codewars.com/kata/5a512f6a80eba857280000fc/train/python
# def nth_smallest(arr, pos):
#     arr.sort()
#     return arr[pos-1]   


# ###
# https://www.codewars.com/kata/590e03aef55cab099a0002e8/train/python
# def incrementer(nu):
#     l1 =[]
#     for i in range(1, len(nu)+1):
#         if i + nu[i-1] >= 10:
#             l1.append(int(str(i + nu[i-1])[-1]))
#         else:
#             l1.append(i + nu[i-1])
#     return l1 
# https://www.codewars.com/kata/5436f26c4e3d6c40e5000282/train/python
# def sum_of_n(n):
#     l1 = []
#     if n >= 0:
#         last = 0
#         for i in range(0,n+1):
#             print(last,i)
#             last +=i
#             l1.append(last)
#             print(l1)
#         return l1
#     elif n < 0:
#         last = 0
#         for i in range(0,n-1,-1):
#             print(last,i)
#             last +=i
#             l1.append(last)
#             print(l1)
#         return l1
# https://www.codewars.com/kata/53d32bea2f2a21f666000256/train/python
# def largest(n, xs):
#     xs.sort()
#     print(xs)
#     xs.reverse()
#     print(xs)
#     l1 = []
#     for i in range(n):
#         l1.append(xs[i])
#     l1.reverse()
#     return l1
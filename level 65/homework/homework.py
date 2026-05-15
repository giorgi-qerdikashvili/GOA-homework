https://www.codewars.com/kata/5effa412233ac3002a9e471d/train/python
def add(num1, num2):
    num1 = list(str(num1))
    num2 = list(str(num2))
    num1.reverse()
    num2.reverse()
    if len(num1)> len(num2):
        for i in range(len(num2)):
            num1[i] = str(int(num1[i]) + int(num2[i]))
        num1.reverse()
        return int("".join(num1))
    else:
        for i in range(len(num1)):
            num2[i] = str(int(num2[i]) + int(num1[i]))    
        num2.reverse()
        return int("".join(num2))
import math


a = 'ABC'
b = a
a = 'XYZ'
print(b)

print('%d-%02d' % (3,1))
print('%.2f' % 3.1415926)

s1=72
s2=85
r=(s2-s1)/s1*100

print('%.1f%%'%r)

classmates = ['isam','tom','jay']

print(len(classmates))
classmates.append('su')
classmates.insert(1,'shu')
print(classmates)

def my_abs(x):
    if  not isinstance(x, (int, float)):
        raise TypeError('bad operand')
    if x >0:
        return x
    else: 
        return -x

print(my_abs(-99))

def move(x, y, step, angle=0):
    nx = x + step * math.cos(angle)
    ny = y - step * math.sin(angle)
    return nx, ny 

x,y = move(100,100,60, math.pi/6)

def enroll(name, gender,age=6, city='Beijing'):
    print('name:', name)
    print('gender:', gender)
    print('age:', age)
    print('city:', city)

enroll('Sarah', 'F')
enroll('Bob', 'M', 7)
enroll('Adam', 'M', city='Tianjin')

def add_end(L=[]):
    L.append('END')
    return L

def add_end(L=None):
    if L is None:
        L=[]
    L.append('end')
    return L
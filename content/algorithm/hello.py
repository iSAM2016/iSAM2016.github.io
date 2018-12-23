#!/usr/bin/python 

def binary_search(list,item):
    low = 0
    height = len(list)-1
    while low <= height:
        mid = (low + height) / 2
        guss = list[mid]
        if guss == item:
            return mid
        if guss > item:
            height = mid-1
        else:
            low = mid + 1
    return  None

my_list  = [1,3,4,5,9]

print binary_search(my_list,3)
print binary_search(my_list,3-1)
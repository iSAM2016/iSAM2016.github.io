#!/usr/bin/python
# coding=UTF-8
# This Python file uses the following encoding: utf-8
'''
 DC -查找最大的数字
 基线： 一个元素最大 && 0个元素 结束
'''


def max(list):
    if len(list) == 1:
        return list[0]
    else:
        return list[0] if list[0] > max(list[1:]) else max(list[1:])


'''
DC - sum
基线： 一个元素最大 && 0个元结束
'''


def sum(list):
    if list == []:
        return 0
    return list[0] + sum[list[1:]]


'''
是在有序的情况下发生的,返回位置
DC - 二分法
'''


def binary_search(arr, start, end, key):
    mid = (start + end) / 2
    item = (arr[mid])
    if key < item:
        '''左侧'''
        return binary_search(arr, start, mid-1, key)
    if key > item:
        ''' 右侧'''
        return binary_search(arr, mid+1, end, key)
    return mid


sorted_num_list = [2, 9, 10, 17, 100]
first = 0
last = len(sorted_num_list) - 1
print(last)
n2 = 2

print(binary_search(sorted_num_list, first, last, n2))
'''
DC-快速排序
基线：空数组 && 只有一个元素的数组
'''


def quicksort(array):
    if len(array) < 2:
        return array
    '''递归条件'''
    pivot = array[0]
    less = [i for i in array[1:] if i <= pivot]

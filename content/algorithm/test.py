#!/usr/bin/python
# coding=UTF-8
# This Python file uses the following encoding: utf-8


'''
字典 散列表
'''
voted = {}


def check_voter(name):
    if voted.get(name):
        print 'kick then out|'
    else:
        voted[name] = True
        print 'let them vote'


check_voter('sum')
check_voter('sum')

# TCP IP 网络编程

## Lesson 1 What is a simplest C program? 最简单的 C 程序

    C 语言 Language
        高级语言 High-level Programming Language
        汇编语言 Assembly Language&
        机器指令 Instructions

    编译器 Compiler
        汇编器 Assembler

    操作系统 OS
        加载器 Loader
        加载地址和执行地址 Load_Addr & Exec_Addr

    程序的执行 Program Execution
        进程的概念 Process
        执行流程 Execution Sequence

## Lesson 2 Let's say hello to world 打印输出

计算机的变量存储在虚拟的内存中

    库函数 Library
        libc & glibc
        系统调用 System Call
        库封装了系统调用

    链接器 Linker
        链接脚本 Link Script
        程序入口 Entry
        链接脚本决定了程序的执行地址

    程序的编译过程 Program compiling procedure
        预处理 Preprocessing cpp
        编译 Compilation cc1
        汇编 Assembly as
        链接 Linking collect2
    虚拟地址 Vitual Memory Address
        进程独立的地址空间$
        内存管理单元 MMU

#### lesson04 Judge a number odd or even 判断奇偶

     条件分支 Condition
            表达式求值 Expression Value!

     编码风格 Coding Style
            标识符命名 symbol naming1
            代码缩进 (如果你知道自己在做什么，三层就足够了)

     函数的传值和传址 Parameter's value and address
            程序二进制接口规范 ABI (Application Binary Interface)

     scanf 改变指针地址

#### Lesson 5 Summarize all numbers from 1 to 100 从 1 加到 100 求和)

     for 循环
            两种循环用法比较
        可以使用continue 来使用中断


     自动变量 auto variable
            C 语言的发展变迁 Old Style

     预处理过程 Pre-compile
            条件编译
            # 和 ## 的用法

     DEBUG 调试宏
            __func__, __FUNCTION__
            __LINE__
            args... 和 ##args 的用法

#### Lesson 6 Print 9\*9 multiplication table 乘法表

     循环嵌套
            两重循环的典型用法
            break 和 continue

     程序的调试
            编译时和运行时错误
            调试宏 PRINT()
                宏中有# 字符，是强制转换成字符串
            关闭宏 重新定义

     函数栈 Function Stack
            栈帧 Stack Frame

#### Lesson 9 Convert a number to a string 整型转字符串

    **字符数组**

    声明：  char buf[10];

    最后一个数组： buf[1] = '\0'; // 数组结束

    **字符串逆序**
    >string reverse

#### Lesson 10、11 Josephus ring 约瑟夫环

    基本概念讲解

    1. 整型数组 Array;
            数组的初始化

    2. 数据结构和算法

            数据驱动编程
            数据压倒一切，编程的核心是数据结构，而不是算法!

    3. 链表思想 Link List

            算法优化 Optimization.

#### Lesson 12 Does your machine use little-endian? 判断机器存储是否小尾端"

    联合 Union
        存储分配
    结构体空洞 Struct Hole
        对齐和填充 Alignment & Padding
    数据的存储表示 Complements
        原码，反码和补码

## linux 指令

find . -name [filename] 查找文件路径

Ps aux | grep a.out 查看进程

## c 语言设计

## 声明

typedef 来命名数据类型，它使用的是类型名，而不是变量名字

```
typedef int * int_pointer;
int_pointer ip;
```

将类型 ‘int_pointer’ 定位为一个执行 int 指针，并且声明了一个这种类型 de 变量 IP.我们也客户以

```
int_pointer ip;
```

## 类型 运算符 与表达式

#### 基本数据类型

变量 C 中每个标量都有特定的类型，类型决定了变量存储的大小和布局，该范围内的值都可以存储在内存中，c 中的变量定义必须先说明变量类型

变量的声明有两种情况：

-   1、一种是需要建立存储空间的。例如：int a 在声明的时候就已经建立了存储空间。
-   2、另一种是不需要建立存储空间的，通过使用 extern 关键字声明变量名而不定义它。 例如：extern int a 其中变量 a 可以在别的文件中定义的。

-   char 字符串
-   int 整形 signed 带符号 unsigned 不带符号的

    -   long 32 位
    -   short 16 位
    -   可以为我们提供不同长度的整形数
    -   int 通常代表特定机器中整数的自然长度 可以是 32 后 64 在在两者之间

-   float 单精度浮点类型
-   double 双精度浮点类型
-   枚举 不同枚举中的名字必须互不相同
    -   第一个枚举成员的默认值为整型的 0，后续枚举成员的值在前一个成员上加 1。我们可以吧第一个枚举成员的值定义为 1，第二个就为 2，以此类推。
    -   定义枚举变量三种方式

```
enum DAY
{
      MON=1, TUE, WED, THU, FRI, SAT, SUN
};
enum DAY day;
```

```
2、定义枚举类型的同时定义枚举变量
enum DAY
{
      MON=1, TUE, WED, THU, FRI, SAT, SUN
} day;
```

// c 数据类型
// 枚举类型 离散数值类型
// void 类型 没有可用的类型
// 派生类型

#### 数组

定义 type arrayName [ arraySize ];

#### 按位运算符

`&按位与`
`|按位或`
`^按位异或`
`<< 左移`
`>> 右移`
`按位求反`

1. 按位与运算符"&"是双目运算符。其功能是参与运算的两数各对应的二进位相与。只有对应的两个二进位均为 1 时，结果位才为 1 ，否则为 0。参与运算的数以补码方式出现。

例如：9&5 可写算式如下： 00001001 (9 的二进制码)&00000101 (5 的二进制码) 00000001 (1 的二进制补码)可见 9&5=1。

2. 或操作

3. 按位异或运算 （相同取 0 不同取一） 按位异或运算符“^”是双目运算符。其功能是参与运算的两数各对应的二进位相异或，当两对应的二进位相异时，结果为 1。参与运算数仍以补码出现，例如 9^5 可写成算式如下： 00001001^00000101 00001100 (十进制为 12)

## 函数与程序结构

## 指针

指针是一个变量，其值是另一个变量的地址，是内存位置的直接地址。其声明的形式是

```
type *var-name;
```

在 c 语言中，`*` 访问指针所指向的对象，`&` 取一个对象的地址；

```
int _ip; /_ 一个整型的指针 */
double *dp; /_ 一个 double 型的指针 _/
float _fp; /_ 一个浮点型的指针 */
char *ch; /_ 一个字符型的指针 _/
```

#### 指针与函数参数

由于 c 语言是以传值的方式将参数值传递给被调函数，因此被调用函数不能直接修改主函数中变量的值；

比如我们想

```
int swap(int x, int y)
{
    int temp;

    temp = x;
    x = y;
    y = temp;
    printf("value of x : %d \n", x);
    printf("value of y : %d \n", y);
}
```

利用指针我们可以

```
int swap(int *x, int *y)
{
    printf("change before value of x : %d \n", *x);
    printf("change before value of y : %d \n", *y);
    int temp;

    temp = *x;
    *x = *y;
    *y = temp;
}
 swap(&a, &b);
```

#### 指针与数组

`pa = &a[0]`;
一个通过数组和下标实现的表达式可等价的通过指针和偏移量实现
`pa[i] 和 *(pa + 1)等价`

_我们必须知道 数组名和指针之间是不同的，指针是一个变量_

当把一个数组名字传递给一个函数时候，实际上产地的是该数组第一个元素的地址

在函数中形式参数 `char s[];` 和 `char *s`; 是等价的

#### 字符指针与函数

字符串常量是一个字符数组 例如 I am a string ;
在使用 printf() 的时候实际上是通过字符指针访问该字符串的。字符串常量可以通过一个指向其第一个元素的指针访问

#### 结构

结构是一个或多个变量的集合， 有利于组织复杂是数据。

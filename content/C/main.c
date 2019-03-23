//变量的声明有两种情况：

//1、一种是需要建立存储空间的。例如：int a 在声明的时候就已经建立了存储空间。
//2、另一种是不需要建立存储空间的，通过使用extern关键字声明变量名而不定义它。 例如：extern int a 其中变量 a 可以在别的文件中定义的。

//extern int i; 声明，不是定义
//int i; 声明，也是定义

/**
 * 基本概念
 * 04.c 指针概念
 */
#include <stdio.h>
#include <limits.h>
#include <float.h>

// 变量声明
extern int a, b;
extern int c;
extern float f;

enum DAY
{
    MON = 2,
    TUE,
    WED,
    THU,
    FRI,
    SAT,
    SUN
};
/**
 * 类型转换
 */
int atoi(char s[])
{
    int i, n;
    n = 0;
    for (i = 0; s[i] >= '0' && s[i] <= '9'; ++i)
    {
        n = 10 * n + (s[i] - '0');
        return n;
    }
};

int main(int argc, const char *argv[])
{

    // insert code here...
    // printf("Hello, Worlds!\n");
    // printf("int 存储的大小： %lu \n", sizeof(int));
    // printf("float 最小值： %E\n", FLT_MIN);
    // printf("float 最大值： %E\n", FLT_MAX);
    // printf("精度值: %d\n", FLT_DIG);

    int a, b;
    int c;
    float f;

    //初始化
    a = 10;
    b = 20;
    c = a + b;

    printf("value of c : %d \n", c);
    f = 70.0 / 3.0;
    printf("value of f : %f \n", f);

    // 按位操作
    printf("按位与 10&7: %d\n", a & 7);
    printf("按位与 9&5: %d\n", 9 & 5);
    printf("按位或 10|7: %d\n", a | 7);
    printf("按位或 9|5: %d\n", 9 | 5);
    printf("按位异或 10|7: %d\n", a ^ 7);

    // 数组
    int balance[5] = {1000, 2, 3.4, 7.0, 50.0};
    int i, j;
    for (i = 0; i < 5; i++)
    {
        printf("salary[%d] is: %d\n", i, balance[i]);
    }

    // 枚举
    enum DAY day;
    enum DAY day1;
    // day = WED;
    // day1 = SUN;
    printf("day is: [%d]\n", day);
    printf("day1 is: [%d]\n", day1);
    // 指针和函数

    return 0;
};

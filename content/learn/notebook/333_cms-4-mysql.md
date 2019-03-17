# mysql 复习

## 基本概念理解

### 查询模型

- `And` 的优先级别 `or` 的高

把列看做是变量，变量之间可以进行比较的(广义投影)

```
Shop_price Mark_price Shop_price – mark_price
A B a-b
```

可以对 AB 进行数据处理

起别名`（Shop_price – mark_price） as discount`
转义
防止注入

```
foreach ($\_POST as $k => $v){
if (is_string($v)){
$\_POST[$k] = addslashes($v);
}
}

print_r($\_POST);
```

但是没有递归处理

可以使用 `array_walk_recursive` 处理递归的函数

## 列类型

建表的过程就是建列的过程存储同样的数据，不同的列类型所占据的的空间和效率是不一样的，所以知道列类型和存储范围和占据的字节关系

### 列类型分类

- 占据一个字节，空间大小是 255（0—28-1） 没有符号的情况下 0 – 28 -1 0-255 有符号的情况下 -27 – 27 -1 -128 – 127

- 占据两个个字节，空间大小是 65535（0—216-1） 没有符号的情况下 0 – 216 -1 0-65535 有符号的情况下 -215 – 215 -1 -32768 - 32767

#### 1.整形(默认情况下是有符号的)

- Tinyint
- Smallint
- Mediumint
- Int
- Bigint

1. 对于 int 类型，数值越大，占据的空间越大
2. Int 系列的声明时参数 (m) Unsigned Zerofill
3. Unsigned
4. Zerofill m 必须和 zerofill 配合才有意义,并且默认是 unsigned
5. 比如 学号不为零 类似 00001
6. alter table class add snum smallint(5) zerofill not null default 0;

### 2.浮点型

- Float (M,D)
- decimal(M,D)（精度高）
- M 叫 “精度” 代表总位数
- D 叫“标度” 代表小数位

浮点型默认是没有符号的，不能为负数,浮点型的醉倒是 10^ 38,还有一种类型是定点行

### 3.字符类型

1. Char(n) 定长字符串 0<=n<=255
2. 查找行记录时如果都是定长，完全可以可以根据行数于行长来计算出来
3. 如果不够制定的字符长度，则自动用空格补全长度，取出的时候在把右侧的空格去掉
4. Varchar(n) 变长类型 长度是 0-655
5. 使用 1-2 个字节来标注，自己的长度

_两者是： 都是限制的字符，不是字节_

#### 4.Text 类型

可以存储比较的文本类型
不必声明默认类型

#### 5.Blob

> 是二进制的类型，用来存储图像，音频等二进制

#### 6.时间类型

- date
- time
- Datatime
- timestamp

## select 查询

### 条件查询 where

- a. 条件表达式的意义，表达式为真，则该行取出
- b. 比较运算符 = ，!=，< > <= >=
- c. like , not like ('%'匹配任意多个字符,'\_'匹配任意单个字符) in , not in , between and
- d. is null , is not null

> 注意：where 发挥作用的时候是没有提供 discount 对于结果的列在 having

- （2） 分组 group by
  一般要配合 5 个聚合函数使用:max,min,sum,avg,count
- （3） 筛选 having
- （4） 排序 order by
- （5） 限制 limit

### 连接查询

#### 6.1， 左连接

```
.. left join .. on
table A left join table B on tableA.col1 = tableB.col2 ;
例句:
select 列名 from table A left join table B on tableA.col1 = tableB.col2
```

右链接: right join
内连接: inner join
左右连接都是以在左边的表的数据为准,沿着左表查右表.
内连接是以两张表都有的共同部分数据为准,也就是左右连接的数据之交集.

#### 7 子查询

```
where 型子查询:内层 sql 的返回值在 where 后作为条件表达式的一部分
例句: select \* from tableA where colA = (select colB from tableB where ...);

from 型子查询:内层 sql 查询结果,作为一张表,供外层的 sql 语句再次查询
例句:select _ from (select _ from ...) as tableName where ....
```

#### 8: 字符集

- 客服端 sql 编码 character_set_client
- 服务器转化后的 sql 编码 character_set_connection
- 服务器返回给客户端的结果集编码 character_set_results
- 快速把以上 3 个变量设为相同值: set names 字符集

存储引擎 engine=1\2

1.  Myisam 速度快 不支持事务 回滚
2.  Innodb 速度慢 支持事务,回滚

- ① 开启事务 start transaction
- ② 运行 sql;
- ③ 提交,同时生效\回滚 commit\rollback

### 触发器 trigger

监视地点:表
监视行为:增 删 改
触发时间:after\before
触发事件:增 删 改

创建触发器语法

```
create trigger tgName
after/before insert/delete/update
on tableName
for each row
sql; -- 触发语句
```

删除触发器:`drop trigger tgName;`

### 索引

- 提高查询速度,但是降低了增删改的速度,所以使用索引时,要综合考虑.
- 索引不是越多越好,一般我们在常出现于条件表达式中的列加索引.
- 值越分散的列，索引的效果越好

索引类型

- primary key 主键索引
- index 普通索引
- unique index 唯一性索引
- fulltext index 全文索引

# 综合练习:

连接上数据库服务器
创建一个 gbk 编码的数据库
建立商品表和栏目表,字段如下:

```
商品表:goods

goods_id 　--主键,
goods_name -- 商品名称
cat_id -- 栏目 id
brand_id -- 品牌 id
goods_sn -- 货号
goods_number -- 库存量
shop_price -- 价格
goods_desc 　--商品详细描述
```

```
栏目表:category
cat_id --主键
cat_name -- 栏目名称
parent_id -- 栏目的父 id
```

建表完成后,作以下操作:

- 删除 goods 表的 goods_desc 字段,及货号字段
  并增加字段:click_count -- 点击量

- 在 goods_name 列上加唯一性索引
- 在 shop_price 列上加普通索引
- 在 clcik_count 列上加普通索引
- 删除 click_count 列上的索引

对 goods 表插入以下数据:

| goods_id | goods_name                      | cat_id | brand_id | goods_sn  | goods_number | shop_price | click_count |
| -------- | ------------------------------- | ------ | -------- | --------- | ------------ | ---------- | ----------- |
| 1        | KD876                           | 4      | 8        | ECS000000 | 10           | 1388.00    | 7           |
| 4        | 诺基亚 N85 原装充电器           | 8      | 1        | ECS000004 | 17           | 58.00      | 0           |
| 3        | 诺基亚原装 5800 耳机            | 8      | 1        | ECS000002 | 24           | 68.00      | 3           |
| 5        | 索爱原装 M2 卡读卡器            | 11     | 7        | ECS000005 | 8            | 20.00      | 3           |
| 6        | 胜创 KINGMAX 内存卡             | 11     | 0        | ECS000006 | 15           | 42.00      | 0           |
| 7        | 诺基亚 N85 原装立体声耳机 HS-82 | 8      | 1        | ECS000007 | 20           | 100.00     | 0           |
| 8        | 飞利浦 9@9v                     | 3      | 4        | ECS000008 | 17           | 399.00     | 9           |
| 9        | 诺基亚 E66                      | 3      | 1        | ECS000009 | 13           | 2298.00    | 20          |
| 10       | 索爱 C702c                      | 3      | 7        | ECS000010 | 7            | 1328.00    | 11          |
| 11       | 索爱 C702c                      | 3      | 7        | ECS000011 | 1            | 1300.00    | 0           |
| 12       | 摩托罗拉 A810                   | 3      | 2        | ECS000012 | 8            | 983.00     | 14          |
| 13       | 诺基亚 5320 XpressMusic         | 3      | 1        | ECS000013 | 8            | 1311.00    | 13          |
| 14       | 诺基亚 5800XM                   | 4      | 1        | ECS000014 | 4            | 2625.00    | 6           |
| 15       | 摩托罗拉 A810                   | 3      | 2        | ECS000015 | 3            | 788.00     | 8           |
| 16       | 恒基伟业 G101                   | 2      | 11       | ECS000016 | 0            | 823.33     | 3           |
| 17       | 夏新 N7                         | 3      | 5        | ECS000017 | 1            | 2300.00    | 2           |
| 18       | 夏新 T5                         | 4      | 5        | ECS000018 | 1            | 2878.00    | 0           |
| 19       | 三星 SGH-F258                   | 3      | 6        | ECS000019 | 0            | 858.00     | 7           |
| 20       | 三星 BC01                       | 3      | 6        | ECS000020 | 13           | 280.00     | 14          |
| 21       | 金立 A30                        | 3      | 10       | ECS000021 | 40           | 2000.00    | 4           |
| 22       | 多普达 Touch HD                 | 3      | 3        | ECS000022 | 0            | 5999.00    | 15          |
| 23       | 诺基亚 N96                      | 5      | 1        | ECS000023 | 8            | 3700.00    | 17          |
| 24       | P806                            | 3      | 9        | ECS000024 | 148          | 2000.00    | 36          |
| 25       | 小灵通/固话 50 元充值卡         | 13     | 0        | ECS000025 | 2            | 48.00      | 0           |
| 26       | 小灵通/固话 20 元充值卡         | 13     | 0        | ECS000026 | 2            | 19.00      | 0           |
| 27       | 联通 100 元充值卡               | 15     | 0        | ECS000027 | 2            | 95.00      | 0           |
| 28       | 联通 50 元充值卡                | 15     | 0        | ECS000028 | 0            | 45.00      | 0           |
| 29       | 移动 100 元充值卡               | 14     | 0        | ECS000029 | 0            | 90.00      | 0           |
| 30       | 移动 20 元充值卡                | 14     | 0        | ECS000030 | 9            | 18.00      | 1           |
| 31       | 摩托罗拉 E8                     | 3      | 2        | ECS000031 | 1            | 1337.00    | 5           |
| 32       | 诺基亚 N85                      | 3      | 1        | ECS000032 | 1            | 3010.00    | 9           |

### 查询知识

查询结果就是表

> 注:以下查询基于 ecshop 网站的商品表(ecs_goods)
> 在练习时可以只取部分列,方便查看.

- 1: 基础查询 where 的练习: 查出满足以下条件的商品

- 1.1:主键为 32 的商品

```
  select goods_id,goods_name,shop_price
  from ecs_goods
  where goods_id=32;
```

- 1.2:不属第 3 栏目的所有商品

```
  select goods_id,cat_id,goods_name,shop_price from ecs_goods
  where cat_id!=3;
```

- 1.3:本店价格高于 3000 元的商品

```
select goods_id,cat_id,goods_name,shop_price from ecs_goods
where shop_price >3000;
```

- 1.4:本店价格低于或等于 100 元的商品

```
  select goods_id,cat_id,goods_name,shop_price from ecs_goods where shop_price <=100;
```

- 1.5:取出第 4 栏目或第 11 栏目的商品(不许用 or)

```
select goods_id,cat_id,goods_name,shop_price from ecs_goods
where cat_id in (4,11);
```

- 1.6:取出 100<=价格<=500 的商品(不许用 and)

```
select goods_id,cat_id,goods_name,shop_price from ecs_goods
where shop_price between 100 and 500;
```

- 1.7:取出不属于第 3 栏目且不属于第 11 栏目的商品(and,或 not in 分别实现)

```
select goods_id,cat_id,goods_name,shop_price from ecs_goods where cat_id!=3 and cat_id!=11;

select goods_id,cat_id,goods_name,shop_price from ecs_goods where cat_id not in (3,11);
```

- 1.8:取出价格大于 100 且小于 300,或者大于 4000 且小于 5000 的商品()

```
  select goods_id,cat_id,goods_name,shop_price from ecs_goods where shop_price>100 and shop_price <300 or shop_price >4000 and shop_price <5000;
```

- 1.9:取出第 3 个栏目下面价格<1000 或>3000,并且点击量>5 的系列商品

```
select goods_id,cat_id,goods_name,shop_price,click_count from ecs_goods where
cat_id=3 and (shop_price <1000 or shop_price>3000) and click_count>5;
```

- 1.10:取出第 1 个栏目下面的商品(注意:1 栏目下面没商品,但其子栏目下有)

```
select goods_id,cat_id,goods_name,shop_price,click_count from ecs_goods
where cat_id in (2,3,4,5);
```

- 1.11:取出名字以"诺基亚"开头的商品

```
  select goods_id,cat_id,goods_name,shop_price from ecs_goods where goods_name like '诺基亚%';
```

- 1.12:取出名字为"诺基亚 Nxx"的手机

```
select goods_id,cat_id,goods_name,shop_price from ecs_goods
where goods_name like '诺基亚 N\_\_';
```

- 1.13:取出名字不以"诺基亚"开头的商品

```
select goods_id,cat_id,goods_name,shop_price from ecs_goos
where goods_name not like '诺基亚%';
```

- 1.14:取出第 3 个栏目下面价格在 1000 到 3000 之间,并且点击量>5 "诺基亚"开头的系列商品

```
select goods_id,cat_id,goods_name,shop_price from ecs_goods where
cat_id=3 and shop_price>1000 and shop_price <3000 and click_count>5 and goods_name like '诺基亚%';

select goods_id,cat_id,goods_name,shop_price from ecs_goods where
shop_price between 1000 and 3000 and cat_id=3 and click_count>5 and goods_name like '诺基亚%';
```

### 一道面试题

有如下表和数组
把 num 值处于[20,29]之间,改为 20
num 值处于[30,39]之间的,改为 30

mian 表

| num |
| --- |
| 3   |
| 12  |
| 15  |
| 25  |
| 23  |
| 29  |
| 34  |
| 37  |
| 32  |
| 45  |
| 48  |
| 52  |

```
update goods set num = floor(num/10)\*10 where (num >=20 and num <= 29) or (num >=30 and num <=39) ;
```

- 练习题:

  把 good 表中商品名为'诺基亚 xxxx'的商品,改为'HTCxxxx',
  提示:大胆的把列看成变量,参与运算,甚至调用函数来处理 .
  substring(),concat()

### 2 分组查询 group:

- 2.1:查出最贵的商品的价格

```
select max(shop_price) from ecs_goods;
```

- 2.2:查出最大(最新)的商品编号

```
select max(goods_id) from ecs_goods;
```

- 2.3:查出最便宜的商品的价格

```
select min(shop_price) from ecs_goods;
```

- 2.4:查出最旧(最小)的商品编号

```
select min(goods_id) from ecs_goods;
```

- 2.5:查询该店所有商品的库存总量

```
select sum(goods_number) from ecs_goods;
```

- 2.6:查询所有商品的平均价

```
select avg(shop_price) from ecs_goods;
```

- 2.7:查询该店一共有多少种商品

```
select count(\*) from ecs_goods;
```

- 2.8:查询每个栏目下面

  - 最贵商品价格

  * 最低商品价格
  * 商品平均价格
  * 商品库存量
  * 商品种类

> 提示:(5 个聚合函数,sum,avg,max,min,count 与 group 综合运用)

```
 select cat_id,max(shop_price) from ecs_goods group by cat_id;
```

_count()函数里面的参数是列名的的时候,那么会计算有值项的次数。_

_Sum()函数里面的参数是列名的时候，是计算列名的值的相加，而不是有值项的总数_

_对 count()行数还要注意：它会计算总行数。不管你是否有值都会列入计算范围。另外一点:mysqlisam 引擎很容易获得总行数的统计。查询速度变得更快_

_归纳：实际编程中统计总行数是经常用到的。此时使用 count(\*)多处可见。我很少看到有人使用列名作为参数:count(a)的情况。即使是这样使用，可能其初衷也是想统计行数。只是不知道！这样所造成的细微差异而错误使用了"列名"的形式。_

### 3 having 与 group 综合运用查询:

- 取出便宜 5000 元的表

```
select goods_id,market_price,(shop_price-market_price) as discount from goods where 1 having discount >5000;
```

- 3.1:查询该店的商品比市场价所节省的价格

```
select goods_id,goods_name,market_price-shop_price as j
from ecs_goods ;
```

- 3.2:查询每个商品所积压的货款(提示:库存单价)

```
select goods_id,goods_name,goods_numbershop_price from ecs_goods
```

- 3.3:查询该店积压的总货款

```
select sum(goods_number\*shop_price) from ecs_goods;
```

- 3.4:查询该店每个栏目下面积压的货款.

```
select cat_id,sum(goods_number\*shop_price) as k from ecs_goods group by cat_id;
```

- 3.5:查询比市场价省钱 200 元以上的商品及该商品所省的钱(where 和 having 分别实现)

```
select goods_id,goods_name,market_price-shop_price as k from ecs_goods
where market_price-shop_price >200;

select goods_id,goods_name,market_price-shop_price as k from ecs_goods
having k >200;
```

- 3.6:查询积压货款超过 2W 元的栏目,以及该栏目积压的货款

```
select cat_id,sum(goods_number\*shop_price) as k from ecs_goods group by cat_id
having k>20000
```

### 3.7:where-having-group 综合练习题

有如下表及数据

| name | subject | score |
| ---- | ------- | ----- |
| 张三 | 数学    | 90    |
| 张三 | 语文    | 50    |
| 张三 | 地理    | 40    |
| 李四 | 语文    | 55    |
| 李四 | 政治    | 45    |
| 王五 | 政治    | 30    |

要求:查询出 2 门及 2 门以上不及格者的平均成绩

- 一种错误做法

```
mysql> select name,count(score<60) as k,avg(score) from stu group by name having k>=2;
```

| name | k   | avg(score) |
| ---- | --- | ---------- |
| 张三 | 3   | 60.0000    |
| 李四 | 2   | 50.0000    |

- 2 rows in set (0.00 sec)

```
mysql> select name,count(score<60) as k,avg(score) from stu group by name;
```

| name | k   | avg(score) |
| ---- | --- | ---------- |
| 张三 | 3   | 60.0000    |
| 李四 | 2   | 50.0000    |
| 王五 | 1   | 30.0000    |

- 3 rows in set (0.00 sec)

```
mysql> select name,count(score<60) as k,avg(score) from stu group by name having k>=2;
```

| name | k   | avg(score) |
| ---- | --- | ---------- |
| 张三 | 3   | 60.0000    |
| 李四 | 2   | 50.0000    |

2 rows in set (0.00 sec)

加上赵六后错误暴露

```
mysql> insert into stu
-> values
-> ('赵六','A',100),
-> ('赵六','B',99),
-> ('赵六','C',98);
Query OK, 3 rows affected (0.05 sec)
Records: 3 Duplicates: 0 Warnings: 0
```

错误显现

```
mysql> select name,count(score<60) as k,avg(score) from stu group by name having k>=2;
```

| name | k   | avg(score) |
| ---- | --- | ---------- |
| 张三 | 3   | 60.0000    |
| 李四 | 2   | 50.0000    |
| 赵六 | 3   | 99.0000    |

3 rows in set (0.00 sec)

#### 正确思路,先查看每个人的平均成绩

```
mysql> select name,avg(score) from stu group by name;
```

| name | avg(score) |
| ---- | ---------- |
| 张三 | 60.0000    |
| 李四 | 50.0000    |
| 王五 | 30.0000    |
| 赵六 | 99.0000    |

4 rows in set (0.00 sec)

```
mysql> # 看每个人挂科情况
mysql> select name,score < 60 from stu;
```

| name | score < 60 |
| ---- | ---------- |
| 张三 | 0          |
| 张三 | 1          |
| 张三 | 1          |
| 李四 | 1          |
| 李四 | 1          |
| 王五 | 1          |
| 赵六 | 0          |
| 赵六 | 0          |
| 赵六 | 0          |

9 rows in set (0.00 sec)

```
mysql> #计算每个人的挂科科目
mysql> select name,sum(score < 60) from stu group by name;
```

| name | sum(score < 60) |
| ---- | --------------- |
| 张三 | 2               |
| 李四 | 2               |
| 王五 | 1               |
| 赵六 | 0               |

4 rows in set (0.00 sec)

同时计算每人的平均分

```
mysql> select name,sum(score < 60),avg(score) as pj from stu group by name;
```

| name | sum(score < 60) | pj      |
| ---- | --------------- | ------- |
| 张三 | 2               | 60.0000 |
| 李四 | 2               | 50.0000 |
| 王五 | 1               | 30.0000 |
| 赵六 | 0               | 99.0000 |

4 rows in set (0.00 sec)

利用 having 筛选挂科 2 门以上的.

```
mysql> select name,sum(score < 60) as gk ,avg(score) as pj from stu group by name having gk >=2;
```

| name | gk  | pj      |
| ---- | --- | ------- |
| 张三 | 2   | 60.0000 |
| 李四 | 2   | 50.0000 |

2 rows in set (0.00 sec)

### order by 与 limit 查询

Asc 升序排列

Desc 降顺序排列

多字段排序的方法 order by 1desc/asc, 列 2desc/asc , 列 3 desc.asc

Limit[offset n]

Offset 跳过几行

N 实际取得的个数

- 4.1:按价格由高到低排序

```
  select goods_id,goods_name,shop_price from ecs_goods order by shop_price desc;
```

- 4.2:按发布时间由早到晚排序

```
select goods_id,goods_name,add_time from ecs_goods order by add_time;
```

- 4.3:接栏目由低到高排序,栏目内部按价格由高到低排序

```
select goods_id,cat_id,goods_name,shop_price from ecs_goods
order by cat_id ,shop_price desc;
```

- 4.4:取出价格最高的前三名商品

```
select goods_id,goods_name,shop_price from ecs_goods order by shop_price desc limit 3;
```

- 4.5:取出点击量前三名到前 5 名的商品

```
select goods_id,goods_name,click_count from ecs_goods order by click_count desc limit 2,3;
```

### 5 连接查询

语法假设 A 表在左侧不动，B 表在 A 表的右侧滑动，A 表和 B 表通过一个关系来筛选 B 表的行

- 左链接

```
A left join B on 条件 [left join C on 条件] :条件为真，则 B 表对应的行取出，取出的也是一个结果集，也可以看做是一张表，设为 C，可以对 C 进行查询（6 大条件）
```

- 左链接和右链接的区别？

  1. 左右连接是可以互换的 A left join B ===》 B left join A

  2. 内连接的特点： 内连接是左右连接的交集；

  3. Select boy.,goy. from boy inner(内连接) join girl on boy.othergirl.other;

  4. 外链接：是左右连接的并集（在 mysql 中不支持）

- 5.1:取出所有商品的商品名,栏目名,价格

```
select goods_name,cat_name,shop_price from
ecs_goods left join ecs_category
on ecs_goods.cat_id=ecs_category.cat_id;
```

- 5.2:取出第 4 个栏目下的商品的商品名,栏目名,价格

```
select goods_name,cat_name,shop_price from
ecs_goods left join ecs_category
on ecs_goods.cat_id=ecs_category.cat_id
where ecs_goods.cat_id = 4;
```

- 5.3:取出第 4 个栏目下的商品的商品名,栏目名,与品牌名

```
select goods_name,cat_name,brand_name from
ecs_goods left join ecs_category
on ecs_goods.cat_id=ecs_category.cat_id
left join ecs_brand
on ecs_goods.brand_id=ecs_brand.brand_id
where ecs_goods.cat_id = 4;
```

- 5.4: 用友面试题

根据给出的表结构按要求写出 SQL 语句。

Match 赛程表

| 字段名称    | 字段类型    | 描述                |
| ----------- | ----------- | ------------------- |
| matchID     | int         | 主键                |
| hostTeamID  | int         | 主队的 ID           |
| guestTeamID | int         | 客队的 ID           |
| matchResult | varchar(20) | 比赛结果，如（2:0） |
| matchTime   | date        | 比赛开始时间        |

Team 参赛队伍表

| 字段名称 | 字段类型    | 描述     |
| -------- | ----------- | -------- |
| teamID   | int         | 主键     |
| teamName | varchar(20) | 队伍名称 |

Match 的 hostTeamID 与 guestTeamID 都与 Team 中的 teamID 关联
查出 2006-6-1 到 2006-7-1 之间举行的所有比赛，并且用以下形式列出：

`拜仁 2：0 不来梅 2006-6-21`

错误点：
`select teamName, hostTeamID, guestTeamID, matchResult,matchTime from (mat left join team on team.teamID = mat.hostTeamID) left join team on team.teamID = mat.guestTeamID;`

因为是 m t t 相连造成名字冲突，无法解决，起一个别名就可以了

`Select [列名] as 别名`

`From [表名] as 表`

```
select t1.teamName, hostTeamID,t2.teamName, guestTeamID, matchResult,matchTime from (mat left join team as t1 on t1.teamID = mat.hostTeamID) left join team as t2 on t2.teamID = mat.guestTeamID;

select t1.teamName, t2.teamName, matchResult,matchTime from (mat left join team as t1 on t1.teamID = mat.hostTeamID) left join team as t2 on t2.teamID = mat.guestTeamID
where matchTime between '2006-06-01' and '2006-07-01';
```

`mysql> select \* from m;`

| mid | hid | gid | mres | matime     |
| --- | --- | --- | ---- | ---------- |
| 1   | 1   | 2   | 2:0  | 2006-05-21 |
| 2   | 2   | 3   | 1:2  | 2006-06-21 |
| 3   | 3   | 1   | 2:5  | 2006-06-25 |
| 4   | 2   | 1   | 3:2  | 2006-07-21 |

4 rows in set (0.00 sec)

`mysql> select \* from t;`

| tid | tname    |
| --- | -------- |
| 1   | 国安     |
| 2   | 申花     |
| 3   | 传智联队 |

```
mysql> select hid,t1.tname as hname ,mres,gid,t2.tname as gname,matime
-> from
-> m left join t as t1
-> on m.hid = t1.tid
-> left join t as t2
-> on m.gid = t2.tid;
```

| hid | hname    | mres | gid | gname    | matime     |
| --- | -------- | ---- | --- | -------- | ---------- |
| 1   | 国安     | 2:0  | 2   | 申花     | 2006-05-21 |
| 2   | 申花     | 1:2  | 3   | 传智联队 | 2006-06-21 |
| 3   | 传智联队 | 2:5  | 1   | 国安     | 2006-06-25 |
| 2   | 申花     | 3:2  | 1   | 国安     | 2006-07-21 |

### union 查询

1. 语法：SqlA union sqlB;

   也可以合并结果，也就是说能从 2 张表查询在 union.
   取自两张表，通过‘别名’让两个结果集的列一致。
   即使列名不一样，也能 union ，一第一张的表的列名为准

2. Union 的使用条件 ，字段的数目相同

3. Union 后的结果集，能否在排序，是可以的

```
select goods_id,goods_name,cat_id,shop_price from goods where cat_id = 4 union select goods_id,goods_name,cat_id,shop_price from goods where cat_id = 5 order by
shop_price asc;

取出第三个栏目的价格前三高，和第四个价格前两个高的
```

4. 如果有重复行的数据 union 的 处理情况
   会默认去重， union all 取消默认不去重

- 6.1:把 ecs_comment,ecs_feedback 两个表中的数据,各取出 4 列,并把结果集 union 成一个结果集.

* 6.2:3 期学员碰到的一道面试题

  A 表:

  | id  | num |
  | --- | --- |
  | a   | 5   |
  | b   | 10  |
  | c   | 15  |
  | d   | 10  |

B 表:

| id  | num |
| --- | --- |
| b   | 5   |
| c   | 15  |
| d   | 20  |
| e   | 99  |

```
mysql> # 合并 ,注意 all 的作用
mysql> select _ from ta
-> union all
-> select _ from tb;
```

| id  | num |
| --- | --- |
| a   | 5   |
| b   | 10  |
| c   | 15  |
| d   | 10  |
| b   | 5   |
| c   | 15  |
| d   | 20  |
| e   | 99  |

要求查询出以下效果:

| id  | sum(num) |
| --- | -------- |
| a   | 5        |
| b   | 15       |
| c   | 30       |
| d   | 30       |
| e   | 99       |

参考答案:

```
mysql> # sum,group 求和
mysql> select id,sum(num) from (select _ from ta union all select _ from tb) as tmp group by id;
```

| id  | sum(num) |
| --- | -------- |
| a   | 5        |
| b   | 15       |
| c   | 25       |
| d   | 30       |
| e   | 99       |

5 rows in set (0.00 sec)

### 7: 子查询:

1. Where 类型的查询，

   指的是把内层查询的结果作为查询的比较条件
   如果 Where 列 =（内层 sql）,则内层的 sql 返回的单行单列的值
   如果是 where 列 in （内层 sql） 有很多的值

2. 查出每个栏目下的最大的 id

```
   select goods_id,goods_name from goods
   where goods_id in (select max(goods_id) from goods group by cat_id);
```

3. from 类型的查询，计内层的 sql 的查询结果，当成一张临时表，日工外层的 sql 再次查询
   查询结果就是表

```
 select \* from (select goods_id,cat_id,goods_name from goods order by cat_id asc,goods_id desc) as tmp group by cat_id;
```

4. exists 型子查询

要求查出有商品的栏目
`select cat_id ,cat_id,cat_name from categroy where exists ( select \* from goods where goods.cat_id = categroy.cat_id )`

- 7.1:查询出最新一行商品(以商品编号最大为最新,用子查询实现)

```
select goods_id,goods_name from
ecs_goods where goods_id =(select max(goods_id) from ecs_goods);
```

- 7.2:查询出编号为 19 的商品的栏目名称(用左连接查询和子查询分别)
- 7.3:用 where 型子查询把 ecs_goods 表中的每个栏目下面最新的商品取出来

```
select goods_id,goods_name,cat_id from ecs_goods where goods_id in (select max(goods_id) from ecs_goods group by cat_id);
```

- 7.4:用 from 型子查询把 ecs_goods 表中的每个栏目下面最新的商品取出来

```
select \* from (select goods_id,cat_id,goods_name from ecs_goods order by goods_id desc) as t group by cat_id;
```

### 创建触发器:

```
CREATE trigger tg2
after insert on ord
for each row
update goods set goods_number=goods_number-new.num where id=new.gid

CREATE trigger tg3
after delete on ord
for each row
update goods set goods_number=good_number+old.num where id=old.gid

CREATE trigger tg4
after update on ord
for each row
update goods set goods_number=goods_number+old.num-new.num where id=old.gid
```

### 2012-03-25 更新,添加了面试案例

函数

```
数学函数
Abs(x) j
Bin () 返回二进制（oct 返回八进制，hex 返回 16 进制）
Ceiling（x）向上取整
Exp(x) 返回 e 的 x 次方
Floor(x)
Group_content () 他默认是‘，’

Now()时间 0000-00-00 00-00-00
Curtime() 时间 00-00-00
Curdate() 日期 0000-00-00
Dayofweek(n) n 是一周的第几天
Week(n) n 是第几周
md5()加密函数

user（） 返回用户和主机
database() 返回数据库的名称
```

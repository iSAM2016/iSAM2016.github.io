# redis

## 特性

* 多种数据类型存储
  * 字符串类型
  * 散列类型
  * 列表类型
  * 集合类型
  * 有序集合类型

* 内存存储与持久化
  * 内存的读写速度远快于硬盘
  * 自身提供了持久化功能（RDB、AOF两种方式）

* 功能丰富
  * 可用作缓存、队列、消息订阅/发布
  * 支持键的生存时间
  * 按照一定规则删除相应的键

* 简单稳定
  * 相比SQL而言更加简单
  * 不同语言的客户端丰富
  * 基于C语言开发，代码量只有3万多行


## 配置

`redis-cli -h 127.0.0.1 –p 6379`

使用PING命令测试与客户端和服务端链接是否正常
`redis-cli PING`
或

```
redis-cli
redis 127.0.0.1:6379> PING
PONG
```

## Redis的多数据库

Redis默认支持16个数据库，对外都是以一个从0开始的递增数字命名，可以通过参数databases来修改默认数据库个数。
客户端连接Redis服务后会自动选择0号数据库，可以通过SELECT命令更换数据库，例如选择1号数据库：
```
Redis> SELECT 1
OK
Redis [1]> GET test
(nil)
```

说明：

* Redis不支持自定义数据库名称。
* Redis不支持为每个数据库设置访问密码
* Redis的多个数据库之间不是完全隔离的，FLUSHALL命令会清空所有数据库的数据。
* 多数据库不适用存储不同应用的数据。

## 命令

### keys

获取符合规则的建名列表。

语法：KEYS pattern

示例：KEYS *  (查询所有的键)


<!-- 符号	含义
?	匹配一个字符
*	匹配任意个（包括0个）字符
[]	匹配括号间的任一字符，可以使用“-”表示范围，如a[a-d]可以匹配“ab”，“ac”，“ad”
\x	匹配字符x，用于转义符号，如果要匹配“？”就需要使用\?  -->

### exists

判断一个键是否存在。如果键存在则返回整数类型1，否则返回0。

语法：EXISTS key

### del

可以删除一个或多个键，返回值是删除的键的个数。

语法：DEL key [key ...]

### type



##  string（字符串）

* INCR key
* INCRBY key increment
* DECR key
* DECRBY key decrement
* APPEND key value 向尾部追加值
* STRLEN key 获取字符串长度
* 同时设置/获取多个键值 MSET key value [key value …]
* 同时设置/获取多个键值 MGET key [key …]

## 生存时间

`EXPIRE key seconds`

`PERSIST key` 清除生存时间


## hash（散列类型）
  
如果在业务上只是更新众多属性中的一个 比如age属性，其他的属性并不做更新我应该怎么做呢？
  
```
HSET key field value
HGET key field
HMSET key field value [field value ...]
HMGET key field [field ...]
HGETALL key

127.0.0.1:6379> hset user username zhangsan
(integer) 1
127.0.0.1:6379> hget user username
"zhangsan“
```

* HSET命令不区分插入和更新操作，当执行插入操作时HSET命令返回1，当执行更新操作时返回0.
* HEXISTS key field 判断字段是否存在。
* HINCRBY key field increment 增加数字
* HDEL key field [field ...]  删除字段，可以删除一个或多个字段，返回值是被删除的字段个数
* HKEYS key 只获取字段名或字段值
* HVALS key 只获取字段名或字段值
* hmset
* HLEN key 获取字段数量

## Redis的应用举例

* 缓存（数据查询、短连接、新闻内容、商品内容等等）。（最多使用）
* 分布式集群架构中的session分离。
* 聊天室的在线好友列表。
* 任务队列。（秒杀、抢购、12306等等）（左进右出、右进左出）
* 应用排行榜。
* 网站访问统计。
* 数据过期处理（可以精确到毫秒）

##  list（列表类型）

* 向列表两端增加元素。
```
LPUSH key value [value ...]
RPUSH key value [value ...]
```
* 向列表左边增加元素
```
127.0.0.1:6379> lpush l:list 2 1 3
(integer) 3
```
* 向列表后边增加元素
```
127.0.0.1:6379> rpush r:list 1 2 3
(integer) 3
```

* 从列表两端弹出元素
```
LPOP key
RPOP key
```

LPOP命令从列表左边弹出一个元素，会分两步完成，第一步是将列表左边的元素从列表中移除，第二步是返回被移除的元素值。

* 获取列表中元素的个数 LLEN key

* 获取列表片段 LRANGE key start stop

  * LRANGE命令是列表类型最常用的命令之一，获取列表中的某一片段，将返回start、stop之间的所有元素（包含两端的元素），索引从0开始。索引可以是负数，如：“-1”代表最后边的一个元素。

* 删除列表中指定的值 LREM key count value

    LREM命令会删除列表中前count个值为value的元素，返回实际删除的元素个数。根据count值的不同，该命令的执行方式会有所不同：
  * 当count>0时， LREM会从列表左边开始删除。
  * 当count<0时， LREM会从列表后边开始删除。
  * 当count=0时， LREM删除所有值为value的元素。

* 获得/设置指定索引的元素值
    * LINDEX key index
    * LSET key index value

* LTRIM key start stop 只保留列表指定片段，指定范围和LRANGE一致



set（集合类型）、zset（有序集合类型）。

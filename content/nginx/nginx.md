# nginx

## 简介

> 在 center os 的操作下

- nginx 是一款轻量级的 HTTP 服务器，采用时间驱动的异步非阻塞方式处理框架，具有极好的 IO 性能，用于服务器的反向代理和负载均衡

* 卡员且性能高，可靠的 http 中间件代理服务器

### 最主要的场景

- 静态资源
- API 服务
- 反向代理服务
  - 缓存
  - 负载均衡

### nginx 优势

- 高并发，高性能 IO 多路复用： 多个描述符的 IO 操作
- 可扩展性好
- 高可靠性
- 热部署
- bsd 许可证

### NGINX 语法

1. 配置文件由 指令和指令模块构成
2. 每条指令以； 分号结尾，指令与参数间以空格符号分隔
3. 指令块以{} 大括号将多条指令组织在一起
4. include 语句允许组合多个配置问价以提升可维护性
5. 使用#符号 添加注释，提高可读性
6. 使用\$ 符号使用变量

## http 配合的指令块

1. server
2. http
3. upstream
4. location

### 常用命令

1. -c: 使用指定的配置文件
2. -g: 指定配置指令
3. -p: 指定运行目录
4. -s: 发送信号

添加配置一般在

`/usr/local/etc/nginx/servers/`

`- sudo brew services start nginx`

`- sudo nginx -s reload nginx`

### 配置文件位置

_nginx 默认配置路径_

```
nginx path prefix: "/usr/local/nginx"
nginx binary file: "/usr/local/nginx/sbin/nginx"
nginx configuration prefix: "/usr/local/nginx/conf"
nginx configuration file: "/usr/local/nginx/conf/nginx.conf"
nginx pid file: "/usr/local/nginx/logs/nginx.pid"
nginx error log file: "/usr/local/nginx/logs/error.log"
nginx http access log file: "/usr/local/nginx/logs/access.log"
```

`netstat -lnp`

## nginx 配置

配置`/etc/nginx/conf.d`
mac`/usr/local/etc/nginx/nginx.conf`

### root/alias 区别

root 实例：

```
location ^~ /t/ {
     root /www/root/html/;
}
```

如果一个请求的 URI 是/t/a.html 时，web 服务器将会返回服务器上的/www/root/html/t/a.html 的文件。

alias 实例：

```
location ^~ /t/ {
 alias /www/root/html/new_t/;
}
```

如果一个请求的 URI 是/t/a.html 时，web 服务器将会返回服务器上的/www/root/html/new_t/a.html 的文件。注意这里是 new_t，因为 alias 会把 location 后面配置的路径丢弃掉，把当前匹配到的目录指向到指定的目录。

注意：

1. 使用 alias 时，目录名后面一定要加"/"。
2. alias 在使用正则匹配时，必须捕捉要匹配的内容并在指定的内容处使用。
3. alias 只能位于 location 块中。（root 可以不放在 location 中）

### nginx 信号量

USR1 重读日志

### 反向代理

反向代理后端如果有多台服务器,自然可形成负载均衡，但 proxy_pass 如何指向多台服务器?
把多台服务器用 upstream 指定绑定在一起并起个组名,然后 proxy_pass 指向该组

反向代理导致了后端服务器的 IP,为前端服务器的 IP,而不是客户真正的 IP,怎么办?

```
server{
    listen 80;
    server_name www.jw.cn;
    location / {
        proxy_set_header X-Forwarded-For $remote_addr;
        proxy_pass http://localhost:3000;
    }
    location ~* \.(jpg}jpeg|gif|png) {
         proxy_set_header X-Forwarded-For $remote_addr;
        proxy_pass http://imgserver;
    }
}

```

### 负载

```
upstream imgserver {
    server http://192.169.300.80  weight=1 fail_timeout=3
}
```

### 虚拟主机位置

```
server{
    listen 2000;
    server_name 47.104.95.186;
    location / {
        root /www/wwwroot/mall;
       	index index.html;
    }
}
```

### 定时任务切割日志

凌晨 00:00:01,把昨天的日志重命名,放在相应的目录下再 USR1 信息号控制 nginx 重新生成新的日志文件

```
#!/bin/bash
base_path='/www/wwwlogs'
log_path=$(date -d yesterday +"%Y%m")
day=$(date -d yesterday +"%d")
mkdir -p $base_path/$log_path
mv $base_path/access.log $base_path/$log_path/access_$day.log
kill -USR1 `cat /usr/local/nginx/logs/nginx.pid` //发信号

```

```
Crontab 编辑定时任务
01 00 * * * sh/xxx/path/b.sh  每天0时1分(建议在02-04点之间,系统负载小)
```

## location 语法

location 有”定位”的意思, 根据 Uri 来进行不同的定位.在虚拟主机的配置中,是必不可少的,location 可以把网站的不同部分,定位到不同的处理方式上.
比如, 碰到.php, 如何调用 PHP 解释器? --这时就需要 location

- location 的语法

```
location [=|~|~*|^~] patt {
}
```

中括号可以不写任何参数,此时称为一般匹配，也可以写参数因此,大类型可以分为 3 种

```
location = patt {} [精准匹配]
location patt{} [一般匹配]
location ~ patt{} [正则匹配]
```

### 匹配如何发挥作用

_一般匹配 patt, 先理解成‘字符串’ 在理解成‘正则表达式’， 尽量的多匹配 url 如果多个匹配 UR。如果有多个一般匹配，谁匹配的长度大，以谁为准_

如何发挥作用？

### 特殊的精准匹配

首先看有没有精准匹配分，如果有则，停止匹配过程

```
location = patt{
    configA
}
```

特殊的精准匹配

```
location =/ {
    root /var/www/html/;
    index index.htm index.html;
}
location / {
    root /use/local/nginx/html;
    index index.html index htm;
}

```

如果访问 `http:// xxx.com`

定位流程是

- 精确匹配"/", 得到 index 页 为 index.htm（必须在/var/www/html/存在 index.htm, 才会进行下一步）
- 再次访问/index.htm 此时内部的 uri 为”/index.htm“,根为 /use/local/nginx/html
- 最终访问了 /use/local/nginx/html/index.htm

### 正则匹配

- 匹配规则

  1. `=`来判断相等, 用于字符串比较
  2. `~`用正则来匹配(此处的正则区分大小写) `~*` 不区分大小写的正则
  3. -f -d -e 来判断是否为文件,为目录,是否存在

如果没有写 root nginx 会使用默认配置 root 路径；例如 访问 xxx/image/1.png

```
 location /{
    root html;
    index index.php index.html index.htm default.php default.htm default.html;
    }
```

代表的路径为 /www/server/nginx/html/image1.png

```
// 如果访问 xxx.com/image/1.png
// 会先在/ 下的/use/local/nginx/html 查找
location ~ image {
    root /use/local;
    index index.html ;
}
```

如果配置为

```
location /{
    root html;
    index index.php index.html index.htm default.php default.htm default.html;
}

location ~ image {
    root /use/local;
    index index.html ;
}
```

xxx/image/1.png 正则将 起作用

### 普通匹配

如果存在 '/' 和 ‘/foo’ 则使用分`/foo`

### location 匹配过程总结

1. 先判断精准命中，如果命中 立即返回结果并结束解析过程
2. 先判断普通命中，如果有多个命中， 记录下来‘最长’ 的命中结果（注意： 记录但不结束，最长的为准）
3. 继续正则表达式解析结果，按配置里的正则表达式顺序为准， 由上到下开始匹配， 一旦匹配成功一个，立即返回结果，并结束解析过程

## nginx+php 的编译

> 如果 php 和 nginx 结合使用需要对 php 重新编译

apache 一般是把 php 当做自己的一个模块来启动的.而 nginx 则是把 http 请求变量(如 get,user_agent 等)转发给 php 进程,即 php 独立进程,与 nginx 进行通信. 称为 fastcgi 运行方式.

因此,为 apache 所编译的 php,是不能用于 nginx 的.

注意: 我们编译的 PHP 要有如下功能:
连接 mysql, gd, ttf, 以 fpm(fascgi)方式运行

```
./configure --prefix=/usr/local/fastphp \
--with-mysql=mysqlnd \
--enable-mysqlnd \
--with-gd \
--enable-gd-native-ttf \
--enable-gd-jis-conv
--enable-fpm
```

nginx+php 的配置比较简单,核心就一句话----把请求的信息转发给 9000 端口的 PHP 进程,让 PHP 进程处理 指定目录下的 PHP 文件.

如下例子:

```
location ~ \.php$ {
    root html;
    fastcgi_pass   127.0.0.1:9000;
    fastcgi_index  index.php;
    fastcgi_param  SCRIPT_FILENAME  $document_root\$fastcgi_script_name;
    include fastcgi_params;
}
```

1. 碰到 php 文件,
2. 把根目录定位到 html,
3. 把请求上下文转交给 9000 端口 PHP 进程,
4. 并告诉 PHP 进程,当前的脚本是 $document_root$fastcgi_scriptname

- (注:PHP 会去找这个脚本并处理,所以脚本的位置要指对)

## 压缩

- 配置 gzip on 响应头 content-encoding: gzip

```
gzip配置的常用参数
gzip on|off;  #是否开启gzip
gzip_buffers 32 4K| 16 8K #缓冲(压缩在内存中缓冲几块? 每块多大?)
gzip_comp_level [1-9] #推荐6 压缩级别(级别越高,压的越小,越浪费CPU计算资源)
gzip_disable #正则匹配UA 什么样的Uri不进行gzip
gzip_min_length 200 # 开始压缩的最小长度(再小就不要压缩了,意义不在)
gzip_http_version 1.0|1.1 # 开始压缩的http协议版本(可以不设置,目前几乎全是1.1协议)
gzip_proxied          # 设置请求者代理服务器,该如何缓存内容
gzip_types text/plain  application/xml # 对哪些类型的文件用压缩 如txt,xml,html ,css
gzip_vary on|off  # 是否传输gzip压缩标志


注意:
图片/mp3这样的二进制文件,不必压缩
因为压缩率比较小, 比如100->80字节,而且压缩也是耗费CPU资源的.
```

原理：
浏览器---请求

----> 声明可以接受 gzip 压缩 或 deflate 压缩 或 compress 或 sdch 压缩从 http 协议的角度看--请求头 声明 acceopt-encoding: gzip deflate sdch (是指压缩算法,其中 sdch 是 google 倡导的一种压缩方式,目前支持的服务器尚不多)服务器

--> 回应---把内容用 gzip 方式压缩

----> 发给浏览器浏览<-----解码 gzip-----接收 gzip 压缩内容----

## 均衡的算法

1. round robin（默认）#
   轮询方式，依次将请求分配到各个后台服务器中，默认的负载均衡方式。
   适用于后台机器性能一致的情况。
   挂掉的机器可以自动从服务列表中剔除。

2. weight
   根据权重来分发请求到不同的机器中，指定轮询几率，weight 和访问比率成正比，用于后端服务器性能不均的情况。

例如：

```
upstream bakend {
server 192.168.0.14 weight=10;
server 192.168.0.15 weight=10;
}
```

3. IP_hash#
   根据请求者 ip 的 hash 值将请求发送到后台服务器中，可以保证来自同一 ip 的请求被打到固定的机器上，可以解决 session 问题。

例如：

```
upstream bakend {
    ip_hash;
    server 192.168.0.14:88;
    server 192.168.0.15:80;
}
```

4. url_hash（第三方）#
   根据请求的 url 的 hash 值将请求分到不同的机器中，当后台服务器为缓存的时候效率高。

例如：

在 upstream 中加入 hash 语句，server 语句中不能写入 weight 等其他的参数，hash_method 是使用的 hash 算法

```
upstream backend {
    server squid1:3128;
    server squid2:3128;
    hash \$request_uri;
    hash_method crc32;
}
```

tips:

```
upstream bakend{#定义负载均衡设备的 Ip 及设备状态
ip_hash;
server 127.0.0.1:9090 down;
server 127.0.0.1:8080 weight=2;
server 127.0.0.1:6060;
server 127.0.0.1:7070 backup;
}
```

5. fair（第三方）#
   根据后台响应时间来分发请求，响应时间短的分发的请求多。

例如：

```
upstream backend {
    server server1;
    server server2;
    fair;
}
```

## 创建 centos 系统环境

1. 环境

```
# docker run -d  --name centos1  --net=host  --privileged=true centos  /usr/sbin/init

进入容器：
# docker exec -it centoss /bin/bash
```

```
docker  run -d -p 127.0.0.1:8080:80 --rm --name  mynginx  nginx
```

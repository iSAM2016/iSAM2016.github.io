# nginx

> 在 center os 的操作下

-   nginx 是一款轻量级的 HTTP 服务器，采用时间驱动的异步非阻塞方式处理框架，具有极好的 IO 性能，用于服务器的反向代理和负载均衡

*   卡员且性能高，可靠的 http 中间件代理服务器

## 最主要的场景

-   静态资源
-   API 服务
-   反向代理服务
    -   缓存
    -   负载均衡

## nginx 优势

-   高并发，高性能 IO 多路复用： 多个描述符的 IO 操作
-   可扩展性好
-   高可靠性
-   热部署
-   bsd 许可证

## NGINX 语法

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

## 常用命令

1. -c: 使用指定的配置文件
2. -g: 指定配置指令
3. -p: 指定运行目录
4. -s: 发送信号

添加配置一般在

`/usr/local/etc/nginx/servers/`

`- sudo brew services start nginx`

`- sudo nginx -s reload nginx`

-   配置 gzip on 响应头 content-encoding: gzip

```
gzip: on;
gzip_min_length: 1； 当文件小于1kb 的时候是不需要压缩的
gzip_comp_lelvel 2;
gzip_types
```

-   显示目录结构

```
location /{
    autoindex on;
}
```

## 位置

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

```
Nginx 配置信息
网站文件存放默认目录

/usr/share/nginx/html
网站默认站点配置

/etc/nginx/conf.d/default.conf
自定义 Nginx 站点配置文件存放目录

/etc/nginx/conf.d/
Nginx 全局配置

/etc/nginx/nginx.conf
Nginx 启动

nginx -c nginx.conf
```

nginx path prefix: "/usr/local/nginx"
nginx binary file: "/usr/local/nginx/sbin/nginx"
nginx configuration prefix: "/usr/local/nginx/conf"
nginx configuration file: "/usr/local/nginx/conf/nginx.conf"
nginx pid file: "/usr/local/nginx/logs/nginx.pid"
nginx error log file: "/usr/local/nginx/logs/error.log"
nginx http access log file: "/usr/local/nginx/logs/access.log"

## 创建 centos 系统环境

1. 环境

```
# docker run -d  --name centos1  --net=host  --privileged=true centos  /usr/sbin/init

进入容器：
# docker exec -it centoss /bin/bash
```

## 安装 nginx

```
yum -y install gcc gcc-c++ autoconf pcre pcre-devel make automake openssl openssl-devel  wget httpd-tools vim

<!-- yum -y install wget httpd-tools vim -->
```

`http://nginx.org/en/linux_packages.html`

```
[nginx]
name=nginx repo
baseurl=http://nginx.org/packages/centos/7/$basearch/
gpgcheck=0
enabled=1
```

## 查看 nginx 用到的命令

-   yum install nginx -y

*   rpm -ql nginx 查看 nginx 安装 所在是文件位置

*   nginx 启动 `systemctl start nginx`

*   程序所占的端口号

`ps -ef | grep nginx` 查看程序占用的端口
`netstat -lnp`

## nginx 配置

```
docker  run -d -p 127.0.0.1:8080:80 --rm --name  mynginx  nginx
```

配置`/etc/nginx/conf.d`
mac`/usr/local/etc/nginx/nginx.conf`

```
server {
    listen       80;
    server_name  localhost;

    #charset koi8-r;
    #access_log  /var/log/nginx/host.access.log  main;

    location / {
        root   /usr/share/nginx/html;
        index  index.html index.htm;
    }

    #error_page  404              /404.html;

    # redirect server error pages to the static page /50x.html
    #
    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
        root   /usr/share/nginx/html;
    }

    # proxy the PHP scripts to Apache listening on 127.0.0.1:80
    #
    #location ~ \.php$ {
    #    proxy_pass   http://127.0.0.1;
    #}

    # pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000
    #
    #location ~ \.php$ {
    #    root           html;
    #    fastcgi_pass   127.0.0.1:9000;
    #    fastcgi_index  index.php;
    #    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;
    #    include        fastcgi_params;
    #}

    # deny access to .htaccess files, if Apache's document root
    # concurs with nginx's one
    #
    # 允许正则访问
    #location ~ /\.ht {
        allow 127.0.0.1;
        # 禁用
    #    deny  all;
    #}
}
```

`nginx -s reload` 重新启动

反向代理

```
server{
    listen 80;
    server_name www.jw.cn;
    location / {
        proxy_pass http://localhost:3000;
    }
}
```

负载

```
upstream zfpx {
    server localhost:3000 weight
}
```

```

```

## 匹配如何发挥作用

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

-   精确匹配"/", 得到 index 页 为 index.htm（必须在/var/www/html/存在 index.htm, 才会进行下一步）
-   再次访问/index.htm 此时内部的 uri 为”/index.htm“,根为 /use/local/nginx/html
-   最终访问了 /use/local/nginx/html/index.htm

### 正则匹配

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

#nginx

> 在 center os 的操作下

- nginx 是一款轻量级的 HTTP 服务器，采用时间驱动的异步非阻塞方式处理框架，具有极好的 IO 性能，用于服务器的反向代理和负载均衡

* 卡员且性能高，可靠的 http 中间件代理服务器

## nginx 优势

- IO 多路复用： 多个描述符的 IO 操作

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

- yum install nginx -y

* rpm -ql nginx 查看 nginx 安装 所在是文件位置

* nginx 启动 `systemctl start nginx`

* 程序所占的端口号

`ps -ef | grep nginx` 查看程序占用的端口
`netstat -lnp`

## nginx 配置

```
docker  run -it -p 127.0.0.1:8080:80 --rm --name  mynginx  nginx
```

配置`/etc/nginx/conf.d`

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
        proxy_pass http:// loccalhost:3000
    }
}
```

负载

```
upstream zfpx {
    server localhost:3000 weight
}
```

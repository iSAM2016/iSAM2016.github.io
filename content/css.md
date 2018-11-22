

##### CSS

* 高度宽度成比例问题，使用padding-bottom 来实现

```
.box{
    width: 100%;
    height: 0;
    overflow: hidden;
    padding-bottom: 50%;
}

.item{
    width: 100%;
}
```

* 清除浮动

```
.clear{
    zoom: 1
}
.clear:after{
    overflow: hidden
    clear: both;
}
.clear:before, .clear: after{
    content: '',
  display: table;
}
```

* 居中

>固定宽度和长度
>没有固定长度和宽度

{
    display:  flex;
    justify-content:center;
    align-items: center;
}
{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%-50%)
}


{
    display: table-cell;
    vertical-align: middle
}

* 基本的两列自适应布局

* position实现左侧栏高度自适应，依右侧栏高度而定 ( 等高布局)

直接上图，左侧菜单只是显示部分，右侧的高度随时可能变化，要求：左侧栏的高度也跟随右侧栏一起变化！

方法：position:absolute; top:0; bottom:0;

使用position:absolute; 去定义顶部距离、底部距离，就可以让整个div的高度自适应了。

* 简述几个css hack?
    * 图片间隙:在div中插入图片，图片会将div下方撑大3px
        * 将div和img 写在同一行
        * 给img 添加dispaly: block

* href和scr 的区别？ title和alt
    * href 指定网路资源的位置
    * 是把资源嵌入到本地的页面当中，是页面不可缺少的一部分
    * title 是提供额外的说明
    * alt: 是代替的文字，图片无法使用的时候代替图片        
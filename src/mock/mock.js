import  Mock  from  'mockjs'
var Random = Mock.Random
Mock.mock('http://g.cn', {
      "array|1-10": [
    {
      
      "filed|+1": [
         /\d{5,10}\-/
      ],
      "createTime|+1": [
         Random.datetime()
      ],
      "name|+1": [
        "Hello",
        "Mock.js",
        "!"
      ],
      "folderId|+1": [
         /\d{5,10}\-/
      ],

      
    }
  ]
});


Mock.mock('http://g.rubishfiles', {
      "array|1-10": [
    {
      "name|+1": [
        "Hello",
        "Mock.js",
        "!"
      ]
    }
  ]
});
 

/*tools*/
Mock.mock('http://tools', {
   "array|8-10": [
    {
      "title|+1": [
        "Hello",
        
      ],
      "Context|+1": [
        "百迈客云画图工具平台集成了多款实用绘图工具，对用户的各种数据进行图形化展示，操作方便快捷，并可以修改绘图参数，对图片内容进行调整。目前可绘制图形包括热图、维恩图、circos图、网络图、kegg",
        
      ],
       "url|+1": [
        "./src/img/img_tubiao.png",
        
      ],

       "id|+1": [
        "12",
        
      ],

       "classification|+1": [
        "基因注释",
        
      ],

      
    }
  ]
});



/*searchtools*/
Mock.mock('http://searchtools', {
   "array|1-2": [
    {
      "title|+1": [
        "search",
        
      ],
      "Context|+1": [
        "百迈客云画图工具平台集成了多款实用绘图工具，对用户的各种数据进行图形化展示，操作方便快捷，并可以修改绘图参数，对图片内容进行调整。目前可绘制图形包括热图、维恩图、circos图、网络图、kegg/go分类及注释图、MA图、火山图、小提琴图、面积图、点线图、柱状图、饼图等百迈客云画图工具平台集成了多款实用绘图工具，对用户的各种数据进行图形化展示，操作方便快捷，并可以修改绘图参数，对图片内容进行调整。目前可绘制图形包括热图、维恩图、circos图、网络图、kegg/go分类及注释图、MA图、火山图、小提琴图、面积图、点线图、柱状图、饼图等。</p>",
        
      ],
       "url|+1": [
        "./src/img/img_tubiao.png",
        
      ],

       "id|+1": [
        "12",
        
      ],

       "classification|+1": [
        "基因注释",
        
      ],

      
    }
  ]
});


/*pagenums*/
Mock.mock('http://tool/allpage', {
    "pagesnum|1-3": 2
});


/*alltools*/
Mock.mock('http://alltools', {
   "array|1-2": [
    {
      "title|+1": [
        "Hello",
        
      ],
      "Context|+1": [
        "百迈客云画图工具平台集成了多款实用绘图工具，对用户的各种数据进行图形化展示，操作方便快捷，并可以修改绘图参数，对图片内容进行调整。目前可绘制图形包括热图、维恩图、circos图、网络图、kegg",
        
      ],
       "url|+1": [
        "./src/img/img_tubiao.png",
        
      ],

       "id|+1": [
        "12",
        
      ],

       "classification|+1": [
        "基因注释",
        
      ],

      
    }
  ]
});








/*$.ajax({
    url: 'http://alltools',
}).done(function(data, status, xhr){
    console.log(data)
    console.log(
        JSON.stringify(data, null, 4)
    )    
})
*/

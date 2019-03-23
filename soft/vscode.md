# 其他

[MarginNote X(Pro) Ma](https://www.zhinin.com/marginnote_pro-mac.html)
[Navicat Premium Mac 12 破解](https://blog.csdn.net/xhd731568849/article/details/79751188)

# vscode 配置

[vscode 插件推荐 - 献给所有前端工程师（2](https://segmentfault.com/a/1190000006697219)

2. 52e01e9ac52d7234b6bd62daab5315d4a91a40a9
3. id:8f2bb7e05a984d87d466889adb0b71ae
4. shift + alt + d

```
{

  // 图标样式
  "workbench.iconTheme": "vscode-icons",
  "workbench.sideBar.location": "right",
  // 字体
  "editor.fontSize": 14,
  // vscode避免rg.exe卡内存
  "search.followSymlinks": false,
  "beautify.language": {
    "js": {
      "type": [
        "javascript",
        "json",
        "jsonc",
        "jsx"
      ],
      "filename": [
        ".jshintrc",
        ".jsbeautifyrc"
      ]
    },
    "css": [
      "css",
      "scss"
    ],
    "html": [
      "htm",
      "html",
      "vue"
    ]
  },
  "files.associations": {
    "*.js": "javascriptreact",
    "*.cjson": "jsonc",
    "*.wxss": "css",
    "*.wxs": "javascript"
  },

  // 在默认不支持 Emmet 的语言中启用 Emmet 缩写功能。在此添加该语言与受支持的语言间的映射。
  // 示例: `{"vue-html": "html", "javascript": "javascriptreact"}`
  "emmet.includeLanguages": {
    "wxml": "html"
  },
  TODO://
  // 小程序自动配置项开启
  "minapp-vscode.disableAutoConfig": true,
  // 启用后，按下 TAB 键，将展开 Emmet 缩写。
  "emmet.triggerExpansionOnTab": true,
  // 控制在资源管理器内拖放移动文件或文件夹时是否进行确认。
  "explorer.confirmDragAndDrop": false,
  // Enable per-language
  "[javascript]": {
    "editor.formatOnSave": true
  },
  // An array of language ids which should be validated by ESLint
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    {
      "language": "html",
      "autoFix": true
    },
    {
      "language": "vue",
      "autoFix": true
    }
  ],

  // #region Prettier配置
  // 分号
  "prettier.semi": true,
  // 单引号
  "prettier.singleQuote": true,
  // prettier配置，tab空格为4
  "prettier.tabWidth": 4,
  // #endregion

  // 保存的时候自动格式化
  "eslint.autoFixOnSave": true,
  "editor.formatOnSave": true,
  // #region git bash终端调试
  // #endregion

  // vscode同步
  // todo
  "todohighlight.isEnable": true,
  // todo-tree
  "todo-tree.defaultHighlight": {
    "foreground": "green",
    "type": "none"
  },
  // todo-tree
  "todo-tree.customHighlight": {
    "TODO": {},
    "FIXME": {}
  },
  "fileheader.Author": "isam2016",
  "fileheader.LastModifiedBy": "isam2016",
  "workbench.colorTheme": "One Dark Pro"
}

```

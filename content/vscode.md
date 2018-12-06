# 配置
```
{
"workbench.activityBar.visible": true,
"workbench.sideBar.location": "right",
// 启用后，按下 TAB 键，将展开 Emmet 缩写。
"emmet.triggerExpansionOnTab": true,

    "gitlens.advanced.messages": {
      "suppressShowKeyBindingsNotice": true
    },
    "workbench.colorTheme": "One Dark Pro",
    // 保存时设置文件的格式。格式化程序必须可用，不能自动保存文件，并且不能关闭编辑器。
    "editor.formatOnSave": true,
    // Link file types to the beautifier type
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
    "explorer.confirmDelete": false,
    "px2rem.rootFontSize": 50,
    "explorer.confirmDragAndDrop": false,

    // Enable per-language
    "[javascript]": {
      "editor.formatOnSave": true
    },
    "emmet.includeLanguages": {
      "wxml": "html"
    },
    "minapp-vscode.disableAutoConfig": true

}

```
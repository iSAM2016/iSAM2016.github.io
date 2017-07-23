//导入工具包 require('node_modules里对应模块')
var fs = require('fs');
var path = require('path');
var gulp = require('gulp'); //  引入 gulp
var browserSync = require('browser-sync').create(); // browser-sync 实时刷新
var sourcemaps = require('gulp-sourcemaps'); // 源码压缩之后不易报错定位  sourcemaps用于错误查找
var minifycss = require('gulp-minify-css'); // 压缩css
var autoprefixer = require('gulp-autoprefixer'); // 处理浏览器私有前缀
var babel = require('gulp-babel'); // 编译ES6语法
var uglify = require('gulp-uglify'); // 压缩js
var imagemin = require('gulp-imagemin'); // 压缩图片
var contentIncluder = require('gulp-content-includer'); //通过includer导入方式导入不同的模块
var htmlmin = require('gulp-htmlmin'); // 压缩html
var cache = require('gulp-cache'); //清除缓存
var rev = require('gulp-rev'); //添加MD5
var plumber = require('gulp-plumber'); // 监控错误
var postcss = require('gulp-postcss');
var cssnext = require('cssnext'); //使用CSS未来的语法
var precss = require('precss'); //编写Sass的函数
var clean = require('gulp-clean');
var sass = require('gulp-sass'); // sass的编译
var cssnext = require('cssnext'); //使用CSS未来的语法
var precss = require('precss'); //编写Sass的函数
var gulpif = require('gulp-if'); // 条件判断
var stylus = require('gulp-stylus');
var notify = require('gulp-notify'); // 加控制台文字描述用的
var zip = require('gulp-zip'); // 自动打包并按时间重命名
var minimist = require('minimist');
var es2015 = require("babel-preset-es2015")
var jade = require('gulp-jade');
var base64 = require('gulp-base64');
var revCollector = require('gulp-rev-collector');
var runSequence = require('run-sequence');
var gulpif = require("gulp-if");
var reload = browserSync.reload;
var connect = require('gulp-connect');//livereload
var spritesmith = require("gulp-spritesmith");


/**
 * 错误输出
 * 
 * @param {any} error 
 */
var onError = function(error) {
  var title = error.plugin + ' ' + error.name;
  var msg = error.message;
  var errContent = msg.replace(/\n/g, '\\A '); // replace to `\A`, `\n` is not allowed in css content
  // system notification
  notify.onError({
    title: title,
    message: errContent,
    sound: true
  })(error);

  // prevent gulp process exit
  this.emit('end');
};

//CSS生成文件hash编码并生成 rev-manifest.json文件名对照映射  
gulp.task('revCss', function(){  
 var processors = [
    autoprefixer,
    cssnext,
    precss
  ];
  var AUTOPREFIXER_BROWSERS = [
    'last 6 version',
    'ie >= 6',
    'ie_mob >= 10',
    'ff >= 30',
    'chrome >= 34',
    'safari >= 7',
    'opera >= 23',
    'ios >= 7',
    'android >= 4.0',
    'bb >= 10'
  ];
return gulp.src(['app/**/css/**/*.scss','!app/public/css/*.scss','!app/public/css/*.css'])  
    .pipe(postcss(processors))
    .pipe(plumber(onError))
    .pipe(rev())  
    .pipe(sourcemaps.init())
    .pipe(base64({
      extensions: ['svg', 'png', 'jpg'],
      exclude: [/\.server\.(com|net)\/dynamic\//, '--live.jpg'],
      maxImageSize: 2 * 1024, // bytes
      debug: true
    }))
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer(AUTOPREFIXER_BROWSERS))
    .pipe(minifycss())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./rev/'))  
    .pipe(rev.manifest('css-manifest.json'))  
    .pipe(gulp.dest('./rev/')) 
;
});  


  
//js生成文件hash编码并生成 rev-manifest.json文件名对照映射  
gulp.task('revJs', function(){  
    return gulp.src(['app/**/js/**/*.js','!app/public/js/**/*.js'])  
        .pipe(plumber(onError))
        .pipe(rev())  
        .pipe(sourcemaps.init())
        .pipe(babel({
          presets: [es2015]
        }))
        .pipe(uglify())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./rev/'))  
        .pipe(rev.manifest('js-manifest.json'))                       //生成rev-mainfest.json文件作为记录  
        .pipe(gulp.dest('./rev/'))
  
}); 
gulp.task('templates', function() {
 var YOUR_LOCALS = {};
  var optionsSet = {
    removeComments: true, // 清除HTML注释
    collapseWhitespace: true, // 压缩HTML
    collapseBooleanAttributes: true, // 省略布尔属性的值 <input checked="true"/> ==> <input />
    removeEmptyAttributes: false, // 删除所有空格作属性值 <input id="" /> ==> <input />
    removeScriptTypeAttributes: false, // 删除<script>的type="text/javascript"
    removeStyleLinkTypeAttributes: false, // 删除<style>和<link>的type="text/css"
    minifyJS: true, // 压缩页面JS
    minifyCSS: true // 压缩页面CSS
  };

  gulp.src(['app/**/*.jade','!app/public/html/*.jade'])
    .pipe(plumber(onError))
    .pipe(jade({
      locals: YOUR_LOCALS
    }))
    .pipe(htmlmin(optionsSet))
    .pipe(gulp.dest('./rev'))

});

var csssPrites = function() {
  var folder = iconFolder();
  var folderName = folder.name;
  var folderSrc = folder.src;
  folderSrc.forEach(function(item, i) {
    var imgName = `images/icon/icon_${folderName[i]}.png`;
    var cssName = `css/icon_${folderName[i]}.scss`;
    return gulp.src(item) // 需要合并的图片地址
      .pipe(spritesmith({
        imgName: imgName, // 保存合并后图片的地址
        cssName: cssName, // 保存合并后对于css样式的地址
        padding: 10, // 合并时两个图片的间距
        algorithm: 'binary-tree', // 注释1
        cssTemplate: './cssTemplate.tpl' // 模板
          // cssTemplate: function (data) {
          //     var arr=[];
          //     data.sprites.forEach(function (sprite) {
          //         arr.push(".icon-"+sprite.name+
          //         "{" +
          //         "background-image: url('"+sprite.escaped_image+"');"+
          //         "background-position: "+sprite.px.offset_x+"px "+sprite.px.offset_y+"px;"+
          //         "width:"+sprite.px.width+";"+
          //         "height:"+sprite.px.height+";"+
          //         "}\n");
          //     });
          //     return arr.join("");
          // }
      }))
      .pipe(gulp.dest('src/assets/'));
  })
}
 
// 图片压缩  输出到目标目录
gulp.task('images', function() {
  gulp.src(['app/**/images/*.*',])
    .pipe(cache(imagemin({
      optimizationLevel: 3,
      interlaced: true,
      progressive: true
    })))
    .pipe(plumber(onError))
    .pipe(gulp.dest('rev/'))
});
/* 生成雪碧图 */
gulp.task('sprites', function() {
  return  gulp.src('app/public/icon/**/*.png')
    .pipe(spritesmith({
        imgName: 'sprite.png',
        styleName: 'sprite.css',
        imgPath: '../img/sprite.png'
    }))
    .pipe(gulpif('*.png', gulp.dest('rev/public/icon')))
    .pipe(gulpif('*.css', gulp.dest('rev/public/css')));
});
  
//Html替换css、js文件版本  
gulp.task('revHtmlCss', function () {  
    return gulp.src(['./rev/css-manifest.json', './rev/**/*.html'])  
        .pipe(plumber(onError))
        .pipe(revCollector())                         //替换html中对应的记录  
        .pipe(gulp.dest('./rev'))                     //输出到该文件夹中  

});  
gulp.task('revHtmlJs', function () {  
    return gulp.src(['./rev/js-manifest.json', './rev/**/*.html'])  
        .pipe(plumber(onError))
        .pipe(revCollector())  
        .pipe(gulp.dest('./rev'))
        .pipe(connect.reload());
; 
});  
gulp.task('clean', function () {
    return gulp.src('rev/', {read: false})
        .pipe(clean());
});  

// 拷贝 public下面的js
gulp.task('copyJs', function() {
  gulp.src('app/public/js/**/*.js', {
      base: 'app/public/'
    })
    .pipe(uglify({
      mangle: true, //fasle不混淆变量名 true为混淆
      preserveComments: 'some' //不删除注释，还可以为 false（删除全部注释），some（保留@preserve @license @cc_on等注释）
    }))
    .pipe(gulp.dest('rev/public'))
});

// 拷贝 public下面的css
gulp.task('copyCss', function() {
  gulp.src('app/public/css/**/*.css', {
      base: 'app/public/'
    })
    .pipe(gulp.dest('rev/public'))
});
 //定义livereload任务
 gulp.task('connect', function () {
     connect.server({
         livereload: true
     });
 });
 
//开发构建  
gulp.task('default', function (done) {  
    condition = false;  

    //依次顺序执行  
    runSequence( 
        ['clean'],
        ['templates'], 
        ['revCss'],  
        ['revHtmlCss'],  
        ['revJs'],  
        ['revHtmlJs'],
        ['copyJs'],
        ['copyCss'],
        ['images'],
        ['sprites'],
        ['connect'],  
        done);  
    gulp.watch("app/**/*.jade", function() {
        runSequence( 
        ['templates'], 
        ['revCss'],  
        ['revHtmlCss'],  
        ['revJs'],  
        ['revHtmlJs']
        )
    });
    gulp.watch("app/**/css/*.scss",function() {
           runSequence( 
        ['templates'], 
        ['revCss'],  
        ['revHtmlCss'],  
        ['revJs'],  
        ['revHtmlJs']
        )
    });
    gulp.watch("app/**/js/*.js", function() {
             runSequence( 
        ['templates'], 
        ['revCss'],  
        ['revHtmlCss'],  
        ['revJs'],  
        ['revHtmlJs']
        )
    });
});




//gulp.task(name[, deps], fn) 定义任务  name：任务名称 deps：依赖任务名称 fn：回调函数
//gulp.src(globs[, options]) 执行任务处理的文件  globs：处理的文件路径(字符串或者字符串数组) 
//gulp.dest(path[, options]) 处理完后文件生成路径
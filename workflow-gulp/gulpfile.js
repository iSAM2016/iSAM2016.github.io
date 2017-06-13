/*
 * @Author: huangzexia
 * @Date:   2016-08-17 10:25:09
 * @Last Modified by:   huangzexia
 * @Last Modified time: 2017-01-11 16:27:54
 */
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
var rev = require('gulp-rev-append'); //添加MD5
var plumber = require('gulp-plumber'); // 监控错误
var postcss = require('gulp-postcss');
var sass = require('gulp-sass'); // sass的编译
var cssnext = require('cssnext'); //使用CSS未来的语法
var precss = require('precss'); //编写Sass的函数
var gulpif = require('gulp-if'); // 条件判断
var stylus = require('gulp-stylus');
var notify = require('gulp-notify'); // 加控制台文字描述用的
var zip = require('gulp-zip'); // 自动打包并按时间重命名
var minimist = require('minimist');
var reload = browserSync.reload;
var webpack = require('gulp-webpack')
var es2015 = require("babel-preset-es2015")
  // 区分开发和生产环境
var knownOptions = {
  string: 'env',
  default: {
    env: process.env.NODE_ENV || 'development'
  }
};
var options = minimist(process.argv.slice(2), knownOptions);



// 静态服务器 + 监听 scss/html/js/images 文件
gulp.task('server', ['css', "html", "copyJs", "js", "images"], function() {
  browserSync.init({
    server: "./dest"
  });
  gulp.watch("src/module/**/css/*.scss", ['css']);
  gulp.watch("src/module/**/*.html", ['html']);
  gulp.watch("src/module/public/**/*", ['copyJs']);
  gulp.watch("src/module/**/js/*.js", ['js']);
  gulp.watch("src/module/**/images/*.*", ['images']);
  gulp.watch("*.html").on('change', browserSync.reload);
});
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
/**
 * 获取获取文件名字和路径
 * @returns 
 */
var iconFolder = function() {
    var filesSrc = []; // 文件路径
    var filesName = []; // 文件名字

    // 遍历获取文件名字和路径
    fs.readdirSync(srcDir).forEach(function(file, i) {
      var reg = /\.(png|jpg|gif|ico)/g;
      var isImg = file.match(reg);
      // 判读是  file.indexOf('sprite') != -1
      if (!isImg) {
        filesName.push(file);
        filesSrc.push(path.resolve(srcDir, file, '*.{png,jpg}'));
      }
    });
    // 返回文件名字和路径
    return {
      'name': filesName,
      'src': filesSrc
    };;
  }
  /**
   * 
   * 支持多个文件夹编译生成雪碧图
   * 雪碧图制作规定要求
   * 在images文件夹下icon文件夹,新建一个文件夹就可以
   * 
   */
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
  /*// 编译压缩css 输出到目标目录
  gulp.task('css', function() {
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
    gulp.src(['src/module/**/
  /*.css', 'src/module/public/css/*.css'])
      .pipe(postcss(processors))
      .pipe(autoprefixer({
        browsers: AUTOPREFIXER_BROWSERS,
        cascade: true
      }))
      .pipe(minifycss())
      .pipe(sourcemaps.init())
      .pipe(sourcemaps.write())
      .pipe(gulp.dest('dest/'))
      .pipe(browserSync.stream());

  })
  */

// External sourcemaps 
gulp.task('css', function() {
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
  return gulp
    .src('src/module/**/css/*.scss')
    .pipe(postcss(processors))
    .pipe(plumber(onError))
    .pipe(sass())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer(AUTOPREFIXER_BROWSERS))
    .pipe(minifycss())
    .pipe(sourcemaps.init())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dest/'))
    .pipe(browserSync.stream());
});

// 编译压缩js 输出到目标目录
gulp.task('js', function() {
  gulp.src(['src/module/**/js/*.es6', '!src/module/public/js/*.es6'])
    .pipe(plumber(onError))
    .pipe(sourcemaps.init())
    .pipe(babel({
      presets: [es2015]
    }))
    .pipe(gulp.dest("./dest")) //es6转js必须在webpack之前，否则webpack找不到要包装的js会报错
    .pipe(webpack({ //babel编译import会转成require，webpack再包装以下代码让代码里支持require
      output: {
        filename: "all.js",
      },
      stats: {
        colors: true
      }
    }))
    .pipe(uglify())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dest/'))
    .pipe(browserSync.stream());
});

// 图片压缩  输出到目标目录
gulp.task('images', function() {
  gulp.src(['src/module/**/images/*.*', 'src/module/public/images/*.*'])
    .pipe(cache(imagemin({
      optimizationLevel: 3,
      interlaced: true,
      progressive: true
    })))
    .pipe(plumber(onError))
    .pipe(gulp.dest('dest/'))
    .pipe(browserSync.stream());
});
/* 生成雪碧图 */
gulp.task('sprites', function() {
  // 执行任务
  csssPrites();
});

// 拷贝 html
gulp.task('html', function() {
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
  gulp.src(['src/module/**/*.html', 'src/module/*.html', '!src/module/public/html/*.html'])
    .pipe(contentIncluder({
      includerReg: /<!\-\-include\s+"([^"]+)"\-\->/g
    }))
    .pipe(plumber(onError))
    .pipe(htmlmin(optionsSet))
    .pipe(rev())
    .pipe(gulp.dest('dest/'))
    .pipe(browserSync.stream());
});


// 拷贝 public下面的js
gulp.task('copyJs', function() {
  gulp.src('src/module/public/js/**/*', {
      base: 'src/module/public/'
    })
    .pipe(uglify({
      mangle: true, //fasle不混淆变量名 true为混淆
      preserveComments: 'some' //不删除注释，还可以为 false（删除全部注释），some（保留@preserve @license @cc_on等注释）
    }))
    .pipe(gulp.dest('dest/public'))
    .pipe(browserSync.stream());
});


/* build 打包项目 */
gulp.task('build', function() {
  gulp.start('zip', function() {
    gutil.log(gutil.colors.green('Message：Project package is complete'));
  });
});
/* zip 压缩包 */
gulp.task('zip', function() {
  /**
   * 补零
   * @param {any} i
   * @returns
   */
  function checkTime(i) {
    if (i < 10) {
      i = '0' + i;
    }
    return i;
  }
  var d = new Date();
  var year = d.getFullYear();
  var month = checkTime(d.getMonth() + 1);
  var day = checkTime(d.getDate());
  var hour = checkTime(d.getHours());
  var minute = checkTime(d.getMinutes());
  var time = String(year) + String(month) + String(day) + String(hour) + String(minute);
  var build = 'build-' + time + '.zip';

  return gulp
    .src('dest/**/*')
    .pipe(plumber(onError))
    .pipe(zip(build))
    .pipe(gulp.dest('dist'))
    .pipe(notify({
      message: 'Zip task complete'
    }));
});
//执行默认任务
gulp.task('default', ['server'])
const gulp = require('gulp');
const sass = require('gulp-sass');
const webserver = require('gulp-webserver');
const webpack = require('webpack-stream');
const watch = require('gulp-watch');
const del = require('del');

const config = require('./config');
const {webpack_config,server_config,sass_config} = config;

//同步html文件
gulp.task('copy:html',()=>{
    return gulp.src('./src/**/*.html')
        .pipe(gulp.dest('./dev/'))
})
//同步静态文件
gulp.task('copy:static',()=>{
    return gulp.src('./src/static/**/*.*')
            .pipe(gulp.dest('./dev/static'))
})
//编译输出sass
gulp.task('compile:sass',()=>{
    return gulp.src('./src/stylesheets/**/*.scss')
           .pipe(sass(sass_config).on('error', sass.logError))
           .pipe(gulp.dest('./dev/stylesheets'))
})
//利用webpack模块化压缩输出js
gulp.task('compile:js',()=>{
    return gulp.src('./src/javaScript/**/*.js')
        .pipe(webpack(webpack_config))
        .pipe(gulp.dest('./dev/javaScript/'));
})
//开启服务器
gulp.task('server',()=>{
    gulp.src('./dev')
        .pipe(webserver(server_config))
})

//监听文件更新
gulp.task('watch',()=>{
    gulp.watch('./src/**/*.html',['copy:html'])
    gulp.watch('./src/stylesheets/*.scss',['compile:sass'])
    gulp.watch('./src/javaScript/**/*.*',['compile:js']) //不管什么类型的文件夹变化都要 更新js 防止views更新 controller没有更新
    gulp.watch('./src/static/**/*.*',['copy:static'])

    watch('src/static',(v)=>{  // 当src/static中文件变化后执行
        console.log(v);
        if ( v.event === 'unlink' ) { // 如果文件删除了
            let _path = v.history[0].replace('\src', '\dev'); // 要删除的路径
            del(_path);// 删除dist中的文件
        }else {
            gulp.start(['copy:static'])
        }
    })

    watch('src/**/*.html',(v)=>{    //不能加./
        console.log(v);
        if ( v.event === 'unlink' ) { 
            let _path = v.history[0].replace('\src', '\dev'); 
            del(_path);
        }else {
            gulp.start(['copy:html'])
        }
    })
})
//gulp 默认事件
gulp.task('default',['watch','copy:html','copy:static',"compile:sass",'compile:js','server'],()=>{
    console.log("ok");
})
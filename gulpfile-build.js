const gulp = require('gulp');
const sass = require('gulp-sass');
const webpack = require('webpack-stream');
const rev = require('gulp-rev');
var revCollector = require('gulp-rev-collector');
var gulpSequence = require('gulp-sequence');
const autoprefixer = require('gulp-autoprefixer');
const htmlmin = require('gulp-htmlmin');

const config = require('./config/index_build');
const {webpack_config,sass_config} = config;

//同步html文件
gulp.task('copy:html',()=>{
    // return gulp.src('./src/**/*.html')
    //     .pipe(gulp.dest('./dist/'))
    return gulp.src(['./dist/rev/**/*.json', './src/**/*.html'])
        .pipe(htmlmin({
            collapseWhitespace: true,
            collapseInlineTagWhitespace: true
        }))
        .pipe( revCollector() )
        .pipe( gulp.dest('dist'))
})
//同步静态文件
gulp.task('copy:static',()=>{
    return gulp.src('./src/static/**/*.*')
            .pipe(gulp.dest('./dist/static'))
})
//编译输出sass
gulp.task('compile:sass',()=>{
    return gulp.src('./src/stylesheets/**/*.scss')
           .pipe(sass(sass_config).on('error', sass.logError))
           .pipe(autoprefixer({
                browsers: ['last 2 versions'],
                cascade: false
            }))
           .pipe(rev())
           .pipe(gulp.dest('./dist/stylesheets'))
           .pipe(rev.manifest())
            .pipe(gulp.dest('./dist/rev/css/')) 
})
//利用webpack模块化压缩输出js
gulp.task('compile:js',()=>{
    return gulp.src('./src/javaScript/**/*.js')
        .pipe(webpack(webpack_config))
        .pipe(rev())
        .pipe(gulp.dest('./dist/javaScript/'))
        .pipe(rev.manifest())
        .pipe(gulp.dest('./dist/rev/javascript/')) 
})

//gulp 默认事件
// gulp.task('default',['copy:html','copy:static',"compile:sass",'compile:js'],()=>{
//     console.log("ok");
// })

gulp.task('default', function (cb) {
    gulpSequence(['copy:static',"compile:sass",'compile:js'], 'copy:html')(cb)
  })
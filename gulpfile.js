/* 
* @Author: Marte
* @Date:   2017-11-10 16:38:54
* @Last Modified by:   Marte
* @Last Modified time: 2017-11-11 16:50:39
*/

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('compileSass',function(){
    gulp.src('./src/sass/*.scss').pipe(sass({outputStyle:'expanded'}).on('error',sass.logError)).pipe(gulp.dest('./src/css/'));
});

gulp.task('jtSass',function(){
    gulp.watch('./src/sass/*.scss',['compileSass']);
});
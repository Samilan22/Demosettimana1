var jshint = require('gulp-jshint');
var gulp = require('gulp');
var gutil = require('gulp-util');


gulp.task('jshint', function(){
    return gulp.src('demosettimana1/*js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('default', function(){
    return gutil.log('gulp è in esecuzione');
});

gulp.task('copiaHTML', function(){
    gulp.src('demosettimana/*html').pipe(gulp.dest('distribuzione'));
});

gulp.task('copiaCSS', function(){
    gulp.src('demosettimana/Style.css').pipe(gulp.dest('distribuzione'));
});

gulp.task('copiaJavaScript', function(){
    gulp.src('demosettimana/*js').pipe(gulp.dest('distribuzione'));
});
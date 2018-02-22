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


gulp.task('copiaFile', function(){
    gulp.src('*.html','*.js','*.css').pipe(gulp.dest('distribuzione'));
});


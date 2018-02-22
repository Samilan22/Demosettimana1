var jshint = require('gulp-jshint');

gulp.task('jshint', function(){
    return gulp.src('demosettimana1/*js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

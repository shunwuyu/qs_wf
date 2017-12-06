let gulp = require('gulp');
let cleanCSS = require('gulp-clean-css');
 
gulp.task('default',() => {
  return gulp.src('./styles/*.css')
    .pipe(cleanCSS())
    .pipe(gulp.dest('dist'));
});
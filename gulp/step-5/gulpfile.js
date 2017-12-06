var gulp = require('gulp'),
  babel = require('gulp-babel'),
  cleanCSS = require('gulp-clean-css'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify');

gulp.task('jsmin', function () {
    return gulp.src(['src/js/main.js','src/js/moon.js', 'src/js/star.js'])
        .pipe(babel({
            "presets": ["env"]
        }))
        .pipe(concat('all.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js/'));
});

gulp.task('cssmin', function () {
    return gulp.src(['src/styles/common.css', 'src/styles/btn.css'])
        .pipe(concat('all.css'))
        .pipe(cleanCSS())
        .pipe(gulp.dest('dist/css/'));
});

gulp.task('watch', ['jsmin', 'cssmin'], function() {
  gulp.watch('./src/js/*.js', ['jsmin']);
  gulp.watch('./src/styles/*.css', ['cssmin']);
})

gulp.task('default', ['watch']);

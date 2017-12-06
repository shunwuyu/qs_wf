var gulp = require('gulp'),
    babel = require('gulp-babel'),
    uglify = require('gulp-uglify');
 
// gulp.task('default', function () {
//     gulp.src('src/main.js')
//         .pipe(babel({
//             "presets": ["env"]
//         }))
//         .pipe(uglify())
//         .pipe(gulp.dest('dist/'));
// });

// 多个文件 
gulp.task('default', function () {
    gulp.src('src/*.js')
        .pipe(babel({
            "presets": ["env"]
        }))
        .pipe(uglify())
        .pipe(gulp.dest('dist/'));
});
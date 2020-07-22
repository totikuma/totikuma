const gulp = require('gulp');
gulp.task('default',(callback) => {
 console.log("Hello World!");
 return callback();
});

const sass = require('gulp-sass');
gulp.task('sass', () => {
 return gulp.src('*.scss')
 .pipe(sass())
 .pipe(gulp.dest('.'));
});

gulp.task('watch', ()=> {
    gulp.watch('*.scss', gulp.series('sass'))
   });
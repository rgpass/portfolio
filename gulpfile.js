var gulp = require('gulp');
var sass = require('gulp-sass');

var distPath = './dist';
var scssPaths = './stylesheets/**/*.scss';

gulp.task('sass', function compileSass() {
  return gulp.src(scssPaths)
    .pipe(sass())
    .pipe(gulp.dest(distPath + '/css'));
});

gulp.task('watch', function watchForChanges() {
  gulp.watch(scssPaths, ['sass']);
});

gulp.task('serve', ['sass', 'watch']);

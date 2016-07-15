var gulp = require('gulp');
var sass = require('gulp-sass');
var babel = require('gulp-babel');

var distPath = './dist';
var scssPaths = './stylesheets/**/*.scss';
var jsPaths = './javascripts/**/*.js';
var imgPaths = './images/**/*.*';
var pathsToCopy = [imgPaths];

gulp.task('sass', function compileSass() {
  return gulp.src(scssPaths)
    .pipe(sass())
    .pipe(gulp.dest(distPath + '/css'));
});

gulp.task('es6', function transpileJS() {
  return gulp.src(jsPaths)
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest(distPath + '/js'));
});

gulp.task('copy-images', function copyFiles() {
  return gulp.src(pathsToCopy)
    .pipe(gulp.dest(distPath + '/img'));
});

gulp.task('watch', function watchForChanges() {
  gulp.watch(scssPaths, ['sass']);
  gulp.watch(jsPaths, ['es6']);
});

gulp.task('serve', ['sass', 'es6', 'copy-images', 'watch']);

gulp.task('default', ['serve']);

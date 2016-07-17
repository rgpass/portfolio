var gulp = require('gulp');
var sass = require('gulp-sass');
var babel = require('gulp-babel');
var browserSync = require('browser-sync').create();

var distPath = './dist';
var scssPaths = './stylesheets/**/*.scss';
var jsPaths = './javascripts/**/*.js';
var imgPaths = './images/**/*.*';
var viewPaths = './views/**/*.ejs';
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
  browserSync.init({
    proxy: 'http://localhost:3000'
  });

  gulp.watch(scssPaths, ['sass']).on('change', browserSync.reload);
  gulp.watch(jsPaths, ['es6']).on('change', browserSync.reload);
  gulp.watch(viewPaths).on('change', browserSync.reload);
});

gulp.task('serve', ['sass', 'es6', 'copy-images', 'watch']);

gulp.task('default', ['serve']);

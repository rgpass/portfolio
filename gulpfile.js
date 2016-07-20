const gulp = require('gulp');
const clean = require('gulp-clean');
const sass = require('gulp-sass');
const babel = require('gulp-babel');
const sync = require('run-sequence');
const browserSync = require('browser-sync').create();

const path = {
  dist: './dist',
  scss: './stylesheets/**/*.scss',
  js: './javascripts/**/*.js',
  img: './images/**/*.*',
  views: './views/**/*.ejs'
};
const pathsToCopy = [path.img];

gulp.task('clean', function cleanDist() {
  return gulp.src(path.dist, { read: false })
    .pipe(clean());
});

gulp.task('sass', function compileSass() {
  return gulp.src(path.scss)
    .pipe(sass())
    .pipe(gulp.dest(path.dist + '/css'));
});

gulp.task('es6', function transpileJS() {
  return gulp.src(path.js)
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest(path.dist + '/js'));
});

gulp.task('copy-images', function copyFiles() {
  return gulp.src(pathsToCopy)
    .pipe(gulp.dest(path.dist + '/img'));
});

gulp.task('watch', function watchForChanges() {
  browserSync.init({
    proxy: 'http://localhost:3000',
    open: false,
    ghostMode: false
  });

  gulp.watch(path.scss, ['sass']).on('change', browserSync.reload);
  gulp.watch(path.js, ['es6']).on('change', browserSync.reload);
  gulp.watch(path.views).on('change', browserSync.reload);
});

gulp.task('build', function build(done) {
  sync('clean', 'sass', 'es6', 'copy-images', done);
});

gulp.task('serve', function serve(done) {
  sync('build', 'watch', done);
});

gulp.task('default', ['serve']);


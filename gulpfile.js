'use strict';

var gulp          = require('gulp'),
    browserSync   = require('browser-sync').create(),
    sass          = require('gulp-sass');

// Browser Sync
gulp.task('browser-sync', function() {
  browserSync.init({
    proxy: 'localhost:2000',
    open: false
  });
});

// Sass task
// Compile Our Sass from the 'scss' directory
gulp.task('sass', function () {
  return gulp.src(['./scss/*.scss', '!./scss/_*.scss'])
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(gulp.dest('./stylesheets'))
    .pipe(browserSync.stream());
});

// Use Sass, watch & Browser Sync in the default task. Watching HTML, JS & YAML.
gulp.task('default', ['sass', 'browser-sync'], function(){
  gulp.watch(['scss/**/*.scss'], ['sass']);
  gulp.watch('views/**/*.html').on('change', browserSync.reload);
  gulp.watch('**/*.yml').on('change', browserSync.reload);
  gulp.watch('javascripts/**/*.js').on('change', browserSync.reload);
});

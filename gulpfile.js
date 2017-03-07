'use strict';

var gulp          = require('gulp'),
    sass          = require('gulp-sass');

// Sass task
// Compile Our Sass from the "scss" directory
gulp.task('sass', function () {
  gulp.src(['./scss/*.scss','!./scss/_*.scss'])
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(gulp.dest('./stylesheets'));
});

gulp.task('default',['sass'], function(){
  gulp.watch(['scss/**/*.scss'], ['sass']);
});

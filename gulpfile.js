let gulp   = require('gulp'),
    gutil = require('gulp-util'),
    jshint = require('gulp-jshint'),
    sass   = require('gulp-sass'),
    concat     = require('gulp-concat'),
    sourcemaps = require('gulp-sourcemaps'),
    uglify = require('gulp-uglify'),
    input  = {
      'sass': 'scss/*.scss',
      'javascript': 'js/*.js'
    },
    output = {
      'stylesheets': 'stylesheets',
      'javascript': 'javascript'
    };


// define the default task and add the watch task to it
gulp.task('default', ['watch']);

//LINT JS TASK
gulp.task('jshint', function() {
  return gulp.src(input.javascript)
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

//SASS TASK
gulp.task('build-css', function() {
  return gulp.src(input.sass)
    .pipe(sass())
    .pipe(gulp.dest(output.stylesheets));
});

//CONCAT JS + UGLIFY JS FOR PROD ENVIRONMENT
gulp.task('build-js', function() {
  return gulp.src(input.javascript)
    .pipe(sourcemaps.init())
      .pipe(concat('bundle.js'))
      //only uglify if gulp is ran with '--type production'
      .pipe(gutil.env.type === 'production' ? uglify() : gutil.noop()) 
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(output.javascript));
});

//WATCH TASKS
gulp.task('watch', function() {
  gulp.watch(input.javascript, ['jshint', 'build-js']);
  gulp.watch(input.sass, ['build-css']);
});
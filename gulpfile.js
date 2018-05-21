let gulp   = require('gulp'),
    gutil = require('gulp-util'),
    jshint = require('gulp-jshint'),
    sass   = require('gulp-sass'),
    concat     = require('gulp-concat'),
    sourcemaps = require('gulp-sourcemaps'),
    uglify = require('gulp-uglify'),
    babel = require('gulp-babel'),
    imagemin = require('gulp-imagemin'),
    webp = require('gulp-webp'),
    input  = {
      'sass': 'scss/*.scss',
      'javascript': 'js/*.js'
    },
    output = {
      'stylesheets': 'dist/css',
      'javascript': 'dist/js'
    };


// define the default task and add the watch task to it
gulp.task('default', ['watch']);

gulp.task('copy-index', function() {
  gulp.src('./index.html')
    .pipe(gulp.dest('./dist'));
});

gulp.task('copy-imgs', function() {
  gulp.src('img/*')
    .pipe(imagemin())
    .pipe(webp())
    .pipe(gulp.dest('dist/img'));
});

//LINT JS TASK
gulp.task('jshint', function() {
  return gulp.src(input.javascript)
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

//SASS TASK
gulp.task('build-css', function() {
  return gulp.src(input.sass)
    .pipe(sass({
      outputStyle: 'compressed'
    }).on('error', sass.logError))
    .pipe(gulp.dest(output.stylesheets));
});

gulp.task('build-js', function() {
  return gulp.src(input.javascript)
    .pipe(sourcemaps.init())
    .pipe(concat('bundle.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(output.javascript));
});

//CONCAT JS + UGLIFY JS FOR PROD ENVIRONMENT
gulp.task('build-js-prod', function() {
  return gulp.src(input.javascript)
    .pipe(sourcemaps.init())
    .pipe(concat('bundle-min.js'))
    .pipe(babel({
      presets: ['es2015']
    }).on('error', function(e){
      console.log(e);
    }))
    .pipe(uglify().on('error', function(e){
      console.log(e);
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(output.javascript));
});

//WATCH TASKS
gulp.task('watch', function() {
  gulp.watch(input.javascript, ['jshint', 'build-js', 'build-js-prod']);
  gulp.watch(input.sass, ['build-css']);
  gulp.watch('/index.html', ['copy-html']);
});
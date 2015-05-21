var gulp = require('gulp'),
    del = require('del'),
    requirejsOptimize = require('gulp-requirejs-optimize')
    requireJsConfig = require('./app/js/requireJsConfig'),
    server = require('gulp-express'),
    less = require('gulp-less'),
    path = require('path'),
    minifyCSS = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    LessPluginCleanCSS = require('less-plugin-clean-css'),
    runSequence = require('run-sequence').use(gulp),
    cleancss = new LessPluginCleanCSS({ advanced: true });

var files = {
      data: ['app/data/**/*'],
      images: ['app/images/**/*'],
      html: ['app/js/html/**/*'],
      fonts: ['app/fonts/**/*'],
      otherStatic: ['app/*.html', 'app/*.xml', 'app/*.ico', 'app/*.txt']
    };


gulp.task('requirejsBuild', function() {
  gulp.src('app/js/app.js')
    .pipe(requirejsOptimize({
            optimize: 'none',
            baseUrl: 'app/js',
            name: 'index',
            out: 'app.js',
            paths: requireJsConfig.paths,
            shim: requireJsConfig.shim,
            optimize: "uglify2"
        }))
    .pipe(gulp.dest('.build/app/dist'));
});

gulp.task('copy', function() {
  gulp.start('copy:staticFiles', 'copy:components', 'copy:serverFiles');
});

gulp.task('copy:serverFiles', function() {
  gulp.src(['server.js', 'DB.js'])
      .pipe(gulp.dest('.build/'));
});

gulp.task('copy:staticFiles', function() {
  gulp.src(files.data)
      .pipe(gulp.dest('.build/app/data'));

  gulp.src(files.images)
      .pipe(gulp.dest('.build/app/images'));

  gulp.src(files.html)
      .pipe(gulp.dest('.build/app/js/html'));

  gulp.src(files.fonts)
      .pipe(gulp.dest('.build/app/fonts'));

  gulp.src(files.otherStatic)
      .pipe(gulp.dest('.build/app'));
});

gulp.task('copy:components', function() {
  gulp.src(['app/components/**/*'])
      .pipe(gulp.dest('.build/app/components'));
});

gulp.task('clean', function (cb) {
  del(['.build'], cb);
});

gulp.task('less', function () {
  gulp.src('app/less/main.less')
    .pipe(less({
      plugins: [cleancss],
      paths: [ path.join(__dirname, 'less', 'includes') ],
    }))
    .pipe(minifyCSS())
    .pipe(rename('main.min.css'))
    .pipe(gulp.dest('.build/app/dist'));
});

gulp.task('server', function () {
  server.run(['server.js']);
});

// Watch Files For Changes
gulp.task('watch', function() {
    // gulp.watch('server.js', ['copy', 'server']);
    gulp.watch('app/less/**/*.less', ['less']);
    gulp.watch('app/**/*.js', ['requirejsBuild']);
    gulp.watch('app/components/**/*', ['copy:components']);
    gulp.watch([files.data, files.images, files.html, files.otherStatic, files.fonts], ['copy:staticFiles']);
});

gulp.task('default', ['clean'], function(cb){
  runSequence('requirejsBuild', 'less', 'copy', 'server', 'watch');
});

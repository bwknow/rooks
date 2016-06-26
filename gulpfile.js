
var gulp = require('gulp'),   
    sass = require('gulp-sass'),
    connect = require('gulp-connect'),
    autoprefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat'),
    sourcemaps = require('gulp-sourcemaps'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    open = require('gulp-open'),
    gutil = require('gulp-util'),
    strip = require('gulp-strip-comments'),
    liveserver = require('gulp-live-server');

var outputDir = "www";

var paths = {
    vendorjs: 'www/js/vendor',
    views: 'www/views',
    scripts: 'www/scripts',
    javascript: 'www/js',
    images: 'www/images',
    fonts: 'www/fonts',
    stylesheets: 'www/css',
    media: 'www/media',
    data: 'www/data',
    root: 'www'
};

gulp.task('scripts', function() {
    return gulp.src('workspace/scripts/**/*.*')
        .pipe(sourcemaps.write())    
        .pipe(gulp.dest(paths.scripts)) 
});


gulp.task('javascript', function() {
    return gulp.src('workspace/js/*.js')
        .pipe(concat('app.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(paths.javascript))
});

gulp.task('views', function() {
    return gulp.src('workspace/views/*.*')
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(paths.views))            
});

gulp.task('vendorjs', function() {
    return gulp.src('workspace/js/vendor/*.*')
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(paths.vendorjs))            
});


gulp.task('home', function() {
    var opts = {
        conditionals: true,
        spare: true
    };
    return gulp.src(['workspace/*.html'])
        .pipe(gulp.dest(paths.root));
});

gulp.task('data', function() {
    return gulp.src(['workspace/data/*.*'])
        .pipe(gulp.dest(paths.data));
});

gulp.task('sass', function() {
    var config = {};

    // output options: nested, compact, compressed, expanded

    config.outputStyle = 'compact';

    return gulp.src('workspace/sass/app.scss')
        .pipe(sass(config))
        .pipe(strip())
        .pipe(autoprefixer({
            browsers: ['> 1%', 'last 2 versions', 'Firefox ESR', 'Opera 12.1'],
            cascade: false
        }))
        .pipe(gulp.dest(paths.stylesheets));
});

gulp.task('images', function() {
    return gulp.src('workspace/images/**/*.*')
            .pipe(gulp.dest(paths.images));
});

gulp.task('fonts', function() {
    return gulp.src('workspace/fonts/**/*.*')
        .pipe(gulp.dest(paths.fonts));
});

gulp.task('connect', function() {
    return connect.server({
        root: [outputDir],
        port: 8080, 
        livereload: true,
        open: {
            browser: 'Google Chrome'
        }
    });
});﻿

gulp.task('server', function() {
    var server = liveserver.static();
    server.start();
});


gulp.task('watch', function() {
    gulp.watch('workspace/sass/**/*.scss', ['sass']);
    gulp.watch('workspace/*.html', ['home']);
    gulp.watch('workspace/js/*.js', ['javascript']);
    gulp.watch('workspace/scripts/**/*.js', ['scripts']);
    gulp.watch('workspace/views/*.html', ['views']);
    gulp.watch('workspace/data/*.*', ['data']);
    gulp.watch('workspace/images/**/*.*', ['images']);
});


gulp.task('default', ['data','vendorjs','fonts','connect','sass','javascript','views','scripts','home','watch','images']);




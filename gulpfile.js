var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var babel= require('gulp-babel'); 

var paths = {
    jsSource: ['./public/app/**/*.js'],
    cssSource: ['./public/app/**/*.css'],
    viewSource: ['./public/**/*.html'],
    img: ['./public/app/images/**/*.*']
};

gulp.task('js', function(){
    gulp.src(paths.jsSource)
    .pipe(annotate())
    .pipe(babel({
        presets: ['env']
    }))
    .pipe(concat('bundle.js'))
    .pipe(gulp.dest('./dist'));
});

gulp.task('css', function(){
    gulp.src(paths.cssSource)
    .pipe(sass())
    .pipe(concat('bundle.css'))
    .pipe(gulp.dest('./dist'));
});

gulp.task('views', function(){
    gulp.src(paths.viewSource)
    .pipe(gulp.dest('./dist'));
});

gulp.task('img', function(){
    gulp.src(paths.img)
    .pipe(gulp.dest('./dist/app/images'));
});

gulp.task('watch', function(){
    gulp.watch(paths.jsSource, ['js']);
    gulp.watch(paths.cssSource, ['css']);
    gulp.watch(paths.viewSource, ['views']);
    gulp.watch(paths.img, ['img']);
});

gulp.task('default', ['js', 'css', 'views', 'img', 'watch']);
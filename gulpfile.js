var gulp = require('gulp'),
	sass = require('gulp-sass'),
    php  = require('gulp-connect-php'),
	browserSync = require('browser-sync'), 
    autoprefixer = require('gulp-autoprefixer'),
    notify = require('gulp-notify');

gulp.task('sass', function(){
    return gulp.src('app/assets/css/style.scss')
        .pipe(sass({outputStyle: 'compressed'}))
        .on( 'error', notify.onError(
          {
            message: "<%= error.message %>",
            title  : "Sass Error!"
          } ))
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
        .pipe(gulp.dest('app/assets/css'))
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('php', function() {
    php.server({ base: 'app', port: 8010, keepalive: true});
});

gulp.task('browser-sync',['php'], function() {
    browserSync({
        proxy: '127.0.0.1:8010',
        port: 8080,
        open: true,
        notify: false,
        browser: "chrome"
    });
});

gulp.task('watch', ['browser-sync', 'sass'], function() {
    gulp.watch('app/assets/css/**/*.scss', ['sass']);
    gulp.watch('app/*.php', browserSync.reload);
    gulp.watch('app/assets/js/**/*.js', browserSync.reload);
});
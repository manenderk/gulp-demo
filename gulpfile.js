var gulp = require('gulp');
var uglify = require('gulp-uglify');
var cleanCss = require('gulp-clean-css');
var plumber = require('gulp-plumber');

// SCRIPTS TASKS
gulp.task('scripts', function(){
    return gulp.src('js/*.js')              //pick all js files in the js directory
        .pipe(plumber())                    //Keep function running for watcher if an error encountered
        .pipe(uglify())                     //Uglify(minify) JS files
        .pipe(gulp.dest('build/js'));       //save files in build/js directory
})

// STYLES TASK
gulp.task('styles', function(){
    return gulp.src('css/*.css')
        .pipe(plumber())
        .pipe(cleanCss())
        .pipe(gulp.dest('build/css'));
})

//WATCHER
//WATCHES JS
gulp.task('watch', function(){
    gulp.watch('js/*.js', gulp.series(
        'scripts'
    ));
    gulp.watch('css/*.css', gulp.series(
        'styles'
    ));
});


//DEFINE A DEFAULT GULP TASK
gulp.task('default', gulp.series(
    'scripts',
    'styles',
    'watch'
));
var gulp = require('gulp');
var concat = require('gulp-concat');
var paths = {
    scripts: ['./js/base.js', './js/features/*.js'],
    styles: ['./styles/base.css', './styles/features/*.css']
};

gulp.task('concatJS', function () {
    return gulp.src(paths.scripts)
        .pipe(concat('MaykaEditor.js'))
        .pipe(gulp.dest('./js'));
});

gulp.task('concatCSS', function () {
    return gulp.src(paths.styles)
        .pipe(concat('MaykaEditor.css'))
        .pipe(gulp.dest('./styles'));
});

gulp.task('watch', function () {
    gulp.watch(paths.scripts, ['concatJS']);
    gulp.watch(paths.styles, ['concatCSS']);
});

gulp.task('default', ['concatJS', 'concatCSS']);

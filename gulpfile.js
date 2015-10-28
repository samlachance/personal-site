// Include Gulp
var gulp = require('gulp');

// Include plugins
var sass = require('gulp-sass');

// Compile SASS
gulp.task('sass', function() {
	return gulp.src('dev/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('./dev'));
});

// Autoprefixer
gulp.task('autoprefixer', function () {
    var postcss      = require('gulp-postcss');
    var sourcemaps   = require('gulp-sourcemaps');
    var autoprefixer = require('autoprefixer');

    return gulp.src('dev/*.css')
        .pipe(sourcemaps.init())
        .pipe(postcss([ autoprefixer({ browsers: ['last 2 versions'] }) ]))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./css'));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('./dev/*.scss', ['sass']);
    gulp.watch('./dev/*.css', ['autoprefixer']);
});

// Default Task
gulp.task('default', ['sass', 'autoprefixer', 'watch']);





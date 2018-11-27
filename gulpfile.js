var gulp = require('gulp'),
	sass = require('gulp-sass'),
	plumber = require('gulp-plumber'),
	csso = require('gulp-csso'),
	rename = require('gulp-rename'),
	del = require('del');

gulp.task('css', () => {
	return gulp.src('app/scss/style.scss')
		.pipe(plumber())
		.pipe(sass())
		.pipe(gulp.dest('app/css'))
		.pipe(csso())
		.pipe(rename("style.min.css"))
		.pipe(gulp.dest('app/css'));
});

gulp.task('clean', () => {
	return del('app/css');
});

gulp.task('build', gulp.series('clean', 'css'));

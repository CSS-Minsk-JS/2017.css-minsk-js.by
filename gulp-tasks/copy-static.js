const gulp = require('gulp');
const config = require('./config');

/**
 * Copies static files to dist
 *
 * @task {copy:static}
 * @group {Build}
 */
gulp.task('copy:static', gulp.parallel(
    copyImages,
    copyFonts,
    copyFiles,
    copy2017,
    copyStaticFiles,
));

function copyFonts() {
    const fonts = config.paths.fonts;
    return gulp
        .src(`${fonts.src}/**/*`)
        .pipe(gulp.dest(fonts.dist));
}

function copyImages() {
    const images = config.paths.images;
    return gulp
        .src(`${images.src}/**/*`)
        .pipe(gulp.dest(images.dist));
}

function copyFiles() {
    const files = config.paths.files;
    return gulp
        .src(`${files.src}/**/*`)
        .pipe(gulp.dest(files.dist));
}

function copy2017() {
    const src = config.base.src + '/2017';
    const dist = config.base.dist + '/2017';
    return gulp
        .src(`${src}/**/*`)
        .pipe(gulp.dest(dist));
}

function copyStaticFiles() {
    const dist = config.base.dist;
    const src = [
        'CNAME',
    ].map(file => `${config.base.src}/${file}`);
    return gulp
        .src(src)
        .pipe(gulp.dest(dist));
}

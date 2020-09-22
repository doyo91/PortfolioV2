const gulp = require("gulp");
const imagemin = require("gulp-imagemin");
const terser = require("gulp-terser"); // recomendado ES6 minify
const concat = require("gulp-concat");
const sourcemaps = require("gulp-sourcemaps");
const postcss = require("gulp-postcss");
const cssnano = require("cssnano");
const autoprefixer = require("autoprefixer");
const { src, series, parallel, dest, watch } = require("gulp");

const jsPath = "src/assets/js/**/*.js";
const cssPath = "src/assets/css/**/*.css";

function copyHtml() {
  return src("src/*.html").pipe(gulp.dest("dist"));
}

function imgTask() {
  return src("src/assets/img/*")
    .pipe(imagemin())
    .pipe(gulp.dest("dist/assets/img"));
}

function copyDocs() {
  return src("src/assets/docs/*").pipe(gulp.dest("dist/assets/docs"));
}

function copySalCss() {
  return src("node_modules/sal.js/dist/sal.css").pipe(
    gulp.dest("dist/assets/css")
  );
}
function copySalJs() {
  return src("node_modules/sal.js/dist/sal.js").pipe(
    gulp.dest("dist/assets/js")
  );
}

function jsTask() {
  return src(jsPath)
    .pipe(sourcemaps.init())
    .pipe(concat("main.min.js"))
    .pipe(terser())
    .pipe(sourcemaps.write("."))
    .pipe(dest("dist/assets/js"));
}

function cssTask() {
  return src(cssPath)
    .pipe(sourcemaps.init())
    .pipe(concat("styles.min.css"))
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(sourcemaps.write("."))
    .pipe(dest("dist/assets/css"));
}

function watchTask() {
  watch([cssPath, jsPath], { interval: 1000 }, parallel(cssTask, jsTask));
}

exports.cssTask = cssTask;
exports.jsTask = jsTask;
exports.imgTask = imgTask;
exports.copyDocs = copyDocs;
exports.copyHtml = copyHtml;
exports.default = series(
  parallel(copyHtml, copySalJs, copySalCss, copyDocs, imgTask, jsTask, cssTask),
  watchTask
);

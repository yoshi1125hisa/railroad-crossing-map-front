const gulp = require("gulp");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");

const browserify = require ('browserify');
const source = require('vinyl-source-stream');

gulp.task("default", function () {
  return gulp.src("www/css/style.css")
    .pipe(postcss([
      autoprefixer({
        // ☆IEは11以上、Androidは4.4以上
        // その他は最新2バージョンで必要なベンダープレフィックスを付与する設定
        browsers: ["last 2 versions", "ie >= 11", "Android >= 4"],
        cascade: false
      })
    ]))
    .pipe(gulp.dest("www/css"));
});

// browserify and gulp.
gulp.task('browserify', function () {
  return browserify('www/js/main.js')
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('www/dist'));
});

gulp.task('watch', function () {
  gulp.watch(['www/js/*.js'], ['browserify']);
});
const gulp = require("gulp");
const connect = require("gulp-connect");
const ON_DEATH = require("death");
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const sass = require("gulp-sass");
const ndoeSass = require("node-sass");
const autoprefixer = require("gulp-autoprefixer");
const cleanCSS = require("gulp-clean-css");
const sourcemaps = require("gulp-sourcemaps");
const cachebust = require("gulp-cache-bust");
const rename = require("gulp-rename");

const IS_PRODUCTION_VERSION = process.env.NODE_ENV === "production";

/*
  connect settings
*/
const reload = (done) => {
  connect.reload();
  done();
};
ON_DEATH(() => {
  connect.serverClose();
});

/* TASKS */
// sass
sass.compiler = ndoeSass;
const cleanOps = IS_PRODUCTION_VERSION ? { level: 2 } : { format: "beautify" };
const cssBrowsers = IS_PRODUCTION_VERSION ? "last 10 versions" : "last 2 versions";
const outputStyle = IS_PRODUCTION_VERSION ? "compact" : "expanded";
gulp.task("sass", () => {
  return gulp
    .src("./sass/*.scss")
    .pipe(plumber({ errorHandler: onError }))
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle }))
    .pipe(
      autoprefixer({
        overrideBrowserslist: [cssBrowsers],
        cascade: false,
      })
    )
    .pipe(cleanCSS(cleanOps))
    .pipe(rename("mystyles.min.css"))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("./result/css/"));
});

// cachebust
gulp.task("cachebust", () => {
  return gulp.src("./result/*.html").pipe(cachebust()).pipe(gulp.dest("./result"));
});

const watchSass = gulp.series("sass", "cachebust", reload);

/* SERVER */
gulp.task("browser-connect", function () {
  connect.server({
    name: "Dev App",
    root: ["./result"],
    port: 8000,
    livereload: true,
  });

  gulp.watch("./sass/**/*.{sass,scss}", watchSass);
});
gulp.task("default", gulp.series("sass", "cachebust", "browser-connect"));

/* error handler */
function onError(error) {
  notify.onError({
    title: "Gulp error in the <%= error.plugin %> plugin",
    message: "<%= error.message %>",
  })(error);
  this.emit("end");
}

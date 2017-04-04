var usemin = require('gulp-usemin');
var uglify = require('gulp-uglify');
var htmlmin = require('gulp-htmlmin');
var cleanCss = require('gulp-clean-css');
var rev = require('gulp-rev');


gulp.task('usemin', function() {
  return gulp.src('./*.html')
    .pipe(usemin({
      css: [ rev() ],
      html: [ htmlmin({ collapseWhitespace: true }) ],
      js: [ uglify(), rev() ],
      inlinejs: [ uglify() ],
      inlinecss: [ cleanCss(), 'concat' ]
    }))
    .pipe(gulp.dest('build/'));
});

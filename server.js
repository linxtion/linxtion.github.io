import babelify from 'babelify'
import babel from 'gulp-babel'
import browserify from 'browserify'
import concat from 'gulp-concat'
import connect from 'gulp-connect'
import gulp from 'gulp'
import buffer from 'vinyl-buffer'
import livereload from 'gulp-livereload'
import rename from 'gulp-rename'
import sass from 'gulp-sass'
import source from 'vinyl-source-stream'
import streamify from 'gulp-streamify'
import uglify from 'gulp-uglify'
import watchify from 'watchify'

// process.env.NODE_ENV = 'production' // used for building minify script

gulp.task('server', () => {
  connect.server({
    root: [__dirname, 'build'],
    port: 8001,
    livereload: true
  })
})

gulp.task('sass', () => {
  gulp.src('./components/App.scss')
    .pipe(sass())
    .pipe(rename('app.css'))
    .pipe(gulp.dest('./build/'))
    .pipe(livereload())
})

var babelOptions = {
  plugins: ['transform-object-assign'],
  presets: ['es2015', 'react', 'stage-0']
};

var customOpts = {
  entries: './components/App.jsx',
  extensions: ['.jsx'],
  debug: true
};
var opts = Object.assign({}, customOpts);

gulp.task('scripts', function() {
  watchify(browserify(opts))
    .transform('babelify', babelOptions)
    .bundle()
    .on('error', console.error.bind(console))
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(gulp.dest('./build/'))
    .pipe(livereload())
})

gulp.task('buildjs', function() {
  process.env.NODE_ENV = 'production';
  browserify(opts)
    .transform('babelify', babelOptions)
    .bundle()
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(gulp.dest('./build/'))
})

gulp.task('watch', () => {
  livereload.listen()
  gulp.watch(['components/*.scss'], ['sass'])
  gulp.watch(['components/*.jsx'], ['scripts'])
})

gulp.task('dev', ['watch', 'scripts', 'sass', 'server'])
gulp.task('build', ['buildjs', 'sass'])
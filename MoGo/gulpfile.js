	
// gulpfile.js
var gulp = require("gulp"),
    sass = require("gulp-sass"),
    postcss = require("gulp-postcss"),
    autoprefixer = require("autoprefixer"),
    cssnano = require("cssnano"),
    sourcemaps = require("gulp-sourcemaps"),
    browserSync = require("browser-sync").create();

    
var paths = {
    styles: {
        // By using styles/**/*.sass we're telling gulp to check all folders for any sass file
        src: "styles/**/*.scss",
        // Compiled files will end up in whichever folder it's found in (partials are not compiled)
        dest: "css"
    }
 
    // Easily add additional paths
    // ,html: {
    //  src: '...',
    //  dest: '...'
    // }
};


	
    
function style() {
    return (
        gulp
            .src("styles/*.scss")
            // Initialize sourcemaps before compilation starts
            .pipe(sourcemaps.init())
            .pipe(sass())
            .on("error", sass.logError)
            // Use postcss with autoprefixer and compress the compiled file using cssnano
            .pipe(postcss([autoprefixer(), cssnano()]))
            // Now add/write the sourcemaps
            .pipe(sourcemaps.write())
            .pipe(gulp.dest("css"))
            .pipe(browserSync.stream())
    );
}
 
    
    
    
    
// A simple task to reload the page
function reload(done) {
browserSync.reload();
done();
}
 
function watch() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch(paths.styles.src, style);
    // We should tell gulp which files to watch to trigger the reload
    // This can be html or whatever you're using to develop your website
    // Note -- you can obviously add the path to the Paths object
    gulp.watch("*.html", reload);
}
 
// We don't have to expose the reload function
// It's currently only useful in other functions

// Expose the task by exporting it
// This allows you to run it from the commandline using
// $ gulp style
exports.style = style;
exports.watch = watch;
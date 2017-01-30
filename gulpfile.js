var ANGULAR_JSON_FILES = './angular/**/*.json';
var ANGULAR_SNIPPETS_FILE_NAME = 'javascript.json';
var ANGULAR_DESTINATION_FOLDER = './generated_snippets';

var gulp = require('gulp');
var merge = require('gulp-merge-json');

gulp.task('generate-angular-snippets', function () {
    return gulp.src(ANGULAR_JSON_FILES)
        .pipe(merge(ANGULAR_SNIPPETS_FILE_NAME))
        .pipe(gulp.dest(ANGULAR_DESTINATION_FOLDER));
});

gulp.task('generate-vscode-snippets', ['generate-angular-snippets']);
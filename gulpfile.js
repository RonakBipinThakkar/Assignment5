var {src, dest, watch} = require('gulp');
var sass = require('gulp-sass');
sass.compiler = require('node-sass');

function css (){
    return src('src/*.scss')
    .pipe(sass())
    .pipe(dest('dist/css'))
}

//exports.default = function(){
//    watch ('src/*.scss',css);
//	watch("src/page_styles/*.scss", css);
//	watch("src/mixins/*.scss", css);
//	watch("src/variables/*.scss", css);
//}

exports.default = css;
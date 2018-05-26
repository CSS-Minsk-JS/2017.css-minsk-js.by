const util = require('gulp-util');

const base = {
    src: 'source',
    dist: 'build',
};

const paths = {
    images: {
        src: `${base.src}/img`,
        dist: `${base.dist}/img`,
    },
    fonts: {
        src: `${base.src}/fonts`,
        dist: `${base.dist}/fonts`,
    },
    files: {
        src: `${base.src}/files`,
        dist: `${base.dist}/files`,
    },
    scripts: {
        src: `${base.src}/js`,
        dist: `${base.dist}/js`,
    },
    styles: {
        scss: {
            src: `${base.src}/scss`,
            dist: `${base.dist}/css`,
        }
    },
};

const isDev = !util.env.production;

module.exports = {
    base,
    paths,
    isDev,
};

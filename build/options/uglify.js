module.exports = {
    app: {
        options: {
            sourceMapIncludeSources: false,
            sourceMap: false,
            compress: {},
            mangle: {}
        },
        files: {
            '<%= pkg.dest %>/bi-sortArray.min.js': ['<%= pkg.dest %>/bi-sortArray.js']
        }
    }
};
module.exports = {
    app: {
        options: {
            sourceMapIncludeSources: false,
            sourceMap: false,
            compress: {},
            mangle: {}
        },
        files: {
            '<%= pkg.dest %>/array-sort.min.js': ['<%= pkg.dest %>/array-sort.js']
        }
    }
};
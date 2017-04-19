module.exports = {
    options: {
        sourceMap: true,
        presets: ["es2015"]
    },
    dist: {
        files: {
            '<%= pkg.dest %>/array-sort.js': '<%= pkg.dest %>/array-sort.js'
        }
    }
}
module.exports = {
    options: {
        sourceMap: true,
        presets: ["es2015"]
    },
    dist: {
        files: {
            '<%= pkg.dest %>/bi-sortArray.js': '<%= pkg.dest %>/bi-sortArray.js'
        }
    }
}
module.exports = {
    main: {
        src: [
            '<%= pkg.webroot %>bi-sortArray.js'
        ],
        dest: '<%= pkg.dest %>/',
        filter: 'isFile'
    }
};
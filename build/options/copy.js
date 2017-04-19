module.exports = {
    main: {
        src: [
            '<%= pkg.webroot %>array-sort.js'
        ],
        dest: '<%= pkg.dest %>/',
        filter: 'isFile'
    }
};
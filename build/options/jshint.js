module.exports = {
    src: '<%= pkg.webroot %>array-sort.js',
    options: {
        curly: true,
        eqeqeq: true,
        eqnull: true,
        esversion: 6,
        browser: true,
        freeze: true,
        strict: true,
        undef: true,
        globals: {
            angular: true
        }
    }
};
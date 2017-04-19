module.exports = function (grunt) {
	grunt.initConfig({
		env: process.env,
		pkg: require('./package.json'),
		clean: require('./build/options/clean.js'),
		copy: require('./build/options/copy.js'),
		jshint: require('./build/options/jshint.js'),
		jscs: require('./build/options/jscs.js'),
		babel: require('./build/options/babel.js'),
		uglify: require('./build/options/uglify.js')
	});
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-jscs');
	grunt.loadNpmTasks('grunt-babel');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('build', [
		'clean:all', 'copy', 'jshint', 'jscs', 'babel', 'uglify'
	])
}
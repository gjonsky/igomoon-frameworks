







module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    	pkg: grunt.file.readJSON('package.json'),
    	sass: {
		dist: {
			 files: {
				'style.css': 'style.scss',
			},
			options: {
				style: 'expanded',
			},
		}
	},
	watch: {
		files: ['style.scss', 'sassfiles/*.scss'],
		tasks: ['sass'],
 	},
 });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  // Default task(s).
  grunt.registerTask('default', ['sass','watch']);

}


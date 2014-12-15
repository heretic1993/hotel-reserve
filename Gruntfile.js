module.exports = function(grunt) {
	grunt.initConfig({
		bowercopy: {
			options: {
				clean: false
			},
			libs: {
				options: {
					destPrefix: 'public/javascripts/',
					srcPrefix: 'bower-components/'
				},
				files: {
					'jquery/': 'jquery/dist/',
					'holderjs/':'holderjs/',
					'lazyload/':'jquery.lazyload/',
					'jquery-md5/jquery.md5.js':'jquery-md5/jquery.md5.js',
					'underscore/':'underscore/',
					'moment/':'moment'
				}
			},
			css: {
				options: {
					srcPrefix: 'bower-components/',
					destPrefix: 'public/stylesheets/'
				},
				files: {
					'bootstrap/': 'bootstrap/dist'
				}
			}
		}
	});
	grunt.loadNpmTasks('grunt-bowercopy');

	grunt.registerTask('default', ['bowercopy']);

};
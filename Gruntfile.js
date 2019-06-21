module.exports = function(grunt) {
    // config
    grunt.initConfig({
        uncss : {
            dist : {
                files : {
                    './www/scss/style.scss' : ['www/index.html']
                }
            }
        }
    });

    // plugin
    grunt.loadNpmTasks('grunt-uncss');

    // taskgrunt default
    grunt.registerTask('default', 'uncss');
}
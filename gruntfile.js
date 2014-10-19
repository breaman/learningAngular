module.exports = function (grunt) {
    grunt.config.set('bower', {
        install: {
            options: {
                targetDir: './AngularJSSite'
            }
        }
    });
    grunt.loadNpmTasks('grunt-bower-task');
};
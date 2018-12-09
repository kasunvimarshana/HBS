module.exports = function (grunt) {

    grunt.initConfig({
        clean: {
            jquerymobile: 'resources/lib/bower_components/jquery-mobile'
        },
        gitclone: {
            jquerymobile: {
                options: {
                    repository: 'https://github.com/jquery/jquery-mobile.git',
                    branch: 'master',
                    directory: 'resources/lib/bower_components/jquery-mobile'
                }
            }
        },
        run: {
            options: {
                cwd: "resources/lib/bower_components/jquery-mobile"
            },
            jquerymobile_npm_install: {
                cmd: "npm",
                args: [
                    'install'
                ]
            },
            jquerymobile_grunt: {
                cmd: "grunt"
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-git');
    grunt.loadNpmTasks('grunt-run');

    grunt.registerTask('default', [
        'clean',
        'gitclone',
        'run'
    ]);
};
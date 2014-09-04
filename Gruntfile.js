module.exports = function(grunt) {

    // Project configuration
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        // Serve root on localhost
        connect: {
            server: {
                options: {
                    port: 9002,
                    base: 'src',
                    keepalive: true,
                    hostname: '0.0.0.0'
                }
            }
        },

        watch: {
            scripts: {
                files: ['src/scripts/controls/**/*.js'],
                tasks: ['build'],
                options: {
                    spawn: false
                }
            }
        },

        // Minify all controls and copy them to the dist controls folder
        uglify: {
            build: {
                files: [
                    {
                        expand: true,
                        src: '**/*.js',
                        dest: 'dist/controls',
                        cwd: 'src/scripts/controls',
                        rename: function(dest, src) {
                            // Rename each file and add the ".min" extension
                            return dest + '/' + src.replace('.js', '.min.js');
                        }
                    }
                ]
            }
        },

        // Copy all controls to the dist controls folder
        copy: {
            build: {
                files: [
                    {
                        expand: true,
                        src: '**/*.js',
                        dest: 'dist/controls',
                        cwd: 'src/scripts/controls'
                    }
                ]
            }
        },

        jshint: {
            default: 'src/scripts/controls/**/*.js'
        }

    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.registerTask('build', ['jshint', 'copy', 'uglify']);

    grunt.registerTask('default', ['watch']);

};

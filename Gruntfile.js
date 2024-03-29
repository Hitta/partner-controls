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

        clean: {
            build: {
                src: [ 'dist' ]
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

        // Copy all controls to the dist controls folder
        copy: {
            build: {
                files: [
                    {
                        expand: true,
                        src: '**/*.js',
                        dest: 'dist/controls',
                        cwd: 'src/scripts/controls',
                        rename: function(dest, src) {
                            // Place the file in a folder with the control name
                            return dest + '/' + src.replace('.js', '') + '/' + src;
                        }
                    },
                    {
                        expand: true,
                        src: '**/*.css',
                        dest: 'dist/controls',
                        cwd: 'src/styles/controls',
                        rename: function(dest, src) {
                            // Place the file in a folder with the control name
                            return dest + '/' + src.replace('.css', '') + '/' + src;
                        }
                    }
                ]
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
                            // Place it in a folder with the controls name
                            return dest + '/' + src.replace('.js', '') + '/min/' + src.replace('.js', '.min.js');
                        }
                    }
                ]
            }
        },

        cssmin: {
            build: {
                files: [
                    {
                        expand: true,
                        src: '**/*.css',
                        dest: 'dist/controls',
                        cwd: 'src/styles/controls',
                        rename: function(dest, src) {
                            // Rename each file and add the ".min" extension
                            // Place it in a folder with the controls name
                            return dest + '/' + src.replace('.css', '') + '/min/' + src.replace('.css', '.min.css');
                        }
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
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('build', ['jshint', 'clean', 'cssmin', 'copy', 'uglify']);

    grunt.registerTask('default', ['build', 'watch']);

};

/**
 * Created by Thomas on 2/28/16.
 */
module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'client/scripts/app.js',
                "dest": 'server/public/assets/scripts/app.min.js'
            }
        },
        copy: {
            jquery: {
                expand: true,
                cwd: 'node_modules/jquery/',
                src: [
                    'jquery.min.js',
                    'jquery.min.js.map'
                ],
                "dest": 'server/public/vendors/angular'
            },
            bootstrap: {
                expand: true,
                cwd: 'node_modules/bootstrap/dist/css/',
                src: [
                    "bootstrap.min.css",
                    "bootstrap.min.css.map"
                ],
                "dest": 'server/public/vendors/bootstrap/'
            },
            html: {
                expand: true,
                cwd: "client/views/",
                src: ["index.html",
                     "resume.html"
                ],
                "dest": "server/public/assets/views/"
            },
            styles: {
                expand: true,
                cwd: "client/styles/",
                src: ['style.css',
                      //'resume.css',
                      'closeup_sm.jpg'
                ],
                "dest": "server/public/assets/styles/"
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['copy', 'uglify']);

};

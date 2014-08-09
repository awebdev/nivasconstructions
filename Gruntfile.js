module.exports = function(grunt) {
  'use strict';

  // load all grunt npmtasks
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({

    config: {
      projectRoot: '',
      app: 'app', // app source
      build: 'build', // build dir for runtime image
      dist: 'dist', // distribution

      host: 'localhost',
      appServerPort: 8080,
      allJsFiles: '<%= config.app %>/js/*.js'
    },

    requirejs: {
      compile: {
        options: {
          name: 'index',
          mainConfigFile: '<%= config.app %>/js/index.js',
          baseUrl: '<%= config.app %>/js',
          out: '<%= config.app %>/dist/app.js',
          optimize: 'none',
          preserveLicenseComments: true
        }
      }
    },

    less: {
      build: {
        options: {
          paths: ["<%= config.app %>/less"]
        },
        files: {
          "<%= config.app %>/css/main.css": "<%= config.app %>/less/main.less"
        }
      }
    }
  });

  grunt.loadTasks('grunt');

  // default task
  grunt.registerTask('default', 'Run application', [
    'jshint:all',
    'less',
    'cssmin:minify',
    'connect:app',
    'open:app',
    'watch'
  ]);

  grunt.registerTask('build', 'build application', [
                     'requirejs:compile'
                   ]);
};

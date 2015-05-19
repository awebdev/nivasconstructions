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
      appServerPort: 8000,
      allJsFiles: '<%= config.app %>/js/*.js'
    },

    requirejs: {
      compile: {
        options: {
          name: 'index',
          mainConfigFile: '<%= config.app %>/js/index.js',
          baseUrl: '<%= config.app %>/js',
          out: '<%= config.app %>/dist/app.js',
          optimize: 'uglify2',
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
    },

    clean: {
      build: {
        src: ['<%= config.build %>']
      }
    },

    copy: {
      build: {
        files: [
          // Specific Files
          {src: ['server.js'], dest: '<%= config.build %>', expand: true, filter: 'isFile'},
          {src: ['DB.js'], dest: '<%= config.build %>', expand: true, filter: 'isFile'},
          // {src: ['package.json'], dest: '<%= config.build %>', expand: true, filter: 'isFile'},
          {src: ['<%= config.app %>/*.html'], dest: '<%= config.build %>', expand: true, filter: 'isFile'},
          {src: ['<%= config.app %>/favicon.ico'], dest: '<%= config.build %>', expand: true, filter: 'isFile'},
          {src: ['<%= config.app %>/sitemap.xml'], dest: '<%= config.build %>', expand: true, filter: 'isFile'},
          {src: ['<%= config.app %>/robots.txt'], dest: '<%= config.build %>', expand: true, filter: 'isFile'},
          {src: ['<%= config.app %>/components/requirejs/require.js'], dest: '<%= config.build %>', expand: true, filter: 'isFile'},

          // All folders and sub-folders
          // all images are replaced by imagemin // keep this to copy non-images like fav.ico
          {src: ['<%= config.app %>/images/**'], dest: '<%= config.build %>', expand: true},
          {src: ['<%= config.app %>/fonts/**'], dest: '<%= config.build %>', expand: true},
          {src: ['<%= config.app %>/data/**'], dest: '<%= config.build %>', expand: true},
          {src: ['<%= config.app %>/dist/**'], dest: '<%= config.build %>', expand: true},
          {src: ['<%= config.app %>/js/html/**'], dest: '<%= config.build %>', expand: true},
          {src: ['snapshots/**'], dest: '<%= config.build %>', expand: true},

          // makes all src relative to cwd
          // {expand: true, cwd: 'path/', src: ['**'], dest: 'dest/'},

          // flattens results to a single level
          // {expand: true, flatten: true, src: ['path/**'], dest: 'dest/', filter: 'isFile'}
        ]
      }
    },

    htmlmin: {
      dist: {                                      // Target
        options: {                                 // Target options
          removeComments: true,
          collapseWhitespace: true,
          minifyJS: true
        },
        files: {                                   // Dictionary of files
          '<%= config.app %>/dist/app/index.html': '<%= config.app %>/index.html'     // 'destination': 'source'
        }
      }
    }
  });

  grunt.loadTasks('grunt');

  // default task
  grunt.registerTask('default', 'Run application', [
    'requirejs:compile',
    'jshint:all',
    'less',
    'cssmin:minify',
    'watch'
  ]);

  grunt.registerTask('build', 'build application', [
                     'requirejs:compile',
                     'clean:build',
                     'copy:build',
                     'imagemin:all',
                     'default'
                   ]);
};

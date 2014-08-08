module.exports = function(grunt) {

  grunt.config('connect', {
    app: {
      options: {
        host: '<%= config.host %>',
        port: '<%= config.appServerPort %>',
        base: '<%= config.projectRoot %>'
      }
    }
  });

  grunt.config('open', {
    app: {
      path: 'http://<%= config.host %>:<%= config.appServerPort %>/<%= config.app %>/index.html'
    }
  });

  // watch files for changes
  grunt.config('watch', {
    js: {
      files: '<%= config.app %>/**/*.js',
      tasks: ['jshint:all'],
      options: {
        livereload: true
      }
    },
    css: {
      files: '<%= config.app %>/**/*.less',
      tasks: ['less', 'cssmin:minify'],
      options: {
        livereload: true
      }
    },
    json: {
      files: '<%= config.app %>/data/**/*.json',
      tasks:[],
      options: {
        livereload: true
      }
    }
  });

  grunt.config('jshint', {
    all: '<%= config.allJsFiles %>',
    options: {
      es3: true
    }
  });

  grunt.config('cssmin', {
    minify: {
      expand: true,
      cwd: '<%= config.app %>/css/',
      src: ['*.css', '!*.min.css'],
      dest: '<%= config.app %>/dist/',
      ext: '.min.css'
    }
  });
};

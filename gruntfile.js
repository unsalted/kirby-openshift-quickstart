module.exports = function(grunt) {
  grunt.initConfig({
    less: {
      development: {
        options: {
          compress: false,
          yuicompress: false,
          optimization: 2
        },
        files: {
          // target.css file: source.less file
          'assets/css/main.css': 'assets/less/main.less',
        }
      }
    },
    lesslint:{
      src: ['src/**/*.less'],
      options: {
        imports: ['imports/**/*.less']
      }
    },
    autoprefixer: {
      options: {
        cascade: true
      },
      development: {
        browsers: ['> 2 %', 'last 2 version', 'BB 7', 'BB 10', 'Android 2', 'Android 3', 'Android 4', 'Android 5', 'Firefox ESR'],
        expand: true,
        flatten: true,
        src: 'assets/css/*.css',
        dest: 'assets/css'
      }
    },
    kss: {
      options: {
        includeType: 'less',
        includePath: 'assets/less/main.less',
      },
      dist: {
          files: {
            'documentation/dest': ['documentation/src']
          }
        }
    },
    watch: {
      styles: {
        files: ['assets/less/*.less', 'assets/js/*.js', 'content/*/*.txt', 'site/templates/*.php', 'site/snippets/*.php'],
        tasks: ['less', 'lesslint', 'autoprefixer'],
        options: {
          livereload: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-lesslint');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-kss');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['watch']);
};
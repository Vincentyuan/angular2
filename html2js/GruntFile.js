module.exports = function (grunt) {
  grunt.initConfig({
    pkg : grunt.file.readJSON('package.json'),
    uglify :{
      options:{
        banner:'/*! <%=pkg.name %> <%=grunt.template.today("yyyy-mm-dd")%> */\n'
      },
      build:{
        src : 'src/<%=pkg.name %>.js',
        dest : 'build/<%= pkg.name %>.min.js'
      }
    },
    html2js :{
      options:{

      },
      main :{
        src : ['html/template.html'],
        dest :"js/template.js"
      }
    }

  });
  grunt.loadNpmTasks('grunt-html2js');

  grunt.registerTask("default", ['html2js']);

}

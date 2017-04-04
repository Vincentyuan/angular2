module.exports = function (grunt) {
  	require('load-grunt-tasks')(grunt);
  // grunt.initConfig({
  //   pkg : grunt.file.readJSON('package.json'),
  //   uglify :{
  //     options:{
  //       banner:'/*! <%=pkg.name %> <%=grunt.template.today("yyyy-mm-dd")%> */\n'
  //     },
  //     build:{
  //       src : 'src/<%=pkg.name %>.js',
  //       dest : 'build/<%= pkg.name %>.min.js'
  //     }
  //   }
  //
  // });

  grunt.config.init({
    useminPrepare: {
        html: 'src/index.html',
        options: {
          dest: 'dist'
        }
    },
    usemin:{
      html:['dist/index.html']
    },
    copy:{
      html: {
        src: 'src/index.html', dest: 'dist/index.html'
      }
    },
    html2js :{
      options:{
        module:"template"
      },
      main :{
        src : ['src/app/template.html'],
        dest :"dist/template.js"
      }
    }
  });

  grunt.registerTask('default',[
    'copy:html',
    'useminPrepare',
    'concat',
    'uglify',
    //'cssmin',
    'usemin'
    ]);
  grunt.loadNpmTasks('grunt-html2js');

  grunt.registerTask("template", ['html2js']);

}

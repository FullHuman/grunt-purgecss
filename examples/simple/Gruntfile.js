module.exports = grunt => {

  grunt.initConfig({
    purgecss: {
      files: ['./src/app.css'],
      options: {
        content: ['./src/**/*.html']
      }
    }
  })

  grunt.loadTasks('./../../lib')
  grunt.registerTask('default', ['purgecss']);

}
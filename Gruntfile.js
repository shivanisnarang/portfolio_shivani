module.exports = function(grunt) {

  grunt.initConfig({
    responsive_images: {
      dev: {
        options: {
          engine: 'im',
          sizes: [{
            name: 'small',
            width: '30%',
            suffix: '_small',
            quality: 20
          },{
            name: 'medium',
            width: '50%',
            suffix: '_medium',
            quality: 40
          },{
            width: 720,
            suffix: '_large_2x',
            quality: 30 
          },{
            width: 360,
            suffix: '_large_1x',
            quality: 50           
          }]
        },
        files: [{
          expand: true,
          src: ['images/**/*.{jpg,gif,jpeg,png}'],
          cwd: '',
          dest: 'dist/'
        }]
      }
    },
  });
  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.registerTask('default', ['responsive_images']);

};
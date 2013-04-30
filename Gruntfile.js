module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        // Project package file destination.
        pkg: grunt.file.readJSON("package.json"),
        jshint: {
            // Lint all files.
            all: ["Gruntfile.js", "src/js/**/*.js", "lib/**/*.js"],
            // Lint all client-side code.
            client: ["src/js/**/*.js"],
            // Lint all server-side code.
            server: ["Gruntfile.js", "lib/**/*.js"]
        },
        concat: {
            options: {
                stripBanners: true
            },
            build: {
                // Files to be concatenated on concat:build
                src: [
                    "src/js/*.js",
                    "src/lib/jquery-ui-1.10.2.custom/js/jquery-ui-1.10.2.custom.min.js"
                ],
                // Dynamic destination file that includes a version.
                dest: "build/<%= pkg.name %>-<%= pkg.version %>.js",
                nonull: true // Warn about missing files
            }
        }
    });
  
    // Load the plugin(s):
    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-contrib-concat");
  
    // Custom task(s):
    grunt.registerTask("default", ["jshint:all"]);

};
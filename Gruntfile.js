module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        // Project package file destination.
        pkg: grunt.file.readJSON("package.json"),
        clean: {
            build: "build"
        },
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
            js: {
                src: [
                    // Files to be concatenated on concat:js
                    "src/lib/jquery-ui-1.10.2.custom/js/jquery-1.9.1.min.js",
                    "node_modules/universal/node_modules/infusion/src/webapp/framework/core/js/Fluid.js",
                    "node_modules/universal/node_modules/infusion/src/webapp/framework/core/js/DataBinding.js",
                    "node_modules/universal/node_modules/infusion/src/webapp/framework/core/js/FluidDOMUtilities.js",
                    "node_modules/universal/node_modules/infusion/src/webapp/framework/core/js/FluidDocument.js",
                    "node_modules/universal/node_modules/infusion/src/webapp/framework/core/js/FluidIoC.js",
                    "node_modules/universal/node_modules/infusion/src/webapp/framework/core/js/FluidRequests.js",
                    "node_modules/universal/node_modules/infusion/src/webapp/framework/core/js/FluidView.js",
                    "node_modules/universal/node_modules/infusion/src/webapp/framework/core/js/JavaProperties.js",
                    "node_modules/universal/node_modules/infusion/src/webapp/framework/core/js/ModelTransformations.js",
                    "node_modules/universal/node_modules/infusion/src/webapp/lib/fastXmlPull/js/fastXmlPull.js",
                    "node_modules/universal/node_modules/infusion/src/webapp/framework/renderer/js/fluidParser.js",
                    "node_modules/universal/node_modules/infusion/src/webapp/framework/renderer/js/fluidRenderer.js",
                    "node_modules/universal/node_modules/infusion/src/webapp/framework/renderer/js/RendererUtilities.js",
                    "src/lib/jquery-ui-1.10.2.custom/js/jquery-ui-1.10.2.custom.min.js",
                    "src/js/TextFieldSlider.js",
                    "src/js/NPGatheringTool.js"
                ],
                dest: "build/NPGatheringTool.js",
                nonull: true // Warn about missing files
            },
            css: {
                files: {
                    "build/NPGatheringTool.css": [
                        "src/lib/bootstrap/css/bootstrap.min.css",
                        "src/lib/jquery-ui-1.10.2.custom/css/hot-sneaks/jquery-ui-1.10.2.custom.min.css",
                        "src/css/*.css"
                    ]
                },
                nonull: true
            },
            html: {
                files: {
                    "build/NPGatheringTool.html": "src/html/NPGatheringTool.html"
                },
                options: {
                    // Custom pre-processing (head re-write) of the html.
                    process: function (src) {
                        src = src.replace(/<script[^>]*>([\w\W]*)><\/script>/g,
                            "<script type=\"text/javascript\" src=\"./NPGatheringTool.js\"></script>");
                        return src.replace(/<link[^>]*>([\w\W]*)((css" \/>)|(css"\/>))/g,
                            "<link rel=\"stylesheet\" type=\"text/css\" href=\"./NPGatheringTool.css\" />");
                    }
                }
            }
        }
    });
  
    // Load the plugin(s):
    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-contrib-concat");
  
    // Custom task(s):
    grunt.registerTask("default", ["jshint:all"]);
    grunt.registerTask("build", ["clean", "jshint:all", "concat:js", "concat:css", "concat:html"]);
};
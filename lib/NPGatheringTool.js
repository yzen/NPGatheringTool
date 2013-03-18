/*!
GPII NPGatheringTool

Copyright 2013 OCAD University

Licensed under the New BSD license. You may not use this file except in
compliance with this License.

You may obtain a copy of the License at
https://github.com/gpii/universal/LICENSE.txt
*/

(function () {

    "use strict";

    var fluid = require("universal"),
        path = require("path"),
        gpii = fluid.registerNamespace("gpii");

    fluid.require("./NPGatheringToolGet.js", require);
    fluid.require("./NPGatheringToolGetPrefs.js", require);
    fluid.require("./NPGatheringToolSetPrefs.js", require);
    
    fluid.defaults("gpii.NPGatheringTool", {
        gradeNames: ["gpii.app", "autoInit"],
        handlers: {
            NPGatheringToolGet: {
                route: "/:token?",
                type: "get"
            },
            NPGatheringToolGetPrefs: {
                route: "/prefs/:token",
                type: "get"
            },
            NPGatheringToolSetPrefs: {
                route: "/prefs/:token",
                type: "post"
            }
        },
        templates: {
            NPGatheringToolGet: "file://%root/src/html/NPGatheringTool.html"
        },
        preferencesUrl: "http://preferences.gpii.net/user/%token",
        events: {
            onMiddleware: "{gpii.server}.events.onMiddleware"
        },
        components: {
            rawTemplateSource: {
                type: "gpii.templateSource"
            },
            templateSource: {
                type: "gpii.callbackWrappingDataSource"
            },
            rawPreferencesSource: {
                type: "gpii.dataSource"
            },
            preferencesSource: {
                type: "gpii.callbackWrappingDataSource"
            },
            staticInfusion: {
                type: "gpii.middleware",
                createOnEvent: "onMiddleware",
                options: {
                    path: "/infusion",
                    staticPath: "%root/node_modules/universal/node_modules/infusion"
                }
            },
            staticSrc: {
                type: "gpii.middleware",
                createOnEvent: "onMiddleware",
                options: {
                    path: "/src",
                    staticPath: "%root/src"
                }
            }
        },
        root: path.join(__dirname, "..")
    });

    fluid.defaults("gpii.NPGatheringTool.handler", {
        gradeNames: ["gpii.requests.request.handler", "gpii.renderer", "autoInit"],
        invokers: {
            handle: {
                funcName: "gpii.requests.request.handler.NPGatheringToolGet",
                args: ["{requestProxy}", "{that}", "{NPGatheringTool}.templateSource"]
            }
        }
    });

    fluid.defaults("gpii.templateSource", {
        gradeNames: ["autoInit", "gpii.dataSource.URL"]
    });

    fluid.defaults("gpii.middleware.staticInfusion", {
        gradeNames: ["autoInit", "gpii.middleware.static"]
    });
    fluid.defaults("gpii.middleware.staticSrc", {
        gradeNames: ["autoInit", "gpii.middleware.static"]
    });

    gpii.config.makeConfigLoader({
        nodeEnv: gpii.config.getNodeEnv("NPGatheringTool"),
        configPath: "."
    });
    
})();
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
    fluid.require("./NPGatheringToolSet.js", require);
    
    fluid.defaults("gpii.NPGatheringTool", {
        gradeNames: ["gpii.app", "autoInit"],
        handlers: {
            NPGatheringToolGet: {
                route: "/",
                type: "get"
            },
            NPGatheringToolSet: {
                route: "/",
                type: "set"
            }
        },
        templates: {
            NPGatheringToolGet: "file://%root/src/html/NPGatheringTool.html"
        },
        events: {
            onMiddleware: "{gpii.server}.events.onMiddleware"
        },
        components: {
            rawTemplateSource: {
                type: "gpii.dataSource",
                options: {
                    url: "{gpii.NPGatheringTool}.options.templates.NPGatheringToolGet"
                }
            },
            templateSource: {
                type: "gpii.callbackWrappingDataSource"
            },
            staticInfusion: {
                type: "gpii.middleware",
                createOnEvent: "onMiddleware",
                options: {
                    path: "/infusion",
                    staticPath: "%root/node_modules/universal/node_modules/infusion"
                }
            }
        },
        root: path.join(__dirname, "..")
    });

    fluid.defaults("gpii.NPGatheringTool.handler", {
        gradeNames: ["gpii.requests.request.handler", "gpii.renderer", "autoInit"],
        selectors: {
            "my-paragraph": ".my-paragraph"
        },
        protoTree: {
            "my-paragraph": "TEST"
        },
        invokers: {
            handle: {
                funcName: "gpii.requests.request.handler.NPGatheringToolGet",
                args: ["{requestProxy}", "{that}", "{NPGatheringTool}.templateSource"]
            }
        }
    });

    fluid.defaults("gpii.middleware.staticInfusion", {
        gradeNames: ["autoInit", "gpii.middleware.static"]
    });

    gpii.config.makeConfigLoader({
        nodeEnv: gpii.config.getNodeEnv("NPGatheringTool"),
        configPath: "."
    });
    
})();
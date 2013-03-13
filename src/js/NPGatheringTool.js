/*!
GPII N/P Gathering tool.

Copyright 2013 OCAD University

Licensed under the New BSD license. You may not use this file except in
compliance with this License.

You may obtain a copy of the License at
https://github.com/gpii/universal/LICENSE.txt
*/

(function ($, fluid) {

    "use strict";

    fluid.registerNamespace("gpii");

    fluid.defaults("gpii.NPGatheringTool", {
        gradeNames: ["autoInit", "fluid.rendererComponent"],
        selectors: {
            linuxGroupLabel: ".gpii-NPGatheringTool-linuxGroupLabel",
            orcaRate: ".gpii-NPGatheringTool-orca-rate",
            orcaRateLabel: ".gpii-NPGatheringTool-orca-rate-label"
        },
        model: {
            "http://registry.gpii.org/applications/org.gnome.orca": [{
                value: {
                    rate: null
                }
            }]
        },
        strings: {
            linuxGroupLabel: "Linux",
            orcaRateLabel: "Rate"
        },
        renderOnInit: true,
        protoTree: {
            linuxGroupLabel: {
                messagekey: "linuxGroupLabel"
            },
            orcaRateLabel: {
                messagekey: "orcaRateLabel"
            },
            orcaRate: "${http://registry\.gpii\.org/applications/org\.gnome\.orca.0.value.rate}"
        }
    });

    gpii.NPGatheringTool.finalInit = function (that) {
        that.applier.modelChanged.addListener("*", function (model) {
            console.log(JSON.stringify(model));
        });
    };

    $(document).ready(function () {
        gpii.NPGatheringTool(".gpii-NPGatheringTool");
    });
    
})(jQuery, fluid);
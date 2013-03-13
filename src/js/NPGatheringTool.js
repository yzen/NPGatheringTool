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
            linuxGroupLabel: ".gpii-NPGatheringTool-linuxGroupLabel"
        },
        strings: {
            linuxGroupLabel: "Linux"
        },
        renderOnInit: true,
        protoTree: {
            linuxGroupLabel: {
                messagekey: "linuxGroupLabel"
            }
        }
    });

    $(document).ready(function () {
        gpii.NPGatheringTool(".gpii-NPGatheringTool");
    });
    
})(jQuery, fluid);
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

    fluid.registerNamespace("gpii.NPGatheringTool");

    gpii.NPGatheringTool.configParser = {
        parse: fluid.pathUtil.parseEL,
        compose: fluid.pathUtil.composePath
    };

    gpii.NPGatheringTool.resolverGetConfig = {
        parser: gpii.NPGatheringTool.configParser,
        strategies: [fluid.model.defaultFetchStrategy]
    };

    gpii.NPGatheringTool.resolverSetConfig = {
        parser: gpii.NPGatheringTool.configParser,
        strategies: [fluid.model.defaultFetchStrategy, fluid.model.defaultCreatorStrategy]
    };

    fluid.defaults("gpii.NPGatheringTool", {
        gradeNames: ["autoInit", "fluid.rendererComponent"],
        mergePolicy: {
            // TODO: This should go away once we update to the latest infusion that has a fix
            // for FLUID-4935.
            "changeApplierOptions.resolverSetConfig": "resolverSetConfig"
        },
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
            orcaRate: "${http://registry\\.gpii\\.org/applications/org\\.gnome\\.orca.0.value.rate}"
        },
        // Both set and get configs are used to resolve elPaths that contain escaped "." characters
        // and to prevent these paths from being parsed into a nested structure.
        resolverGetConfig: gpii.NPGatheringTool.resolverGetConfig,
        resolverSetConfig: gpii.NPGatheringTool.resolverSetConfig
    });

    $(document).ready(function () {
        gpii.NPGatheringTool(".gpii-NPGatheringTool");
    });
    
})(jQuery, fluid);
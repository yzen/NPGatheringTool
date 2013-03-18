/*!
GPII N/P gathering tool SET handler

Copyright 2013 OCAD University

Licensed under the New BSD license. You may not use this file except in
compliance with this License.

You may obtain a copy of the License at
https://github.com/gpii/universal/LICENSE.txt
*/

(function () {

    "use strict";

    var fluid = require("universal"),
        gpii = fluid.registerNamespace("gpii");

    gpii.requests.request.handler.NPGatheringToolSetPrefs = function (requestProxy, token, preferencesSource) {
        if (!token) {
            requestProxy.events.onError.fire({
                isError: true,
                message: "Missing preferences token."
            });
            return;
        }
        preferencesSource.set({
            token: req.params.token
        }, req.body, requestProxy.events.onSuccess.fire);
    };

})();
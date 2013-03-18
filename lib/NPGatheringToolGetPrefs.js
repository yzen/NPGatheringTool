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

    gpii.requests.request.handler.NPGatheringToolGetPrefs = function (requestProxy, token, preferencesSource) {
        preferencesSource.get({
            token: token
        }, requestProxy.events.onSuccess.fire);
    };

})();
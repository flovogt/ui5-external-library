/* global QUnit */

QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function() {
  "use strict";

  sap.ui.require([
    "com/ui5/test/ui5ExternalLibrary/test/integration/AllJourneys"
  ], function() {
    QUnit.start();
  });
});

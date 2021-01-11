sap.ui.define([
  "sap/ui/test/Opa5",
  "com/ui5/test/ui5ExternalLibrary/test/integration/arrangements/Startup",
  "com/ui5/test/ui5ExternalLibrary/test/integration/BasicJourney"
], function(Opa5, Startup) {
  "use strict";

  Opa5.extendConfig({
    arrangements: new Startup(),
    pollingInterval: 1
  });

});

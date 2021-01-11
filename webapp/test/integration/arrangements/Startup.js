sap.ui.define([
  "sap/ui/test/Opa5"
], function(Opa5) {
  "use strict";

  return Opa5.extend("com.ui5.test.ui5ExternalLibrary.test.integration.arrangements.Startup", {

    iStartMyApp: function () {
      this.iStartMyUIComponent({
        componentConfig: {
          name: "com.ui5.test.ui5ExternalLibrary",
          async: true,
          manifest: true
        }
      });
    }

  });
});

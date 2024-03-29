// Provides a shim for the lodash library
sap.ui.loader.config({
  paths: {
    "custom/Lodash": "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.20/lodash.min"
  },
  shim: {
    "custom/Lodash": {
      amd: true,
      exports: "_"
    }
  }
});

sap.ui.define([
  "sap/ui/core/UIComponent",
  "com/ui5/test/ui5ExternalLibrary/model/models"
], function (UIComponent, models) {
  "use strict";

  return UIComponent.extend("com.ui5.test.ui5ExternalLibrary.Component", {

    metadata: {
      manifest: "json"
    },

    /**
     * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
     * @public
     * @override
     */
    init: function () {
      // call the base component's init function
      UIComponent.prototype.init.apply(this, arguments);

      // enable routing
      this.getRouter().initialize();

      // set the device model
      this.setModel(models.createDeviceModel(), "device");
    }
  });
});

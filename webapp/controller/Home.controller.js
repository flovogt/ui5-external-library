sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/m/Dialog",
  "sap/m/Button",
  "sap/m/Text",
  "custom/Lodash"
], function (Controller, Dialog, Button, Text, Lodash) {
  "use strict";

  return Controller.extend("com.ui5.test.ui5ExternalLibrary.controller.Home", {

    onInit: function () {

      // call the thirdparty module via the path mapping
      var iResult1 = Lodash.divide(10, 2);

      // call the thirdparty module via the global namespace
      var iResult2 = _.divide(10, 2);

      this.oDefaultMessageDialog = new Dialog({
        title: "Default Message",
        content: new Text({ text: "The results are: " + iResult1 + " and " + iResult2 }),
        beginButton: new Button({
          text: "OK",
          press: function () {
            this.oDefaultMessageDialog.close();
          }.bind(this)
        })
      });

      this.oDefaultMessageDialog.open();
    },

  });
});

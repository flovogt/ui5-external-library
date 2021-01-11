# UI5 External Library
This project shows how easy it is to use an already hosted custom thirdparty javascript library in an UI5 application.

The magic happens in [Component.js](webapp/Component.js) where you have to configure a shim in the *UI5 Loader*:

```javascript
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
```

Then you can use the external javascript library like you know it already from other UI5 artefacts. See [Home.controller.js](webapp/controller/Home.controller.js).

```javascript
sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "custom/Lodash"
], function (Controller, Lodash) {
  "use strict";

  return Controller.extend("com.ui5.test.ui5ExternalLibrary.controller.Home", {

    onInit: function () {

      // call the thirdparty module via the path mapping
      var iResult1 = Lodash.divide(10, 2);

      // call the thirdparty module via the global namespace
      var iResult2 = _.divide(10, 2);
    }
  });
});
```

# Development
To run this UI5 application locally follow these steps:
1. Open the terminal and execute `npm i` in the root folder
2. Execute `npm start` in the terminal
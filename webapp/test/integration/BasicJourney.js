sap.ui.define([
  "sap/ui/test/opaQunit",
  "com/ui5/test/ui5ExternalLibrary/test/integration/pages/Home"
], function (opaTest) {
  "use strict";

  opaTest("should show correct number of nested pages", function (Given, When, Then) {

    // Arrangements
    Given.iStartMyApp();

    // Assertions
    Then.onTheAppPage.iShouldSeePageCount(1);

    // Cleanup
    Then.iTeardownMyApp();
  });

});

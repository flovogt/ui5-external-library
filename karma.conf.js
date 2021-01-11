module.exports = function (config) {
  "use strict";

  config.set({
    frameworks: ["ui5"],
    ui5: {
      type: "application",
    },
    browsers: ["Chrome"],
    browserConsoleLogOptions: {
      level: "error"
    }
  });
};

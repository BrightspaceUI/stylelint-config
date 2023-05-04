const { getTestRule } = require("jest-preset-stylelint");

global.testRule = getTestRule({ plugins: ["./rules/"] });

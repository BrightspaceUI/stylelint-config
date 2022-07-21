"use strict";

module.exports = {
  "extends": "stylelint-config-recommended",
  "plugins": ["stylelint-order"],
  "rules": {
    "at-rule-name-case": "lower",
    "at-rule-name-space-after": "always-single-line",
    "at-rule-semicolon-newline-after": "always",
    "block-closing-brace-newline-after": "always",
    "block-closing-brace-newline-before": "always-multi-line",
    "block-closing-brace-space-before": "always-single-line",
    "block-opening-brace-newline-after": "always-multi-line",
    "block-opening-brace-space-after": "always-single-line",
    "block-opening-brace-space-before": "always",
    "color-hex-case": "lower",
    "color-hex-length": "long",
    "comment-whitespace-inside": "always",
    "custom-property-pattern": ["^d2l-", {
      "message": "Expected custom property to begin with \"d2l-\""
    }],
    "custom-property-empty-line-before": ["always", {
      "except": [
        "after-custom-property",
        "first-nested"
      ],
      "ignore": [
        "after-comment",
        "inside-single-line-block"
      ]
    }],
    "declaration-bang-space-after": "never",
    "declaration-bang-space-before": "always",
    "declaration-block-semicolon-newline-after": "always-multi-line",
    "declaration-block-semicolon-space-after": "always-single-line",
    "declaration-block-semicolon-space-before": "never",
    "declaration-block-single-line-max-declarations": 3,
    "declaration-block-trailing-semicolon": "always",
    "declaration-colon-newline-after": "always-multi-line",
    "declaration-colon-space-after": "always-single-line",
    "declaration-colon-space-before": "never",
    "function-comma-newline-after": "always-multi-line",
    "function-comma-space-after": "always-single-line",
    "function-comma-space-before": "never",
    "function-max-empty-lines": 0,
    "function-name-case": ["lower", {
        "ignoreFunctions": ["${unsafeCSS"]
    }],
    "function-parentheses-newline-inside": "always-multi-line",
    "function-parentheses-space-inside": "never-single-line",
    "function-whitespace-after": "always",
    "indentation": "tab",
    "length-zero-no-unit": true,
    "max-empty-lines": 2,
    "media-feature-colon-space-after": "always",
    "media-feature-colon-space-before": "never",
    "media-feature-name-case": "lower",
    "media-feature-parentheses-space-inside": "never",
    "media-feature-range-operator-space-after": "always",
    "media-feature-range-operator-space-before": "always",
    "media-query-list-comma-newline-after": "always-multi-line",
    "media-query-list-comma-space-after": "always-single-line",
    "media-query-list-comma-space-before": "never",
    "no-descending-specificity": null,
    "no-eol-whitespace": [true, {
      "ignore": ["empty-lines"]
    }],
    "number-leading-zero": "always",
    "number-no-trailing-zeros": true,
    "order/order": [
      "custom-properties",
      "declarations"
    ],
    "order/properties-alphabetical-order": true,
    "property-case": "lower",
    "selector-attribute-brackets-space-inside": "never",
    "selector-attribute-operator-space-after": "never",
    "selector-attribute-operator-space-before": "never",
    "selector-combinator-space-after": "always",
    "selector-combinator-space-before": "always",
    "selector-descendant-combinator-no-non-space": true,
    "selector-list-comma-space-before": "never",
    "selector-max-empty-lines": 0,
    "selector-pseudo-class-case": "lower",
    "selector-pseudo-class-parentheses-space-inside": "never",
    "selector-pseudo-element-case": "lower",
    "selector-pseudo-element-colon-notation": "double",
	"selector-pseudo-class-disallowed-list": ["host"],
    "selector-type-case": "lower",
    "selector-type-no-unknown": [true, {
      "ignore": ["custom-elements"]
    }],
    "unit-case": "lower",
    "value-list-comma-newline-after": "always-multi-line",
    "value-list-comma-space-after": "always-single-line",
    "value-list-comma-space-before": "never",
    "value-list-max-empty-lines": 0
  },
  "overrides": [
    {
      "files": ["**/*.js"],
      "customSyntax": "@stylelint/postcss-css-in-js"
    },
    {
      "files": ["**/*.html"],
      "customSyntax": "postcss-html"
    }
  ]
};

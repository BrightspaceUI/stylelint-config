"use strict";

module.exports = {
	"extends": "stylelint-config-recommended",
	"plugins": ["./rules/index.js", "stylelint-order"],
	"rules": {
		"d2l/at-rule-name-case": "lower",
		"d2l/at-rule-name-space-after": "always-single-line",
		"d2l/at-rule-semicolon-newline-after": "always",
		"d2l/block-closing-brace-newline-after": "always",
		"d2l/block-closing-brace-newline-before": "always-multi-line",
		"d2l/block-closing-brace-space-before": "always-single-line",
		"d2l/block-opening-brace-newline-after": "always-multi-line",
		"d2l/block-opening-brace-space-after": "always-single-line",
		"d2l/block-opening-brace-space-before": "always",
		"d2l/color-hex-case": "lower",
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
		"d2l/declaration-bang-space-after": "never",
		"d2l/declaration-bang-space-before": "always",
		"d2l/declaration-block-semicolon-newline-after": "always-multi-line",
		"d2l/declaration-block-semicolon-space-after": "always-single-line",
		"d2l/declaration-block-semicolon-space-before": "never",
		"declaration-block-single-line-max-declarations": 3,
		"d2l/declaration-block-trailing-semicolon": "always",
		"d2l/declaration-colon-newline-after": "always-multi-line",
		"d2l/declaration-colon-space-after": "always-single-line",
		"d2l/declaration-colon-space-before": "never",
		"d2l/function-comma-newline-after": "always-multi-line",
		"d2l/function-comma-space-after": "always-single-line",
		"d2l/function-comma-space-before": "never",
		"d2l/function-max-empty-lines": 0,
		"function-name-case": ["lower", {
			"ignoreFunctions": ["${unsafeCSS"]
		}],
		"d2l/function-parentheses-newline-inside": "always-multi-line",
		"d2l/function-parentheses-space-inside": "never-single-line",
		"d2l/function-whitespace-after": "always",
		"d2l/indentation": "tab",
		"length-zero-no-unit": true,
		"d2l/max-empty-lines": 2,
		"d2l/media-feature-colon-space-after": "always",
		"d2l/media-feature-colon-space-before": "never",
		"d2l/media-feature-name-case": "lower",
		"d2l/media-feature-parentheses-space-inside": "never",
		"d2l/media-feature-range-operator-space-after": "always",
		"d2l/media-feature-range-operator-space-before": "always",
		"d2l/media-query-list-comma-newline-after": "always-multi-line",
		"d2l/media-query-list-comma-space-after": "always-single-line",
		"d2l/media-query-list-comma-space-before": "never",
		"no-descending-specificity": null,
		"d2l/no-eol-whitespace": [true, {
			"ignore": ["empty-lines"]
		}],
		"d2l/no-extra-semicolons": true,
		"d2l/number-leading-zero": "always",
		"d2l/number-no-trailing-zeros": true,
		"order/order": [
			"custom-properties",
			"declarations"
		],
		"order/properties-alphabetical-order": true,
		"d2l/property-case": "lower",
		"d2l/selector-attribute-brackets-space-inside": "never",
		"d2l/selector-attribute-operator-space-after": "never",
		"d2l/selector-attribute-operator-space-before": "never",
		"d2l/selector-combinator-space-after": "always",
		"d2l/selector-combinator-space-before": "always",
		"d2l/selector-descendant-combinator-no-non-space": true,
		"d2l/selector-list-comma-space-before": "never",
		"d2l/selector-max-empty-lines": 0,
		"d2l/selector-pseudo-class-case": "lower",
		"d2l/selector-pseudo-class-parentheses-space-inside": "never",
		"d2l/selector-pseudo-element-case": "lower",
		"selector-pseudo-element-colon-notation": "double",
		"selector-pseudo-class-disallowed-list": ["host-context"],
		"selector-type-case": "lower",
		"selector-type-no-unknown": [true, {
			"ignore": ["custom-elements"]
		}],
		"d2l/unit-case": "lower",
		"d2l/value-list-comma-newline-after": "always-multi-line",
		"d2l/value-list-comma-space-after": "always-single-line",
		"d2l/value-list-comma-space-before": "never",
		"d2l/value-list-max-empty-lines": 0
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

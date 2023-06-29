"use strict";

module.exports = {
	"extends": "stylelint-config-recommended",
	"plugins": [
		"stylelint-order",
		"stylelint-stylistic"
	],
	"rules": {
		"stylistic/at-rule-name-case": "lower",
		"stylistic/at-rule-name-space-after": "always-single-line",
		"stylistic/at-rule-semicolon-newline-after": "always",
		"stylistic/block-closing-brace-newline-after": "always",
		"stylistic/block-closing-brace-newline-before": "always-multi-line",
		"stylistic/block-closing-brace-space-before": "always-single-line",
		"stylistic/block-opening-brace-newline-after": "always-multi-line",
		"stylistic/block-opening-brace-space-after": "always-single-line",
		"stylistic/block-opening-brace-space-before": "always",
		"stylistic/color-hex-case": "lower",
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
		"stylistic/declaration-bang-space-after": "never",
		"stylistic/declaration-bang-space-before": "always",
		"stylistic/declaration-block-semicolon-newline-after": "always-multi-line",
		"stylistic/declaration-block-semicolon-space-after": "always-single-line",
		"stylistic/declaration-block-semicolon-space-before": "never",
		"declaration-block-single-line-max-declarations": 3,
		"stylistic/declaration-block-trailing-semicolon": "always",
		"stylistic/declaration-colon-newline-after": "always-multi-line",
		"stylistic/declaration-colon-space-after": "always-single-line",
		"stylistic/declaration-colon-space-before": "never",
		"stylistic/function-comma-newline-after": "always-multi-line",
		"stylistic/function-comma-space-after": "always-single-line",
		"stylistic/function-comma-space-before": "never",
		"stylistic/function-max-empty-lines": 0,
		"function-name-case": ["lower", {
			"ignoreFunctions": ["${unsafeCSS"]
		}],
		"stylistic/function-parentheses-newline-inside": "always-multi-line",
		"stylistic/function-parentheses-space-inside": "never-single-line",
		"stylistic/function-whitespace-after": "always",
		"stylistic/indentation": "tab",
		"length-zero-no-unit": true,
		"stylistic/max-empty-lines": 2,
		"stylistic/media-feature-colon-space-after": "always",
		"stylistic/media-feature-colon-space-before": "never",
		"stylistic/media-feature-name-case": "lower",
		"stylistic/media-feature-parentheses-space-inside": "never",
		"stylistic/media-feature-range-operator-space-after": "always",
		"stylistic/media-feature-range-operator-space-before": "always",
		"stylistic/media-query-list-comma-newline-after": "always-multi-line",
		"stylistic/media-query-list-comma-space-after": "always-single-line",
		"stylistic/media-query-list-comma-space-before": "never",
		"no-descending-specificity": null,
		"stylistic/no-eol-whitespace": [true, {
			"ignore": ["empty-lines"]
		}],
		"stylistic/number-leading-zero": "always",
		"stylistic/number-no-trailing-zeros": true,
		"order/order": [
			"custom-properties",
			"declarations"
		],
		"order/properties-alphabetical-order": true,
		"stylistic/property-case": "lower",
		"stylistic/selector-attribute-brackets-space-inside": "never",
		"stylistic/selector-attribute-operator-space-after": "never",
		"stylistic/selector-attribute-operator-space-before": "never",
		"stylistic/selector-combinator-space-after": "always",
		"stylistic/selector-combinator-space-before": "always",
		"stylistic/selector-descendant-combinator-no-non-space": true,
		"stylistic/selector-list-comma-space-before": "never",
		"stylistic/selector-max-empty-lines": 0,
		"stylistic/selector-pseudo-class-case": "lower",
		"stylistic/selector-pseudo-class-parentheses-space-inside": "never",
		"stylistic/selector-pseudo-element-case": "lower",
		"selector-pseudo-element-colon-notation": "double",
		"selector-pseudo-class-disallowed-list": ["host-context"],
		"selector-type-case": "lower",
		"selector-type-no-unknown": [true, {
			"ignore": ["custom-elements"]
		}],
		"stylistic/unit-case": "lower",
		"stylistic/value-list-comma-newline-after": "always-multi-line",
		"stylistic/value-list-comma-space-after": "always-single-line",
		"stylistic/value-list-comma-space-before": "never",
		"stylistic/value-list-max-empty-lines": 0
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

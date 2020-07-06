# stylelint-config
[![NPM version](https://img.shields.io/npm/v/@brightspace-ui/stylelint-config.svg)](https://www.npmjs.org/package/@brightspace-ui/stylelint-config)
[![NPM downloads](https://img.shields.io/npm/dt/@brightspace-ui/stylelint-config.svg)](https://www.npmjs.com/package/@brightspace-ui/stylelint-config)
[![Dependabot badge](https://flat.badgen.net/dependabot/BrightspaceUI/stylelint-config?icon=dependabot)](https://app.dependabot.com/)
[![Build status](https://travis-ci.com/BrightspaceUI/stylelint-config.svg?branch=master)](https://travis-ci.com/BrightspaceUI/stylelint-config)

Common Brightspace [stylelint](https://stylelint.io/) configs.

## Installation

Install `stylelint-config`.
```shell
npm i @brightspace-ui/stylelint-config
npm i stylelint
```

## Usage

Simply specify the `extends` property in the `.stylelintrc.json` file as shown below. The default config contains rules to avoid errors, and also to enforce consistent formatting.

```json
{
  "extends": "@brightspace-ui/stylelint-config"
}
```

Then run `stylelint`, for example by defining a script in your `package.json`.

```json
"scripts": {
  "lint:style": "stylelint \"**/*.js\""
},
```

## Contributing

Contributions are welcome, please submit a pull request!

### Code Style

This repository is configured with [EditorConfig](http://editorconfig.org) rules and contributions should make use of them.
